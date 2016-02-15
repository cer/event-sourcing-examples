/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
import auth from "redux-auth";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { emailSignUpFormUpdate, emailSignUp } from "redux-auth";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

class EmailSignUpForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
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
    this.props.dispatch(emailSignUpFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(emailSignUp(formData, this.getEndpoint()));
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"])
    );

    /*
    * <Input type="password"
     label="Password"
     placeholder="Password"
     className="email-sign-up-password"
     disabled={disabled}
     value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password"])}
     errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password"])}
     onChange={this.handleInput.bind(this, "password")}
     {...this.props.inputProps.password} />

     <Input type="password"
     label="Password Confirmation"
     placeholder="Password Confirmation"
     className="email-sign-up-password-confirmation"
     disabled={disabled}
     value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password_confirmation"])}
     errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password_confirmation"])}
     onChange={this.handleInput.bind(this, "password_confirmation")}
     {...this.props.inputProps.passwordConfirmation} />
     */
    return (
      <form className='redux-auth email-sign-up-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>

        <Input type="text"
               label="First name"
               placeholder="First name"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "fname"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "fname"])}
               onChange={this.handleInput.bind(this, "fname")}
          {...this.props.inputProps.fname} />

        <Input type="text"
               label="Last name"
               placeholder="Last name"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "lname"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "lname"])}
               onChange={this.handleInput.bind(this, "lname")}
          {...this.props.inputProps.lname} />

        <Input type="text"
               label="Email"
               placeholder="Email"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "email"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />


        <Input type="text"
               label="SSN"
               placeholder="SSN"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "ssn"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "ssn"])}
               onChange={this.handleInput.bind(this, "ssn")}
          {...this.props.inputProps.ssn} />

        <Input type="text"
               label="Phone"
               placeholder="Phone"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "phone"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "phone"])}
               onChange={this.handleInput.bind(this, "phone")}
          {...this.props.inputProps.phone} />

        <Input type="text"
               label="Address 1"
               placeholder="Address 1"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "address1"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "address1"])}
               onChange={this.handleInput.bind(this, "address1")}
          {...this.props.inputProps.address1} />

        <Input type="text"
               label="Address 2"
               placeholder="Address 2"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "address2"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "address2"])}
               onChange={this.handleInput.bind(this, "address2")}
          {...this.props.inputProps.address2} />

        <Input type="text"
               label="City"
               placeholder="City"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "city"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "city"])}
               onChange={this.handleInput.bind(this, "city")}
          {...this.props.inputProps.city} />

        <Input type="text"
               label="State"
               placeholder="State"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "state"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "state"])}
               onChange={this.handleInput.bind(this, "state")}
          {...this.props.inputProps.state} />

        <Input type="text"
               label="ZIP"
               placeholder="ZIP"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "zip"])}
               errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "zip"])}
               onChange={this.handleInput.bind(this, "zip")}
          {...this.props.inputProps.zip} />

        <ButtonLoader loading={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"])}
                      type="submit"
                      className="email-sign-up-submit pull-right"
                      icon={<Glyphicon glyph="send" />}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Sign Up
        </ButtonLoader>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpForm);