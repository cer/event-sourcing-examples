/**
 * Created by andrew on 15/02/16.
 */
import React, {PropTypes} from "react";
import * as BS from "react-bootstrap";
import read from '../../utils/readProp';
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import AuxErrorLabel from './AuxErrorLabel';
import * as AS from "../../actions/signIn";

const formValidation = (payload) => [
  'email',
  'password'
].reduce((memo, prop) => {
  let result = [];
  const value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');

  switch (prop) {
    case 'email':
    case 'password':
      if (/^$/.test(value)) {
        result.push('required');
      }
  }

  if (result.length) {
    memo[prop] = result;
    memo.hasErrors = true;
  }
  return memo;
}, {});

export class EmailSignInForm extends React.Component {

  handleInput (key, val) {
    this.props.dispatch(AS.emailSignInFormUpdate(key, val));
  }

  handleSubmit (event) {
    event.preventDefault();

    const formData = read(this.props.auth, 'signIn.form');

    const validationErrors = formValidation(formData);
    if (validationErrors.hasErrors) {
      this.props.dispatch(AS.emailSignInError(validationErrors));
      return;
    }

    this.props.dispatch(AS.emailSignIn(formData));
  }

  render () {

    try {
    const disabled = (
      this.props.auth.user.isSignedIn ||
      this.props.auth.signIn.loading
    );

      //const error = read(this.props.auth, 'signIn.errors.email', null);
      const formErrors = read(this.props.auth, 'signIn.errors.errors', '');

      return (
      <form className='redux-auth email-sign-in-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group" style={{
            display: formErrors ? 'block' : 'none'
            }}>
          <AuxErrorLabel
            label="Form:"
            errors={ formErrors.length ? [ formErrors ] : [] }
          />
        </div>

        <Input type="text"
               className="email-sign-in-email"
               label="Email"
               placeholder="Email"
               name="email"
               disabled={disabled}
               value={read(this.props.auth, 'signIn.form.email', '')}
               errors={read(this.props.auth, 'signIn.errors.email', [])}
               onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <Input type="password"
               className="password-sign-in-email"
               label="Password"
               placeholder="Password"
               name="password"
               disabled={disabled}
               value={read(this.props.auth, 'signIn.form.password', '')}
               errors={read(this.props.auth, 'signIn.errors.password', [])}
               onChange={this.handleInput.bind(this, "password")}
          {...this.props.inputProps.password} />

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

EmailSignInForm.propTypes = {
  endpoint: PropTypes.string,
  inputProps: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object,
    submit: PropTypes.object
  })
};

EmailSignInForm.defaultProps = {
  inputProps: {
    email: {},
    password: {},
    submit: {}
  }
};
