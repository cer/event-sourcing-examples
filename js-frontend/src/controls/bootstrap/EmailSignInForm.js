/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
//import auth from "redux-auth";
import * as BS from "react-bootstrap";

import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
//import { emailSignInFormUpdate, emailSignIn } from "redux-auth";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

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

function read(src, path = '', defaultVal = '') {
  const [pathItem = null, ...rest] = path.split('.');
  if (pathItem === null ) {
    return src;
  } else if (rest.length === 0) {
    if (!src) { return defaultVal; }
    return src[pathItem];
  } else {
    if (!src) { return defaultVal; }
    return read(src[pathItem], rest.join('.'));
  }
}

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
    this.props.dispatch(emailSignIn(formData, null));
  }

  render () {

    try {
    let disabled = (
      this.props.auth.user.isSignedIn ||
      this.props.auth.signIn.loading
    );

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
               errors={read(this.props.auth, 'signIn.errors.email', null)}
               onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <ButtonLoader loading={read(this.props.auth, 'signIn.loading', false)}
                      type="submit"
                      icon={<Glyphicon glyph="log-in" />}
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

export default connect(({auth}) => ({auth}))(EmailSignInForm);