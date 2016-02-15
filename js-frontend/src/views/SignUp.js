/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

import { EmailSignUpForm } from "redux-auth/bootstrap-theme"

export class SignUp extends React.Component {
  render () {

    return <EmailSignUpForm />;
    //return (
    //  <div>
    //    <PageHeader>Sign Up Page</PageHeader>
    //    <p>Here you can register.</p>
    //  </div>
    //);
  }
}
export default connect(({routes}) => ({routes}))(SignUp);