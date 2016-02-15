/**
 * Created by andrew on 12/02/16.
 */
import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

//import ButtonLoader from "./ButtonLoader";
import { Input } from "react-bootstrap";
import ButtonLoader from "../controls/bootstrap/ButtonLoader";

//export {bootstrap, materialUi} from "./views";


// bootstrap theme
//import { EmailSignInForm } from "redux-auth/bootstrap-theme";
import EmailSignInForm from "../controls/bootstrap/EmailSignInForm";


export class SignIn extends React.Component {

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

    return <EmailSignInForm />;
    //return (
    //  <div>
    //    <PageHeader>Sign In First</PageHeader>
    //    <p>Unauthenticated users can't access the account page.</p>
    //  </div>
    //);
  }
}
export default connect(({routes}) => ({routes}))(SignIn);
