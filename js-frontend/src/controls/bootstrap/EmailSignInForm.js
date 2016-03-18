/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
import { connect } from "react-redux";
import read from '../../utils/readProp';

import * as BS from "react-bootstrap";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";


import { emailSignInFormUpdate, emailSignIn } from "../../actions/signIn";

/*
 <Input type="password"
 label="Password"
 className="email-sign-in-password"
 placeholder="Password"
 disabled={disabled}
 value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"])}
 errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"])}
 onChange={this.handleInput.bind(this, "password")}
 {...this.props.inputProps.password} />
  */

class EmailSignInForm extends React.Component {

  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    inputProps: {
      email: {},
      password: {},
      submit: {}
    }
  };

  handleInput (key, val) {
    this.props.dispatch(emailSignInFormUpdate(key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = { ...this.props.auth.signIn.form };
    this.props.dispatch(emailSignIn(formData));
  }

  render () {

    try {
    const disabled = (
      this.props.auth.user.isSignedIn ||
      this.props.auth.signIn.loading
    );

      //const error = read(this.props.auth, 'signIn.errors.email', null);
      //debugger;

    return (
      <form className='redux-auth email-sign-in-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>
        <Input type="text"
               className="email-sign-in-email"
               label="Email"
               placeholder="Email"
               name="email"
               disabled={disabled}
               value={read(this.props.auth, 'signIn.form.email', '')}
               errors={read(this.props.auth, 'signIn.errors.email', {})}
               onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <ButtonLoader loading={read(this.props.auth, 'signIn.loading', false)}
                      type="submit"
                      icon={<BS.Glyphicon glyph="log-in" />}
                      className='email-sign-in-submit pull-right'
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Sign In
        </ButtonLoader>
      </form>
    );
    } catch (ex){
      console.error('Render exception: ', ex);
      return [' ERROR '];
    }
  }
}

export default connect(({app}) => ({auth: app.auth}))(EmailSignInForm);