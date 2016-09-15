/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { Glyphicon } from "react-bootstrap";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import IndexPanel from "./../../components/partials/IndexPanel";
import AuxErrorLabel from './AuxErrorLabel';
import { customerInfoMap } from '../../entities/formToPayloadMappers';
import read from '../../utils/readProp';
import * as AS from '../../actions/signUp';

const formValidation = (payload) => [
  'fname',
  'lname',
  'email',
  'password',
  'passwordConfirm',
  'ssn',
  'phoneNumber',
  'address1',
  'address2',
  'city',
  'state',
  'zip'
].reduce((memo, prop) => {
  let result = [];
  const value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');

  switch (prop) {
    case 'fname':
    case 'lname':
    case 'email':
    case 'ssn':
    case 'password':
    case 'passwordConfirm':
      if (/^$/.test(value)) {
        result.push('required');
      }
  }

  switch (prop) {
    case 'passwordConfirm':
      if (value != payload['password']) {
        result.push('need to be equal to password');
      }
  }

  if (result.length) {
    memo[prop] = result;
    memo.hasErrors = true;
  }
  return memo;
}, {});


class EmailSignUpForm extends React.Component {

  handleInput (key, val) {
    this.props.dispatch(AS.emailSignUpFormUpdate(key, val));
  }

  handleSubmit (event) {
    event.preventDefault();

    const formData = read(this.props.auth, 'signUp.form');
    const validationErrors = formValidation(formData);
    if (validationErrors.hasErrors) {
      this.props.dispatch(AS.emailSignUpError(validationErrors));
      return;
    }

    this.props.dispatch(AS.emailSignUp(customerInfoMap(formData)));
  }

  render () {

    const disabled = (
      this.props.auth.user.isSignedIn ||
      this.props.auth.signUp.loading
    );

    const formErrors = read(this.props.auth, 'signUp.errors.errors', '');

    return (
      <form className='redux-auth email-sign-up-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group" style={{
          display: formErrors ? 'block' : 'none'
        }}>
          <AuxErrorLabel
            label="Form:"
            errors={ formErrors.length ? [ formErrors ] : [] }
          />
        </div>

        <IndexPanel header="basic">

          <Input type="text"
                 label="First name"
                 placeholder="First name"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.fname', '')}
                 errors={read(this.props.auth, 'signUp.errors.fname', [])}
                 onChange={this.handleInput.bind(this, "fname")}
          />

          <Input type="text"
                 label="Last name"
                 placeholder="Last name"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.lname', '')}
                 errors={read(this.props.auth, 'signUp.errors.lname', [])}
                 onChange={this.handleInput.bind(this, "lname")}
          />

          <Input type="text"
                 label="Email"
                 placeholder="Email"
                 className="email-sign-up-email"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.email', '')}
                 errors={read(this.props.auth, 'signUp.errors.email', [])}
                 onChange={this.handleInput.bind(this, "email")}
          />

          <Input type="password"
                 className="password-sign-in-email"
                 label="Password"
                 placeholder="Password"
                 name="password"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.password', '')}
                 errors={read(this.props.auth, 'signUp.errors.password', [])}
                 onChange={this.handleInput.bind(this, "password")}
                 />

          <Input type="password"
                 className="password-sign-in-email"
                 label="Confirm password"
                 placeholder="Confirm password"
                 name="password-confirm"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.passwordConfirm', '')}
                 errors={read(this.props.auth, 'signUp.errors.passwordConfirm', [])}
                 onChange={this.handleInput.bind(this, "passwordConfirm")}
                 />


        </IndexPanel>

        <IndexPanel header="advanced">
          <Input type="text"
                 label="SSN"
                 placeholder="SSN"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.ssn', '')}
                 errors={read(this.props.auth, 'signUp.errors.ssn', [])}
                 onChange={this.handleInput.bind(this, "ssn")}
          />

          <Input type="text"
                 label="Phone"
                 placeholder="Phone"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.phoneNumber', '')}
                 errors={read(this.props.auth, 'signUp.errors.phoneNumber', [])}
                 onChange={this.handleInput.bind(this, "phoneNumber")}
          />

          <Input type="text"
                 label="Address 1"
                 placeholder="Address 1"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.address1', '')}
                 errors={read(this.props.auth, 'signUp.errors.address1', [])}
                 onChange={this.handleInput.bind(this, "address1")}
          />

          <Input type="text"
                 label="Address 2"
                 placeholder="Address 2"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.address2', '')}
                 errors={read(this.props.auth, 'signUp.errors.address2', [])}
                 onChange={this.handleInput.bind(this, "address2")}
          />

          <Input type="text"
                 label="City"
                 placeholder="City"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.city', '')}
                 errors={read(this.props.auth, 'signUp.errors.city', {})}
                 onChange={this.handleInput.bind(this, "city")}
          />

          <Input type="text"
                 label="State"
                 placeholder="State"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.state', '')}
                 errors={read(this.props.auth, 'signUp.errors.state', [])}
                 onChange={this.handleInput.bind(this, "state")}
          />

          <Input type="text"
                 label="ZIP"
                 placeholder="ZIP"
                 className="email-sign-up-email"
                 bsSize="small"
                 disabled={disabled}
                 value={read(this.props.auth, 'signUp.form.zip', '')}
                 errors={read(this.props.auth, 'signUp.errors.zip', [])}
                 onChange={this.handleInput.bind(this, "zip")}
          />

        </IndexPanel>



        <ButtonLoader loading={read(this.props.auth, 'signUp.loading', false)}
                      type="submit"
                      className="email-sign-up-submit pull-right"
                      icon={<Glyphicon glyph="send" />}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
        >
          Sign Up
        </ButtonLoader>
      </form>
    );

  }
}

export default connect(({app}) => ({auth: app.auth}))(EmailSignUpForm);