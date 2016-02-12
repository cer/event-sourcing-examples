/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

export class SignIn extends React.Component {
  render () {
    return (
      <div>
        <PageHeader>Sign In First</PageHeader>
        <p>Unauthenticated users can't access the account page.</p>
      </div>
    );
  }
}
export default connect(({routes}) => ({routes}))(SignIn);
