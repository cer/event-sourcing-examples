/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

//import ButtonLoader from "./ButtonLoader";
import { Input } from "react-bootstrap";
import * as BS from "react-bootstrap";

import {pushState} from "redux-router";

import ButtonLoader from "../controls/bootstrap/ButtonLoader";

//export {bootstrap, materialUi} from "./views";


// bootstrap theme
//import { EmailSignInForm } from "redux-auth/bootstrap-theme";
import EmailSignInForm from "../controls/bootstrap/EmailSignInForm";

export class SignIn extends React.Component {

  checkRedirect(props) {
    if (props.auth.user.isSignedIn) {
      props.dispatch(pushState(null, props.location.query.next));
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
    const signInProps = {
      inputProps: {
        password: {
          className: 'hide hidden',
          style: { display: 'none' },
          value: null,
          disabled: true
        }
      }
    };

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
    auth
  }) => ({
  //dispatch,
    routes,
    auth
}))(SignIn);
