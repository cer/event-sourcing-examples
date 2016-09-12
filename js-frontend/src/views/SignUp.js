/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
//import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { pushState } from 'redux-router';
import read from '../utils/readProp';

import { PageHeader, OverlayTrigger, Tooltip, Row, ButtonGroup, Table } from "react-bootstrap";
import * as BS from "react-bootstrap";
import { Link, IndexLink} from "react-router";

//import { EmailSignUpForm } from "redux-auth/bootstrap-theme"
import EmailSignUpForm from "../controls/bootstrap/EmailSignUpForm";

export class SignUp extends React.Component {

  checkRedirect(props) {
    if (props.isAuthenticated) {
      // redirect to login and add next param so we can redirect again after login
      // const redirectAfterLogin = props.location.pathname;
      props.dispatch(pushState(null, `/`));
    }
  }

  componentWillMount() {
    this.checkRedirect(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkRedirect(nextProps);
  }

  render () {
    return (
      <BS.Well>
        <BS.PageHeader>Register</BS.PageHeader>
        <EmailSignUpForm />
      </BS.Well>
    );

  }
}
export default connect(({
  routes,
  app
}) => ({routes,
  isAuthenticated: read(app, 'auth.user.isSignedIn', false)
}))(SignUp);