/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
import auth from "redux-auth";
import * as BS from "react-bootstrap";

import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { emailSignInFormUpdate, emailSignIn } from "redux-auth";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

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

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(emailSignInFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(emailSignIn(formData, this.getEndpoint()));
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])
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
               value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"])}
               errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <ButtonLoader loading={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])}
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
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInForm);