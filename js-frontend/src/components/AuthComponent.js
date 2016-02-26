/**
 * Created by andrew on 21/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

export function requireAuthentication(Component) {

  class AuthComponent extends React.Component {

    componentWillMount() {
      if (!this.props.isAuthenticated) {

        // redirect to login and add next param so we can redirect again after login
        const redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(pushState(null, `/signin?next=${redirectAfterLogin}`));
      }
    }

    render() {
      if (!this.props.isAuthenticated) {
        return (<div className="panel">
          <h2 className="text-danger">No anonymous access!</h2>
        </div>)
      }
      // render the component that requires auth (passed to this wrapper)
      return (
        <Component  {...this.props} />
      )
    }
  }

  const mapStateToProps =
    (state) => {
      console.info('state', state);
      return ({
        //token: state.auth.token,
        //userName: state.auth.userName,
        //isAuthenticated: state.auth.isAuthenticated
        isAuthenticated: state.auth.user.isSignedIn
      })
    };

  return connect(mapStateToProps)(AuthComponent);

}