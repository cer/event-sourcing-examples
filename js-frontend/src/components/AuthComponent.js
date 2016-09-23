/**
 * Created by andrew on 21/02/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import read from '../utils/readProp';

export function requireAuthentication(Component) {

  class AuthComponent extends React.Component {

    checkRedirect(props) {
      if (!props.isAuthenticated) {
          // redirect to login and add next param so we can redirect again after login
        const redirectAfterLogin = props.location.pathname;
        props.dispatch(pushState(null, `/signin?next=${redirectAfterLogin}`));
      }
    }

    componentWillMount() {
      this.checkRedirect(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.checkRedirect(nextProps);
    }

    render() {

      const { isAuthenticated = false } = this.props;

      if (isAuthenticated) {
        // render the component that requires auth (passed to this wrapper)
        return (
          <Component  {...this.props} />
        )
      }

      return (<div className="panel">
        <h2 className="text-danger">No anonymous access!</h2>
      </div>);

    }
  }

  const mapStateToProps =
    (state) => {
      return ({
        isAuthenticated: read(state, 'app.auth.user.isSignedIn', false)
      })
    };

  return connect(mapStateToProps)(AuthComponent);

}