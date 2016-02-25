/**
 * Created by andrew on 12/02/16.
 */

import React from "react";
import { createStore, compose, applyMiddleware, combineReducers} from "redux";
import { Provider} from "react-redux";
import thunk from "redux-thunk";
import createLogger from 'redux-logger';

import { Route, IndexRoute, Link, IndexLink } from "react-router";
import { ReduxRouter} from "redux-router";

//import { Router, IndexRoute, Route, browserHistory } from 'react-router';
//import { syncHistory, routeReducer } from 'react-router-redux';

import { configure as reduxAuthConfigure, authStateReducer } from "redux-auth";
import { AuthGlobals } from "redux-auth/bootstrap-theme";

import { createHistory, createHashHistory, createMemoryHistory } from "history";
import { routerStateReducer, reduxReactRouter as clientRouter} from "redux-router";
import { reduxReactRouter as serverRouter } from "redux-router/server";


import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import { requireAuthentication } from './components/AuthComponent';

//import demoButtons from "./reducers/request-test-buttons";
//import demoUi from "./reducers/demo-ui";
import Container from "./components/partials/Container";
import MyAccounts from "./views/MyAccounts";
import Account from "./views/Account";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
//import GlobalComponents from "./views/partials/GlobalComponents";


// TODO: !!!!
//         <GlobalComponents />

class App extends React.Component {
  render() {
    return (
      <Container>
        <AuthGlobals />
        {this.props.children}
      </Container>
    );
  }
}

export function initialize({cookies, isServer, currentLocation, userAgent} = {}) {

  const reducer = combineReducers({
    auth:   authStateReducer,
    router: routerStateReducer
    //demoButtons,
    //demoUi
  });

  //let store;

  //// access control method, used above in the "account" route
  //const requireAuth = (nextState, transition, cb) => {
  //  // the setTimeout is necessary because of this bug:
  //  // https://github.com/rackt/redux-router/pull/62
  //  // this will result in a bunch of warnings, but it doesn't seem to be a serious problem
  //  setTimeout(() => {
  //    if (!store.getState().auth.getIn(["user", "isSignedIn"])) {
  //      transition(null, "/login");
  //    }
  //    cb();
  //  }, 0);
  //};


  // define app routes
  //      <Route path="account" component={Account} onEnter={requireAuth} />
  //<Route path="account" component={requireAuthentication(Account)} />

  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={requireAuthentication(MyAccounts)} />
      <Route path="signin" component={SignIn} />
      <Route path="register" component={SignUp} />
      <Route path="account/:accountId" component={requireAuthentication(Account)} />
    </Route>
  );

  // these methods will differ from server to client
  const reduxReactRouter    = isServer ? serverRouter : clientRouter;
  const createHistoryMethod = isServer ? createMemoryHistory : createHashHistory;

  // create the redux store
  const store = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
    reduxReactRouter({
      createHistory: createHistoryMethod,
      routes
    })
  )(createStore)(reducer);


  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(((() => { debugger; })() , reduxAuthConfigure)([
    {
      default: {
        //apiUrl: __API_URL__
        apiUrl: '/',
        emailSignInPath: 'login',
        emailRegistrationPath: 'customers'
      }
    }
    //, {
    //  evilUser: {
    //    //apiUrl:                __API_URL__,
    //    apiUrl:                '/api',
    //    signOutPath:           "/mangs/sign_out",
    //    emailSignInPath:       "/mangs/sign_in",
    //    emailRegistrationPath: "/mangs",
    //    accountUpdatePath:     "/mangs",
    //    accountDeletePath:     "/mangs",
    //    passwordResetPath:     "/mangs/password",
    //    passwordUpdatePath:    "/mangs/password",
    //    tokenValidationPath:   "/mangs/validate_token",
    //    authProviderPaths: {
    //      github:    "/mangs/github",
    //      facebook:  "/mangs/facebook",
    //      google:    "/mangs/google_oauth2"
    //    }
    //  }
    //}
  ], {
    cookies,
    isServer,
    currentLocation,
    tokenFormat: {
      "access-token": "{{ access-token }}",
      "uid": "true"
    },
    initialCredentials: {
      'uid': 123
    }
  })).then(({ redirectPath, blank } = {}) => {
    // hack for material-ui server-side rendering.
    // see https://github.com/callemall/material-ui/pull/2007
    if (userAgent) {
      global.navigator = {userAgent};
    }

    if (blank) {
      // if `blank` is true, this is an OAuth redirect and should not
      // be rendered
      return <noscript />;
    }

    console.log(`redirect path: ${redirectPath}`);

    return ({
      blank,
      store,
      redirectPath,
      provider: (
        <Provider store={store} key="provider">
          <ReduxRouter children={routes} />
        </Provider>
      )
    });
  });
}