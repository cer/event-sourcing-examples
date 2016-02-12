/**
 * Created by andrew on 12/02/16.
 */
import { AuthGlobals } from "redux-auth/bootstrap-theme";

import React from "react";
import { Provider} from "react-redux";
import { ReduxRouter} from "redux-router";
import { Route, IndexRoute} from "react-router";
import { configure, authStateReducer} from "redux-auth";
import { createStore, compose, applyMiddleware} from "redux";
import { createHistory, createMemoryHistory} from "history";
import { routerStateReducer, reduxReactRouter as clientRouter} from "redux-router";
import { reduxReactRouter as serverRouter } from "redux-router/server";
import { combineReducers} from "redux";
import thunk from "redux-thunk";

//import demoButtons from "./reducers/request-test-buttons";
//import demoUi from "./reducers/demo-ui";
//import Container from "./views/partials/Container";
//import Main from "./views/Main";
import Account from "./views/Account";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
//import GlobalComponents from "./views/partials/GlobalComponents";


// TODO: !!!!
class App extends React.Component {
  render() {
    return (
      <Container>
        <GlobalComponents />
        <AuthGlobals />
        {this.props.children}
      </Container>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="well">
        Component: Main <br/>
        {this.props.children}
      </div>
    );
  }
}

class GlobalComponents extends React.Component {
  render() {
    return (
      <div className="well">
        Component: GlobalComponents <br/>
        {this.props.children}
      </div>
    );
  }
}

class Container extends React.Component {
  render() {
    return (
      <div className="well">
        Component: Container <br/>
        {this.props.children}
      </div>
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

  let store;

  // access control method, used above in the "account" route
  const requireAuth = (nextState, transition, cb) => {
    // the setTimeout is necessary because of this bug:
    // https://github.com/rackt/redux-router/pull/62
    // this will result in a bunch of warnings, but it doesn't seem to be a serious problem
    setTimeout(() => {
      debugger;
      if (!store.getState().auth.getIn(["user", "isSignedIn"])) {
        transition(null, "/login");
      }
      cb();
    }, 0);
  };

  // define app routes
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="login" component={SignIn} />
      <Route path="register" component={SignUp} />
      <Route path="account" component={Account} onEnter={requireAuth} />
    </Route>
  );

  // these methods will differ from server to client
  var reduxReactRouter    = clientRouter;
  var createHistoryMethod = createHistory;

  if (isServer) {
    reduxReactRouter    = serverRouter;
    createHistoryMethod = createMemoryHistory;
  }

  // create the redux store
  store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      createHistory: createHistoryMethod,
      routes
    })
  )(createStore)(reducer);


  /**
   * The React Router 1.0 routes for both the server and the client.
   */
  return store.dispatch(configure([
    {
      default: {
        //apiUrl: __API_URL__
        apiUrl: '/api'
      }
    }, {
      evilUser: {
        //apiUrl:                __API_URL__,
        apiUrl:                '/api',
        signOutPath:           "/mangs/sign_out",
        emailSignInPath:       "/mangs/sign_in",
        emailRegistrationPath: "/mangs",
        accountUpdatePath:     "/mangs",
        accountDeletePath:     "/mangs",
        passwordResetPath:     "/mangs/password",
        passwordUpdatePath:    "/mangs/password",
        tokenValidationPath:   "/mangs/validate_token",
        authProviderPaths: {
          github:    "/mangs/github",
          facebook:  "/mangs/facebook",
          google:    "/mangs/google_oauth2"
        }
      }
    }
  ], {
    cookies,
    isServer,
    currentLocation
  })).then(({redirectPath, blank} = {}) => {
    // hack for material-ui server-side rendering.
    // see https://github.com/callemall/material-ui/pull/2007
    if (userAgent) {
      global.navigator = {userAgent};
    }

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