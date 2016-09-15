/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import * as BS from "react-bootstrap";
import { pushState } from "redux-router";
import { EmailSignInForm } from "../controls/bootstrap/EmailSignInForm";
import read from '../utils/readProp';

export class SignIn extends React.Component {

  checkRedirect(props) {

    const isSignedIn = read(props.auth, 'user.isSignedIn');
    if (isSignedIn) {

      const nextLocation = read(props.location, 'query.next');
      props.dispatch(pushState(null, nextLocation));

      //// redirect to login and add next param so we can redirect again after login
      //const redirectAfterLogin = this.props.location.pathname;
      //this.props.dispatch(pushState(null, `/signin?next=${redirectAfterLogin}`));
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
        <PageHeader>Sign In</PageHeader>
        <EmailSignInForm {...this.props} />
      </BS.Well>
    );
  }
}
export default connect(({
  //dispatch,
    routes,
    app
  }) => ({
  //dispatch,
    routes,
    auth: app.auth
}))(SignIn);
