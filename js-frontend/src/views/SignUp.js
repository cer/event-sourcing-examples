/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
//import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { PageHeader, OverlayTrigger, Tooltip, Row, ButtonGroup, Table } from "react-bootstrap";
import * as BS from "react-bootstrap";
import { Link, IndexLink} from "react-router";

//import { EmailSignUpForm } from "redux-auth/bootstrap-theme"
import EmailSignUpForm from "../controls/bootstrap/EmailSignUpForm";

export class SignUp extends React.Component {

  render () {
    return (
      <div>
        <PageHeader>
          Register
        </PageHeader>
        <BS.Well>
          <EmailSignUpForm endpoint="default" />
        </BS.Well>
      </div>
    );

  }
}
export default connect(({routes}) => ({routes}))(SignUp);