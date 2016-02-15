/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

//import { EmailSignUpForm } from "redux-auth/bootstrap-theme"
import EmailSignUpForm from "../controls/bootstrap/EmailSignUpForm";

export class SignUp extends React.Component {
  render () {

    return <EmailSignUpForm endpoint="default" />;

  }
}
export default connect(({routes}) => ({routes}))(SignUp);