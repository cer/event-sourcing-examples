/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
//import auth from "redux-auth";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
//import { emailSignUpFormUpdate, emailSignUp } from "redux-auth";
import IndexPanel from "./../../components/partials/IndexPanel";
import { customerInfoMap } from '../../entities/formToPayloadMappers';

import read from '../../utils/readProp';

import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

import {emailSignUpFormUpdate, emailSignUp} from '../../actions/signUp';


class EmailSignUpForm extends React.Component {
  static propTypes = {
    //endpoint: PropTypes.string,
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
    this.props.dispatch(emailSignUpFormUpdate(key, val));
  }

  handleSubmit (event) {
    event.preventDefault();

    let formData = { ...this.props.auth.signUp.form };

    console.log(customerInfoMap(formData));
    this.props.dispatch(emailSignUp(customerInfoMap(formData)));
  }

  render () {

    try {

      const disabled = (
        this.props.auth.user.isSignedIn ||
        this.props.auth.signUp.loading
      );

    return (
      <form className='redux-auth email-sign-up-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>

        <IndexPanel header="basic">

          <Input type="text"
                 label="First name"
                 placeholder="First name"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.fname', '')}
                 errors={read(this.props.auth, 'signUp.errors.fname', {})}
                 onChange={this.handleInput.bind(this, "fname")}
            {...this.props.inputProps.fname} />

          <Input type="text"
                 label="Last name"
                 placeholder="Last name"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.lname', '')}
                 errors={read(this.props.auth, 'signUp.errors.lname', {})}
                 onChange={this.handleInput.bind(this, "lname")}
            {...this.props.inputProps.lname} />

          <Input type="text"
                 label="Email"
                 placeholder="Email"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.email', '')}
                 errors={read(this.props.auth, 'signUp.errors.email', {})}
                 onChange={this.handleInput.bind(this, "email")}
            {...this.props.inputProps.email} />


        </IndexPanel>

        <IndexPanel header="advanced">
          <Input type="text"
                 label="SSN"
                 placeholder="SSN"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.ssn', '')}
                 errors={read(this.props.auth, 'signUp.errors.ssn', {})}
                 onChange={this.handleInput.bind(this, "ssn")}
            {...this.props.inputProps.ssn} />

          <Input type="text"
                 label="Phone"
                 placeholder="Phone"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.phoneNumber', '')}
                 errors={read(this.props.auth, 'signUp.errors.phoneNumber', {})}
                 onChange={this.handleInput.bind(this, "phoneNumber")}
            {...this.props.inputProps.phoneNumber} />

          <Input type="text"
                 label="Address 1"
                 placeholder="Address 1"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.address1', '')}
                 errors={read(this.props.auth, 'signUp.errors.address1', {})}
                 onChange={this.handleInput.bind(this, "address1")}
            {...this.props.inputProps.address1} />

          <Input type="text"
                 label="Address 2"
                 placeholder="Address 2"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.address2', '')}
                 errors={read(this.props.auth, 'signUp.errors.address2', {})}
                 onChange={this.handleInput.bind(this, "address2")}
            {...this.props.inputProps.address2} />

          <Input type="text"
                 label="City"
                 placeholder="City"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.city', '')}
                 errors={read(this.props.auth, 'signUp.errors.city', {})}
                 onChange={this.handleInput.bind(this, "city")}
            {...this.props.inputProps.city} />

          <Input type="text"
                 label="State"
                 placeholder="State"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.state', '')}
                 errors={read(this.props.auth, 'signUp.errors.state', {})}
                 onChange={this.handleInput.bind(this, "state")}
            {...this.props.inputProps.state} />

          <Input type="text"
                 label="ZIP"
                 placeholder="ZIP"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.zip', '')}
                 errors={read(this.props.auth, 'signUp.errors.zip', {})}
                 onChange={this.handleInput.bind(this, "zip")}
                 {...this.props.inputProps.zip} />

        </IndexPanel>



        <ButtonLoader loading={read(this.props.auth, 'signUp.loading', false)}
                      type="submit"
                      className="email-sign-up-submit pull-right"
                      icon={<Glyphicon glyph="send" />}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
                      { ...this.props.inputProps.submit } >
          Sign Up
        </ButtonLoader>
      </form>
    );
    } catch (ex){
      console.error('Render exception: ', ex);
      return [' ERROR '];
    }
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpForm);