webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _app = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Fire-up React Router.
	 */
	(0, _app.initialize)().then(function (_ref) {
	  var provider = _ref.provider;
	
	  var reactRoot = window.document.getElementById("root");
	  _reactDom2.default.render(provider, reactRoot);
	});
	
	/**
	 * Detect whether the server-side render has been discarded due to an invalid checksum.
	 */
	/**
	 * Created by andrew on 12/02/16.
	 */
	if (process.env.NODE_ENV !== "production") {
	  var reactRoot = window.document.getElementById("root");
	  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes || !reactRoot.firstChild.attributes["data-react-checksum"]) {
	    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "client.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.initialize = initialize;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(160);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reduxThunk = __webpack_require__(181);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(182);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reactRouter = __webpack_require__(183);
	
	var _reduxRouter = __webpack_require__(246);
	
	var _history = __webpack_require__(262);
	
	var _server = __webpack_require__(289);
	
	var _reducers = __webpack_require__(292);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _configure = __webpack_require__(314);
	
	var _navigate = __webpack_require__(330);
	
	var _AuthComponent = __webpack_require__(331);
	
	var _Container = __webpack_require__(333);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _MyAccounts = __webpack_require__(582);
	
	var _MyAccounts2 = _interopRequireDefault(_MyAccounts);
	
	var _Account = __webpack_require__(601);
	
	var _Account2 = _interopRequireDefault(_Account);
	
	var _SignIn = __webpack_require__(605);
	
	var _SignIn2 = _interopRequireDefault(_SignIn);
	
	var _SignUp = __webpack_require__(608);
	
	var _SignUp2 = _interopRequireDefault(_SignUp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 12/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Container2.default,
	        null,
	        this.props.children
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	function initialize() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var cookies = _ref.cookies;
	  var isServer = _ref.isServer;
	  var currentLocation = _ref.currentLocation;
	  var userAgent = _ref.userAgent;
	
	
	  var reducer = (0, _redux.combineReducers)({
	    app: _reducers2.default,
	    router: _reduxRouter.routerStateReducer
	  });
	
	  var dispatch = null;
	
	  var onEnter = function onEnter(nextState) {
	    var location = nextState.location;
	
	    dispatch && dispatch((0, _navigate.visitLocation)(location));
	  };
	
	  var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: "/", component: App },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: (0, _AuthComponent.requireAuthentication)(_MyAccounts2.default) }),
	    _react2.default.createElement(_reactRouter.Route, { path: "signin", component: _SignIn2.default, onEnter: onEnter }),
	    _react2.default.createElement(_reactRouter.Route, { path: "register", component: _SignUp2.default, onEnter: onEnter }),
	    _react2.default.createElement(_reactRouter.Route, { path: "account/:accountId", component: (0, _AuthComponent.requireAuthentication)(_Account2.default) })
	  );
	
	  // these methods will differ from server to client
	  var reduxReactRouter = isServer ? _server.reduxReactRouter : _reduxRouter.reduxReactRouter;
	  var createHistoryMethod = isServer ? _history.createMemoryHistory : _history.createHashHistory;
	
	  // create the redux store
	  var store = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()), reduxReactRouter({
	    routes: routes,
	    createHistory: createHistoryMethod
	  }))(_redux.createStore)(reducer);
	
	  dispatch = store.dispatch;
	
	  /**
	   * The React Router 1.0 routes for both the server and the client.
	   */
	  return store.dispatch((0, _configure.configure)([{
	    default: {
	      //apiUrl: '/',
	      emailSignInPath: '/api/login',
	      customersPath: '/api/customers',
	      currentUserPath: '/api/user',
	      accountsPath: '/api/accounts',
	      transfersPath: '/api/transfers'
	    }
	  }], {
	    cookies: cookies,
	    isServer: isServer,
	    currentLocation: currentLocation,
	    storage: 'localStorage',
	    tokenFormat: {
	      "access-token": "{{ access-token }}"
	    },
	    handleLoginResponse: function handleLoginResponse(resp) {
	      debugger;
	      return resp.data;
	    },
	
	    handleAccountUpdateResponse: function handleAccountUpdateResponse(resp) {
	      debugger;
	      return resp.data;
	    },
	
	    handleTokenValidationResponse: function handleTokenValidationResponse(resp) {
	      debugger;
	      return resp.data;
	    }
	  })).then(function () {
	    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var redirectPath = _ref2.redirectPath;
	    var blank = _ref2.blank;
	
	    // hack for material-ui server-side rendering.
	    // see https://github.com/callemall/material-ui/pull/2007
	    if (userAgent) {
	      global.navigator = { userAgent: userAgent };
	    }
	
	    if (blank) {
	      // if `blank` is true, this is an OAuth redirect and should not
	      // be rendered
	      return _react2.default.createElement("noscript", null);
	    }
	
	    console.log("redirect path: " + redirectPath);
	
	    return {
	      blank: blank,
	      store: store,
	      redirectPath: redirectPath,
	      provider: _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store, key: "provider" },
	        _react2.default.createElement(_reduxRouter.ReduxRouter, { children: routes })
	      )
	    };
	  });
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	// This file is copied to the root of the project to allow
	'use strict';
	
	exports.__esModule = true;
	
	var _libServer = __webpack_require__(290);
	
	exports.reduxReactRouter = _libServer.reduxReactRouter;
	exports.match = _libServer.match;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.match = match;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(160);
	
	var _reduxReactRouter = __webpack_require__(256);
	
	var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);
	
	var _useDefaults = __webpack_require__(258);
	
	var _useDefaults2 = _interopRequireDefault(_useDefaults);
	
	var _routeReplacement = __webpack_require__(259);
	
	var _routeReplacement2 = _interopRequireDefault(_routeReplacement);
	
	var _matchMiddleware = __webpack_require__(291);
	
	var _matchMiddleware2 = _interopRequireDefault(_matchMiddleware);
	
	var _constants = __webpack_require__(248);
	
	function serverInvariants(next) {
	  return function (options) {
	    return function (createStore) {
	      if (!options || !(options.routes || options.getRoutes)) {
	        throw new Error('When rendering on the server, routes must be passed to the ' + 'reduxReactRouter() store enhancer; routes as a prop or as children of ' + '<ReduxRouter> is not supported. To deal with circular dependencies ' + 'between routes and the store, use the option getRoutes(store).');
	      }
	      if (!options || !options.createHistory) {
	        throw new Error('When rendering on the server, createHistory must be passed to the ' + 'reduxReactRouter() store enhancer');
	      }
	
	      return next(options)(createStore);
	    };
	  };
	}
	
	function matching(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var store = _redux.compose(_redux.applyMiddleware(_matchMiddleware2['default'](function (url, callback) {
	          var location = store.history.createLocation(url);
	
	          store.history.match(location, callback);
	        })), next(options))(createStore)(reducer, initialState);
	        return store;
	      };
	    };
	  };
	}
	
	function match(url, callback) {
	  return {
	    type: _constants.MATCH,
	    payload: {
	      url: url,
	      callback: callback
	    }
	  };
	}
	
	var reduxReactRouter = _redux.compose(serverInvariants, _useDefaults2['default'], _routeReplacement2['default'], matching)(_reduxReactRouter2['default']);
	exports.reduxReactRouter = reduxReactRouter;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = matchMiddleware;
	
	var _actionCreators = __webpack_require__(254);
	
	var _constants = __webpack_require__(248);
	
	function matchMiddleware(match) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.MATCH) {
	          (function () {
	            var _action$payload = action.payload;
	            var url = _action$payload.url;
	            var callback = _action$payload.callback;
	
	            match(url, function (error, redirectLocation, routerState) {
	              if (!error && !redirectLocation && routerState) {
	                dispatch(_actionCreators.routerDidChange(routerState));
	              }
	              callback(error, redirectLocation, routerState);
	            });
	          })();
	        }
	        return next(action);
	      };
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(160);
	
	var _auth = __webpack_require__(293);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _data = __webpack_require__(304);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _ui = __webpack_require__(309);
	
	var _ui2 = _interopRequireDefault(_ui);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 18/03/16.
	 */
	var mainReducer = (0, _redux.combineReducers)({
	  auth: _auth2.default,
	  data: _data2.default,
	  ui: _ui2.default
	});
	
	exports.default = mainReducer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(160);
	
	var _configure = __webpack_require__(294);
	
	var _authenticate = __webpack_require__(298);
	
	var _signin = __webpack_require__(299);
	
	var _signup = __webpack_require__(301);
	
	var _signout = __webpack_require__(302);
	
	var _user = __webpack_require__(303);
	
	var authStateReducer = (0, _redux.combineReducers)({
	  configure: _configure.configReducer,
	  signIn: _signin.signInReducer,
	  signUp: _signup.signUpReducer,
	  signOut: _signout.signOutReducer,
	  authentication: _authenticate.authReducer,
	  user: _user.userReducer
	}); /**
	     * Created by andrew on 25/02/16.
	     */
	exports.default = authStateReducer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configReducer = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 25/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createDataReducer = __webpack_require__(297);
	
	var _createDataReducer2 = _interopRequireDefault(_createDataReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var configReducer = exports.configReducer = (0, _createDataReducer2.default)([_ACTION_TYPES2.default.AUTH.CONFIGURE_START, _ACTION_TYPES2.default.AUTH.CONFIGURE_COMPLETE, _ACTION_TYPES2.default.AUTH.CONFIGURE_ERROR], 'config', 'config', function () {
	  var c = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  return _extends({}, c);
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configure.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineActionTypes = __webpack_require__(296);
	
	exports.default = (0, _defineActionTypes.defineActionType)({
	
	  LOCATION: {
	    ENTER: _defineActionTypes.TODO_DEFINE
	  },
	  /*
	   * View model
	   */
	  AUTH: {
	    CONFIGURE_START: _defineActionTypes.TODO_DEFINE,
	    CONFIGURE_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    CONFIGURE_ERROR: _defineActionTypes.TODO_DEFINE,
	    AUTHENTICATE_START: _defineActionTypes.TODO_DEFINE,
	    AUTHENTICATE_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    AUTHENTICATE_ERROR: _defineActionTypes.TODO_DEFINE,
	    SIGN_IN_START: _defineActionTypes.TODO_DEFINE,
	    SIGN_IN_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    SIGN_IN_ERROR: _defineActionTypes.TODO_DEFINE,
	    SIGN_IN_FORM_UPDATE: _defineActionTypes.TODO_DEFINE,
	    SIGN_UP_START: _defineActionTypes.TODO_DEFINE,
	    SIGN_UP_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    SIGN_UP_ERROR: _defineActionTypes.TODO_DEFINE,
	    SIGN_UP_FORM_UPDATE: _defineActionTypes.TODO_DEFINE,
	    SIGN_OUT_START: _defineActionTypes.TODO_DEFINE,
	    SIGN_OUT_COMPLETE: _defineActionTypes.TODO_DEFINE
	  },
	
	  ENTITIES: {
	    REQUESTED: _defineActionTypes.TODO_DEFINE,
	    RECEIVED: _defineActionTypes.TODO_DEFINE,
	    RECEIVED_LIST: _defineActionTypes.TODO_DEFINE
	  },
	
	  ACCOUNTS: {
	    LIST_START: _defineActionTypes.TODO_DEFINE,
	    LIST_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    LIST_ERROR: _defineActionTypes.TODO_DEFINE,
	    LIST_REF_START: _defineActionTypes.TODO_DEFINE,
	    LIST_REF_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    LIST_REF_ERROR: _defineActionTypes.TODO_DEFINE,
	    CREATE_START: _defineActionTypes.TODO_DEFINE,
	    CREATE_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    CREATE_ERROR: _defineActionTypes.TODO_DEFINE,
	    CREATE_FORM_UPDATE: _defineActionTypes.TODO_DEFINE,
	    EDIT_START: _defineActionTypes.TODO_DEFINE,
	    EDIT_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    EDIT_ERROR: _defineActionTypes.TODO_DEFINE,
	    EDIT_FORM_UPDATE: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_START: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_ERROR: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_FORM_UPDATE: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_OWNER_LOOKUP_START: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_OWNER_LOOKUP_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_ACCOUNT_LOOKUP_START: _defineActionTypes.TODO_DEFINE,
	    CREATE_REF_ACCOUNT_LOOKUP_COMPLETE: _defineActionTypes.TODO_DEFINE
	  },
	
	  ACCOUNT: {
	    SINGLE_START: _defineActionTypes.TODO_DEFINE,
	    SINGLE_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    SINGLE_ERROR: _defineActionTypes.TODO_DEFINE,
	    DELETE_START: _defineActionTypes.TODO_DEFINE,
	    DELETE_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    DELETE_ERROR: _defineActionTypes.TODO_DEFINE
	  },
	
	  TRANSFERS: {
	    MAKE_START: _defineActionTypes.TODO_DEFINE,
	    MAKE_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    MAKE_ERROR: _defineActionTypes.TODO_DEFINE,
	    MAKE_FORM_UPDATE: _defineActionTypes.TODO_DEFINE,
	    LIST_START: _defineActionTypes.TODO_DEFINE,
	    LIST_COMPLETE: _defineActionTypes.TODO_DEFINE,
	    LIST_ERROR: _defineActionTypes.TODO_DEFINE
	  },
	
	  ERROR: {
	    START: _defineActionTypes.TODO_DEFINE,
	    STOP: _defineActionTypes.TODO_DEFINE
	  }
	
	});
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ACTION_TYPES.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineActionType = exports.TODO_DEFINE = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = defineActionTypes;
	
	var _invariant = __webpack_require__(180);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TODO_DEFINE = exports.TODO_DEFINE = Symbol('Define property');
	
	var defineActionType = exports.defineActionType = function defineActionType(obj) {
	  var result = Object.keys(obj).reduce(function (memo, namespace) {
	    var value = obj[namespace];
	    var types = [];
	    var namespaceTypes = {};
	
	    if (typeof value == 'string') {
	      types = value.trim().split(/\s+/);
	    } else {
	      types = Object.keys(value).filter(function (key) {
	        return value[key] === TODO_DEFINE;
	      });
	    }
	
	    (0, _invariant2.default)(/^[A-Z][A-Z0-9_]*$/.test(namespace), "Namespace names must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character.");
	
	    (0, _invariant2.default)(new Set(types).size == types.length, "There must be no repeated action types passed to defineActionTypes");
	
	    types.forEach(function (t) {
	      (0, _invariant2.default)(/^[A-Z][A-Z0-9_]*$/.test(t), "Types must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character.");
	      namespaceTypes[t] = '@@app/' + namespace + '/' + t;
	    });
	
	    memo[namespace] = namespaceTypes;
	
	    return memo;
	  }, {});
	
	  return result;
	};
	
	function defineActionTypes(obj) {
	  var result = {};
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _slicedToArray(_step.value, 2);
	
	      var namespace = _step$value[0];
	      var value = _step$value[1];
	
	      var types = value.trim().split(/\s+/);
	      var namespaceTypes = {};
	
	      (0, _invariant2.default)(/^[A-Z][A-Z0-9_]*$/.test(namespace), "Namespace names must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character.");
	      (0, _invariant2.default)(new Set(types).size == types.length, "There must be no repeated action types passed to defineActionTypes");
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var type = _step2.value;
	
	          (0, _invariant2.default)(/^[A-Z][A-Z0-9_]*$/.test(type), "Types must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character.");
	
	          namespaceTypes[type] = '@@app/' + namespace + '/' + type;
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      result[namespace] = namespaceTypes;
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return result;
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "defineActionTypes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Created by andrew on 3/22/16.
	 */
	
	var createByIdDataReducer = exports.createByIdDataReducer = function createByIdDataReducer(_ref, next) {
	  var _ref2 = _slicedToArray(_ref, 3);
	
	  var KEY_REQUEST = _ref2[0];
	  var KEY_SUCCESS = _ref2[1];
	  var KEY_ERROR = _ref2[2];
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case KEY_REQUEST:
	      case KEY_SUCCESS:
	      case KEY_ERROR:
	        {
	          if (!action.id) {
	            debugger;
	          }
	          if (state.errors) {
	            debugger;
	          }
	          return _extends({}, state, _defineProperty({}, action.id, next(state, action)));
	        }
	      default:
	        return state;
	    }
	  };
	};
	
	var createDataReducer = function createDataReducer(_ref3) {
	  var _ref4 = _slicedToArray(_ref3, 3);
	
	  var KEY_REQUEST = _ref4[0];
	  var KEY_SUCCESS = _ref4[1];
	  var KEY_ERROR = _ref4[2];
	  var payloadActionNameProp = arguments.length <= 1 || arguments[1] === undefined ? 'payload' : arguments[1];
	  var payloadStateNameProp = arguments.length <= 2 || arguments[2] === undefined ? 'data' : arguments[2];
	  var payloadAssignFn = arguments.length <= 3 || arguments[3] === undefined ? function () {
	    var k = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    return [].concat(_toConsumableArray(k));
	  } : arguments[3];
	
	
	  var initialState = _defineProperty({
	    loading: false,
	    errors: {}
	  }, payloadStateNameProp, payloadAssignFn());
	
	  return function formReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initialState) : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case KEY_REQUEST:
	        {
	          return _extends({}, state, {
	            loading: true
	          });
	        }
	      case KEY_SUCCESS:
	        {
	          var payload = action[payloadActionNameProp];
	          return _extends({}, initialState, _defineProperty({}, payloadStateNameProp, payloadAssignFn(payload)));
	        }
	      case KEY_ERROR:
	        {
	          var error = action.error;
	
	          return _extends({}, state, {
	            loading: false,
	            errors: Object.isSealed(error) ? { aggregate: error } : _extends({}, error)
	          });
	        }
	
	      default:
	        return state;
	    }
	  };
	};
	
	exports.default = createDataReducer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "createDataReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.authReducer = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 25/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  loading: false,
	  valid: false,
	  errors: null
	};
	
	var authReducer = exports.authReducer = function authReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_START:
	      return _extends({}, state, {
	        loading: true
	      });
	
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	      return _extends({}, state, {
	        loading: false,
	        errors: null,
	        valid: true
	      });
	
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_ERROR:
	      return _extends({}, state, {
	        loading: false,
	        errors: "Invalid token",
	        valid: false
	      });
	
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "authenticate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signInReducer = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createFormReducer = __webpack_require__(300);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 25/02/16.
	 */
	var internalSignInReducer = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.AUTH.SIGN_IN_START, _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE, _ACTION_TYPES2.default.AUTH.SIGN_IN_ERROR, _ACTION_TYPES2.default.AUTH.SIGN_IN_FORM_UPDATE]);
	
	var signInReducer = exports.signInReducer = function signInReducer(state, action) {
	  switch (action.type) {
	    case _ACTION_TYPES2.default.LOCATION.ENTER:
	      {
	        var location = action.location;
	        var pathname = location.pathname;
	
	        if (pathname == '/signin') {
	          return internalSignInReducer(state, {
	            type: _ACTION_TYPES2.default.AUTH.SIGN_IN_ERROR,
	            error: null
	          });
	        }
	        return state;
	      }
	
	    default:
	      {
	        return internalSignInReducer(state, action);
	      }
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signin.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Created by andrew on 3/22/16.
	 */
	
	var createFormReducer = function createFormReducer(_ref) {
	  var _ref2 = _slicedToArray(_ref, 4);
	
	  var KEY_REQUEST = _ref2[0];
	  var KEY_SUCCESS = _ref2[1];
	  var KEY_ERROR = _ref2[2];
	  var KEY_UPDATE = _ref2[3];
	
	
	  var initialState = {
	    loading: false,
	    form: {},
	    errors: {}
	  };
	
	  return function formReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initialState) : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case KEY_REQUEST:
	        {
	          return _extends({}, state, {
	            loading: true
	          });
	        }
	      case KEY_ERROR:
	        {
	          var error = action.error;
	
	          return _extends({}, state, {
	            loading: false,
	            errors: error
	          });
	        }
	      case KEY_SUCCESS:
	        {
	          return _extends({}, initialState);
	        }
	      case KEY_UPDATE:
	        {
	          var key = action.key;
	          var value = action.value;
	
	          return _extends({}, state, {
	            form: _extends({}, state.form, _defineProperty({}, key, value)),
	            errors: _extends({}, state.errors, _defineProperty({
	              aggregate: null
	            }, key, null))
	          });
	        }
	
	      default:
	        return state;
	    }
	  };
	};
	
	exports.default = createFormReducer;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "createFormReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signUpReducer = exports.internalSignUpReducer = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createFormReducer = __webpack_require__(300);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 25/02/16.
	 */
	var internalSignUpReducer = exports.internalSignUpReducer = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.AUTH.SIGN_UP_START, _ACTION_TYPES2.default.AUTH.SIGN_UP_COMPLETE, _ACTION_TYPES2.default.AUTH.SIGN_UP_ERROR, _ACTION_TYPES2.default.AUTH.SIGN_UP_FORM_UPDATE]);
	
	var signUpReducer = exports.signUpReducer = function signUpReducer(state, action) {
	  switch (action.type) {
	    case _ACTION_TYPES2.default.LOCATION.ENTER:
	      {
	        var location = action.location;
	        var pathname = location.pathname;
	
	        if (pathname == '/register') {
	          return internalSignUpReducer(state, {
	            type: _ACTION_TYPES2.default.AUTH.SIGN_UP_ERROR,
	            error: null
	          });
	        }
	        return state;
	      }
	
	    default:
	      {
	        return internalSignUpReducer(state, action);
	      }
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signup.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signOutReducer = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 25/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signOutInitialState = {
	  loading: false,
	  errors: null
	};
	
	var signOutReducer = exports.signOutReducer = function signOutReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, signOutInitialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.SIGN_OUT_START:
	      return _extends({}, state, {
	        loading: true
	      });
	    case _ACTION_TYPES2.default.AUTH.SIGN_OUT_COMPLETE:
	      return _extends({}, state, {
	        loading: false,
	        errors: null
	      });
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signout.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.userReducer = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 25/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initalState = {
	  attributes: null,
	  isSignedIn: false
	};
	
	var userReducer = exports.userReducer = function userReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initalState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE:
	      {
	        var user = action.user;
	
	        return _extends({}, state, {
	          attributes: user,
	          isSignedIn: !!user
	        });
	      }
	    case _ACTION_TYPES2.default.AUTH.SIGN_OUT_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_ERROR:
	      return _extends({}, initalState);
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(160);
	
	var _accounts = __webpack_require__(305);
	
	var _transfers = __webpack_require__(306);
	
	var _entities = __webpack_require__(307);
	
	var _bookmarkAccount = __webpack_require__(308);
	
	var dataReducer = (0, _redux.combineReducers)({
	  transfers: _transfers.transfers,
	  entities: _entities.entities,
	  accounts: _accounts.accounts,
	  bookmarkAccount: _bookmarkAccount.bookmarkAccount
	}); /**
	     * Created by andrew on 15/03/16.
	     */
	exports.default = dataReducer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.accounts = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _redux = __webpack_require__(160);
	
	var _createFormReducer = __webpack_require__(300);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * Created by andrew on 15/03/16.
	                                                                                                                                                                                                     */
	/**
	 * Created by andrew on 15/03/16.
	 */
	
	
	var ownAccountsReducer = function ownAccountsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNTS.LIST_COMPLETE:
	      {
	        var _action$payload = action.payload;
	        var payload = _action$payload === undefined ? [] : _action$payload;
	        //const accounts = Object.keys(payload).map(key => payload[key]);
	
	        return [].concat(_toConsumableArray(payload));
	      }
	    default:
	      return state;
	  }
	};
	
	var otherAccountsReducer = function otherAccountsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE:
	      {
	        var user = action.user;
	        var _user$toAccounts = user.toAccounts;
	        var toAccounts = _user$toAccounts === undefined ? [] : _user$toAccounts;
	
	        return otherAccountsReducer(state, {
	          type: _ACTION_TYPES2.default.ACCOUNTS.LIST_REF_COMPLETE,
	          payload: toAccounts
	        });
	      }
	
	    case _ACTION_TYPES2.default.ACCOUNTS.LIST_REF_COMPLETE:
	      {
	        var _ret = function () {
	          var _action$payload2 = action.payload;
	          var payload = _action$payload2 === undefined ? {} : _action$payload2;
	
	          var accounts = Object.keys(payload).map(function (key) {
	            return payload[key];
	          });
	          return {
	            v: [].concat(_toConsumableArray(accounts))
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	
	    default:
	      return state;
	  }
	};
	
	var createAccountReducer = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.ACCOUNTS.CREATE_START, _ACTION_TYPES2.default.ACCOUNTS.CREATE_COMPLETE, _ACTION_TYPES2.default.ACCOUNTS.CREATE_ERROR, _ACTION_TYPES2.default.ACCOUNTS.CREATE_FORM_UPDATE]);
	
	var editAccountReducer = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.ACCOUNTS.EDIT_START, _ACTION_TYPES2.default.ACCOUNTS.EDIT_COMPLETE, _ACTION_TYPES2.default.ACCOUNTS.EDIT_ERROR, _ACTION_TYPES2.default.ACCOUNTS.EDIT_FORM_UPDATE]);
	
	var accounts = exports.accounts = (0, _redux.combineReducers)({
	  own: ownAccountsReducer,
	  other: otherAccountsReducer,
	  create: createAccountReducer,
	  edit: editAccountReducer
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "accounts.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transfers = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createDataReducer = __webpack_require__(297);
	
	var _createDataReducer2 = _interopRequireDefault(_createDataReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var selectedEvents = [_ACTION_TYPES2.default.TRANSFERS.LIST_START, _ACTION_TYPES2.default.TRANSFERS.LIST_COMPLETE, _ACTION_TYPES2.default.TRANSFERS.LIST_ERROR]; /**
	                                                                                                                                                                  * Created by andrew on 15/03/16.
	                                                                                                                                                                  */
	/**
	 * Created by andrew on 15/03/16.
	 */
	var transfers = exports.transfers = (0, _createDataReducer.createByIdDataReducer)(selectedEvents, (0, _createDataReducer2.default)(selectedEvents));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "transfers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.entities = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 15/03/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {};
	
	var nodeInitialState = {
	  loading: false,
	  data: {}
	};
	
	var entities = exports.entities = function entities() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  if (typeof action.length !== 'undefined') {
	    debugger;
	  }
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ENTITIES.REQUESTED:
	      {
	        var id = action.id;
	
	        return _extends({}, state, _defineProperty({}, id, null));
	      }
	    case _ACTION_TYPES2.default.ENTITIES.RECEIVED:
	      {
	        var _id = action.id;
	        var _action$entity = action.entity;
	        var entity = _action$entity === undefined ? {} : _action$entity;
	
	        return _extends({}, state, _defineProperty({}, _id, _extends({}, entity)));
	      }
	
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE:
	      {
	        var user = action.user;
	        var _user$toAccounts = user.toAccounts;
	        var toAccounts = _user$toAccounts === undefined ? [] : _user$toAccounts;
	
	        return _extends({}, state, toAccounts);
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.LIST_COMPLETE:
	      {
	        var payload = action.payload;
	
	        var hashMap = payload.reduce(function (memo, item) {
	          memo[item.accountId] = item;
	          return memo;
	        }, {});
	        return _extends({}, state, hashMap);
	      }
	
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_START:
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_COMPLETE:
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_ERROR:
	      {
	        var _id2 = action.id;
	        var _action$payload = action.payload;
	
	        var _payload = _action$payload === undefined ? {} : _action$payload;
	
	        var error = action.error;
	        // const { accountId } = payload;
	
	        var isError = action.type == _ACTION_TYPES2.default.ACCOUNT.SINGLE_ERROR;
	        var isStart = action.type == _ACTION_TYPES2.default.ACCOUNT.SINGLE_START;
	
	        return _extends({}, state, _defineProperty({}, _id2, isStart ? { isLoading: true, 'title': 'Loading' } : isError ? error : _payload));
	      }
	    case _ACTION_TYPES2.default.ENTITIES.RECEIVED_LIST:
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entities.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bookmarkAccount = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 18/03/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var optionsLoaderInitialState = {
	  loading: false,
	  options: [],
	  value: ''
	};
	
	var initialState = {
	  loading: false,
	  form: {},
	  errors: {},
	  accountsDisabled: true,
	
	  ownersLookup: _extends({}, optionsLoaderInitialState),
	  accountsLookup: _extends({}, optionsLoaderInitialState)
	};
	
	var optionsLoaderReducer = function optionsLoaderReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, optionsLoaderInitialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START:
	      {
	        var value = action.payload;
	        return _extends({}, state, {
	          loading: true,
	          value: value
	        });
	      }
	
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE:
	      {
	        var payload = action.payload;
	
	        return _extends({}, state, {
	          loading: false,
	          options: payload === null ? state.options : payload
	        });
	      }
	
	    default:
	      return state;
	  }
	};
	
	var bookmarkAccount = exports.bookmarkAccount = function bookmarkAccount() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_START:
	      {
	        return _extends({}, state, {
	          loading: true
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_COMPLETE:
	      {
	        return _extends({}, initialState);
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ERROR:
	      {
	        var error = action.error;
	
	        return _extends({}, state, {
	          loading: false,
	          errors: error
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_FORM_UPDATE:
	      {
	        var key = action.key;
	        var value = action.value;
	
	        var isOwnerSetBlank = key == 'owner' && !value;
	        var isOwnerSelected = key == 'owner' && value;
	        var nextAccountsDisabled = isOwnerSelected ? false : state.accountsDisabled;
	
	        var nextForm = isOwnerSetBlank ? _extends({}, state.form, _defineProperty({
	          account: null
	        }, key, value)) : _extends({}, state.form, _defineProperty({}, key, value));
	
	        var nextErrors = _extends({}, state.errors, _defineProperty({}, key, null));
	        return _extends({}, state, {
	          accountsDisabled: nextAccountsDisabled,
	          form: nextForm,
	          errors: nextErrors
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE:
	      {
	        return _extends({}, state, {
	          ownersLookup: optionsLoaderReducer(state.ownersLookup, action)
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE:
	      {
	        return _extends({}, state, {
	          accountsLookup: optionsLoaderReducer(state.accountsLookup, action)
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "bookmarkAccount.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(160);
	
	var _account = __webpack_require__(310);
	
	var _errors = __webpack_require__(311);
	
	var _bookmarkAccount = __webpack_require__(312);
	
	var _transfersMake = __webpack_require__(313);
	
	var uiReducer = (0, _redux.combineReducers)({
	  account: _account.account,
	  error: _errors.error,
	  bookmarkAccount: _bookmarkAccount.bookmarkAccount,
	  transfersMake: _transfersMake.transfersMake
	}); /**
	     * Created by andrew on 15/03/16.
	     */
	/**
	 * Created by andrew on 25/02/16.
	 */
	exports.default = uiReducer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.account = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 15/03/16.
	                                                                                                                                                                                                                                                                   */
	/**
	 * Created by andrew on 15/03/16.
	 */
	
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _redux = __webpack_require__(160);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  loading: false,
	  errors: []
	};
	
	var account = exports.account = function account() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_START:
	      {
	        return _extends({}, state, {
	          loading: true
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_COMPLETE:
	      {
	        return _extends({}, initialState);
	      }
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_ERROR:
	      {
	        var error = action.error;
	
	        return _extends({}, state, {
	          loading: false,
	          errors: [error]
	        });
	      }
	
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "account.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.error = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var error = exports.error = function error() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ERROR.STOP:
	      {
	        return null;
	      }
	    case _ACTION_TYPES2.default.ERROR.START:
	      return action.payload;
	
	    default:
	      return state;
	  }
	}; /**
	    * Created by andrew on 18/03/16.
	    */

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "errors.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by andrew on 18/03/16.
	 */
	var bookmarkAccount = exports.bookmarkAccount = function bookmarkAccount() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "bookmarkAccount.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transfersMake = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createFormReducer = __webpack_require__(300);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 15/03/16.
	 */
	/**
	 * Created by andrew on 15/03/16.
	 */
	var transfersMake = exports.transfersMake = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.TRANSFERS.MAKE_START, _ACTION_TYPES2.default.TRANSFERS.MAKE_COMPLETE, _ACTION_TYPES2.default.TRANSFERS.MAKE_ERROR, _ACTION_TYPES2.default.TRANSFERS.MAKE_FORM_UPDATE]);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "transfersMake.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_ENDPOINT_KEYS = undefined;
	exports.setEndpointKeys = setEndpointKeys;
	exports.configure = configure;
	
	var _authenticate = __webpack_require__(315);
	
	var _clientSettings = __webpack_require__(328);
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	var SET_ENDPOINT_KEYS = exports.SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";
	
	function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
	  return {
	    type: SET_ENDPOINT_KEYS,
	    endpoints: endpoints,
	    currentEndpointKey: currentEndpointKey,
	    defaultEndpointKey: defaultEndpointKey
	  };
	}
	
	function configure() {
	  var endpoint = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	
	  return function (dispatch) {
	
	    return (0, _clientSettings.applyConfig)({ dispatch: dispatch, endpoint: endpoint, settings: settings }).then(function () {
	      return dispatch((0, _authenticate.authenticate)());
	    });
	  };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configure.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.authenticateError = exports.authenticateComplete = exports.authenticateStart = undefined;
	exports.authenticate = authenticate;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(316);
	
	var _sessionStorage = __webpack_require__(317);
	
	var U = _interopRequireWildcard(_sessionStorage);
	
	var _api = __webpack_require__(321);
	
	var _entities = __webpack_require__(327);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var authenticateStart = exports.authenticateStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.AUTHENTICATE_START); /**
	                                                                                                                                      * Created by andrew on 26/02/16.
	                                                                                                                                      */
	var authenticateComplete = exports.authenticateComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE, 'user');
	var authenticateError = exports.authenticateError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.AUTHENTICATE_ERROR, 'errors');
	
	function authenticate(forceReread) {
	  return function (dispatch) {
	
	    dispatch(authenticateStart());
	
	    var savedUserPromise = new Promise(function (rs, rj) {
	
	      var currentHeaders = U.retrieveHeaders();
	      var accessToken = currentHeaders["access-token"];
	
	      if (!accessToken) {
	        return rj({ reason: 'no token' });
	      }
	
	      var savedUser = U.retrieveUserData();
	
	      if (savedUser && !forceReread) {
	        return rs(savedUser);
	      }
	
	      return (0, _api.apiGetCurrentUser)().then(function (userData) {
	        U.persistUserData(userData);
	        dispatch((0, _entities.entityReceived)(userData.id, userData));
	        rs(userData);
	      }, function (err) {
	        rj(err);
	      });
	    });
	
	    return savedUserPromise.then(function (user) {
	
	      dispatch(authenticateComplete(user));
	
	      return user;
	    }).catch(function () {
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var reason = _ref.reason;
	
	
	      dispatch(authenticateError([reason]));
	
	      return Promise.resolve({ reason: reason });
	    });
	  };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "authenticate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeActionCreator = makeActionCreator;
	/**
	 * Created by andrew on 15/03/16.
	 */
	function makeActionCreator(type) {
	  for (var _len = arguments.length, argNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    argNames[_key - 1] = arguments[_key];
	  }
	
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return argNames.reduce(function (action, arg, index) {
	      action[arg] = args[index];
	      return action;
	    }, { type: type });
	  };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.retrieveUserData = exports.persistUserData = undefined;
	exports.setCurrentSettings = setCurrentSettings;
	exports.setCurrentEndpoint = setCurrentEndpoint;
	exports.setCurrentEndpointKey = setCurrentEndpointKey;
	exports.setDefaultEndpointKey = setDefaultEndpointKey;
	exports.getDefaultEndpointKey = getDefaultEndpointKey;
	exports.resetConfig = resetConfig;
	exports.destroySession = destroySession;
	exports.getInitialEndpointKey = getInitialEndpointKey;
	exports.isApiRequest = isApiRequest;
	exports.getTokenFormat = getTokenFormat;
	exports.retrieveHeaders = retrieveHeaders;
	exports.persistData = persistData;
	exports.retrieveData = retrieveData;
	
	var _jsCookie = __webpack_require__(318);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _constants = __webpack_require__(319);
	
	var C = _interopRequireWildcard(_constants);
	
	var _root = __webpack_require__(320);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// stateful variables that persist throughout session
	var authState = {
	  currentSettings: {},
	  currentEndpoint: {},
	  defaultEndpointKey: 'default'
	}; /**
	    * Created by andrew on 26/02/16.
	    */
	
	
	var memoryStorage = {};
	
	function clean(obj) {
	  Object.keys(obj).forEach(function (k) {
	    delete obj[k];
	  });
	  return obj;
	}
	
	function setCurrentSettings(s) {
	  authState.currentSettings = s;
	}
	
	function setCurrentEndpoint(e) {
	  authState.currentEndpoint = e;
	}
	
	/**
	 * @deprecated
	 * @param k
	 */
	function setCurrentEndpointKey(k) {
	  persistData(C.SAVED_CONFIG_KEY, k || getDefaultEndpointKey());
	}
	
	/**
	 * @deprecated
	 * @param k
	 */
	function setDefaultEndpointKey(k) {
	  persistData(C.DEFAULT_CONFIG_KEY, k);
	}
	
	function getDefaultEndpointKey() {
	  return retrieveData(C.DEFAULT_CONFIG_KEY);
	}
	
	// reset stateful variables
	function resetConfig() {
	  clean(authState);
	  authState.currentSettings = {};
	  authState.currentEndpoint = {};
	  destroySession();
	}
	
	function destroySession() {
	
	  [C.SAVED_CREDS_KEY, C.SAVED_CONFIG_KEY, C.SAVED_USER_INFO].forEach(function (key) {
	    // kill all local storage keys
	    if (_root2.default.localStorage) {
	      _root2.default.localStorage.removeItem(key);
	    }
	
	    // remove from base path in case config is not specified
	    _jsCookie2.default.remove(key, {
	      path: authState.currentSettings.cookiePath || "/"
	    });
	  });
	
	  clean(memoryStorage);
	}
	
	function unescapeQuotes(val) {
	  return val && val.replace(/("|')/g, "");
	}
	
	function getInitialEndpointKey() {
	  return unescapeQuotes(_jsCookie2.default.get(C.SAVED_CONFIG_KEY) || _root2.default.localStorage && _root2.default.localStorage.getItem(C.SAVED_CONFIG_KEY));
	}
	
	function isApiRequest(url) {
	  return true;
	}
	
	function getTokenFormat() {
	  return authState.currentSettings.tokenFormat;
	}
	
	var persistUserData = exports.persistUserData = function persistUserData(user) {
	  memoryStorage[C.SAVED_USER_INFO] = user;
	};
	
	var retrieveUserData = exports.retrieveUserData = function retrieveUserData() {
	  return memoryStorage[C.SAVED_USER_INFO];
	};
	
	function retrieveHeaders() {
	  return retrieveData(C.SAVED_CREDS_KEY) || {};
	}
	
	function persistData(key, val) {
	  val = _root2.default.JSON.stringify(val);
	
	  switch (authState.currentSettings.storage) {
	    case "localStorage":
	      _root2.default.localStorage.setItem(key, val);
	      break;
	
	    default:
	      _jsCookie2.default.set(key, val, {
	        expires: authState.currentSettings.cookieExpiry,
	        path: authState.currentSettings.cookiePath
	      });
	      break;
	  }
	}
	
	function retrieveData(key) {
	  var val = null;
	
	  switch (authState.currentSettings.storage) {
	
	    case "localStorage":
	      val = _root2.default.localStorage && _root2.default.localStorage.getItem(key);
	      break;
	
	    default:
	      val = _jsCookie2.default.get(key);
	      break;
	  }
	
	  // if value is a simple string, the parser will fail. in that case, simply
	  // unescape the quotes and return the string.
	  try {
	    // return parsed json response
	    return JSON.parse(val);
	  } catch (err) {
	    // unescape quotes
	    return unescapeQuotes(val);
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "sessionStorage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by andrew on 26/02/16.
	 */
	var INITIAL_CONFIG_KEY = exports.INITIAL_CONFIG_KEY = "default";
	var DEFAULT_CONFIG_KEY = exports.DEFAULT_CONFIG_KEY = "defaultConfigKey";
	var SAVED_CONFIG_KEY = exports.SAVED_CONFIG_KEY = "currentConfigName";
	var SAVED_CREDS_KEY = exports.SAVED_CREDS_KEY = "authHeaders";
	var SAVED_USER_INFO = exports.SAVED_USER_INFO = "user-info";
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "constants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by andrew on 27/02/16.
	 */
	// even though this code shouldn't be used server-side, node will throw
	// errors if "window" is used
	exports.default = Function("return this")() || (42, eval)("this");
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "root.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.apiRetrieveUsers = exports.apiDeleteRefAccount = exports.apiDeleteAccount = exports.apiRetrieveAccount = exports.apiRetrieveTransfers = exports.apiRetrieveAccounts = exports.apiMakeTransfer = exports.apiCreateRefAccount = exports.apiCreateAccount = exports.apiGetCurrentUser = exports.apiSignUp = exports.apiSignIn = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 12/03/16.
	                                                                                                                                                                                                                                                                   */
	
	
	var _fetch = __webpack_require__(322);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _apiEndpoints = __webpack_require__(325);
	
	var ENDPOINTS = _interopRequireWildcard(_apiEndpoints);
	
	var _root = __webpack_require__(320);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _handleFetchResponse = __webpack_require__(326);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var JSON_HEADERS = {
	  headers: {
	    "Accept": "application/json",
	    "Content-Type": "application/json"
	  }
	};
	
	var METHODS = {
	  DELETE: _extends({}, JSON_HEADERS, {
	    method: "delete"
	  }),
	  GET: _extends({}, JSON_HEADERS, {
	    method: "get"
	  }),
	  POST: _extends({}, JSON_HEADERS, {
	    method: "post"
	  })
	};
	
	var fetch = function fetch() {
	  return _fetch2.default.apply(undefined, arguments).then(_handleFetchResponse.parseResponse);
	};
	
	var apiSignIn = exports.apiSignIn = function apiSignIn(body) {
	  return fetch(ENDPOINTS.emailSignIn(), _extends({}, METHODS.POST, {
	    body: _root2.default.JSON.stringify(body)
	  }));
	};
	
	var apiSignUp = exports.apiSignUp = function apiSignUp(body) {
	  return fetch(ENDPOINTS.emailSignUp(), _extends({}, METHODS.POST, {
	    body: _root2.default.JSON.stringify(body)
	  }));
	};
	
	var apiGetCurrentUser = exports.apiGetCurrentUser = function apiGetCurrentUser() {
	  return fetch(ENDPOINTS.currentUser(), _extends({}, METHODS.GET));
	};
	
	var apiCreateAccount = exports.apiCreateAccount = function apiCreateAccount(customerId, _ref) {
	  var title = _ref.title;
	  var initialBalance = _ref.balance;
	  var description = _ref.description;
	  return fetch(ENDPOINTS.accountsPath(), _extends({}, METHODS.POST, {
	    body: _root2.default.JSON.stringify({
	      customerId: customerId,
	      title: title,
	      initialBalance: initialBalance,
	      description: description })
	  }));
	};
	
	var apiCreateRefAccount = exports.apiCreateRefAccount = function apiCreateRefAccount(customerId, _ref2) {
	  var owner = _ref2.owner;
	  var accountId = _ref2.account;
	  var title = _ref2.title;
	  var description = _ref2.description;
	  return fetch(ENDPOINTS.refAccounts(customerId), _extends({}, METHODS.POST, {
	    body: _root2.default.JSON.stringify({
	      owner: owner,
	      id: accountId,
	      title: title,
	      description: description })
	  }));
	};
	
	var apiMakeTransfer = exports.apiMakeTransfer = function apiMakeTransfer(fromAccountId, _ref3) {
	  var account = _ref3.account;
	  var amount = _ref3.amount;
	  var description = _ref3.description;
	  return fetch(ENDPOINTS.transfers(), _extends({}, METHODS.POST, {
	    body: _root2.default.JSON.stringify({
	      amount: amount,
	      fromAccountId: fromAccountId,
	      "toAccountId": account,
	      description: description
	    })
	  }));
	};
	
	var apiRetrieveAccounts = exports.apiRetrieveAccounts = function apiRetrieveAccounts(customerId) {
	  return fetch(ENDPOINTS.customersAccounts(customerId), _extends({}, METHODS.GET));
	};
	
	var apiRetrieveTransfers = exports.apiRetrieveTransfers = function apiRetrieveTransfers(accountId) {
	  return fetch(ENDPOINTS.history(accountId), _extends({}, METHODS.GET));
	};
	
	var apiRetrieveAccount = exports.apiRetrieveAccount = function apiRetrieveAccount(accountId) {
	  return fetch(ENDPOINTS.account(accountId), _extends({}, METHODS.GET));
	};
	
	var apiDeleteAccount = exports.apiDeleteAccount = function apiDeleteAccount(customerId, accountId) {
	  return fetch(ENDPOINTS.account(accountId), _extends({}, METHODS.DELETE));
	};
	
	var apiDeleteRefAccount = exports.apiDeleteRefAccount = function apiDeleteRefAccount(customerId, accountId) {
	  return fetch(ENDPOINTS.refAccount(customerId, accountId), _extends({}, METHODS.DELETE));
	};
	
	var apiRetrieveUsers = exports.apiRetrieveUsers = function apiRetrieveUsers(email) {
	  return fetch(ENDPOINTS.customersLookup({ email: email }), _extends({}, METHODS.GET));
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 26/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	exports.default = function (url) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	
	  if (!options.headers) {
	    options.headers = {};
	  }
	
	  options.headers = _extends({}, options.headers, getAuthHeaders(url));
	
	  //extend(options.headers, getAuthHeaders(url));
	  return (0, _isomorphicFetch2.default)(url, options).then(function (resp) {
	    return updateAuthCredentials(resp);
	  });
	};
	
	var _isomorphicFetch = __webpack_require__(323);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _constants = __webpack_require__(319);
	
	var C = _interopRequireWildcard(_constants);
	
	var _sessionStorage = __webpack_require__(317);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getAuthHeaders(url) {
	  if ((0, _sessionStorage.isApiRequest)(url)) {
	    // fetch current auth headers from storage
	    var currentHeaders = (0, _sessionStorage.retrieveData)(C.SAVED_CREDS_KEY) || {},
	        nextHeaders = {};
	
	    if (currentHeaders === 'undefined') {
	      currentHeaders = {};
	    }
	    // bust IE cache
	    nextHeaders["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";
	
	    // set header for each key in `tokenFormat` config
	    for (var key in (0, _sessionStorage.getTokenFormat)()) {
	      if (key in currentHeaders) {
	        nextHeaders[key] = currentHeaders[key];
	      }
	    }
	
	    return nextHeaders;
	  } else {
	    return {};
	  }
	}
	
	function updateAuthCredentials(resp) {
	
	  // set header for each key in `tokenFormat` config
	  var newHeaders = {};
	
	  // set flag to ensure that we don't accidentally nuke the headers
	  // if the response tokens aren't sent back from the API
	  var blankHeaders = true;
	
	  // set header key + val for each key in `tokenFormat` config
	  for (var key in (0, _sessionStorage.getTokenFormat)()) {
	    newHeaders[key] = resp.headers.get(key);
	
	    if (newHeaders[key]) {
	      blankHeaders = false;
	    }
	  }
	
	  // persist headers for next request
	  if (!blankHeaders) {
	    (0, _sessionStorage.persistData)(C.SAVED_CREDS_KEY, newHeaders);
	  }
	
	  return resp;
	}
	
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "fetch.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by andrew on 9/16/16.
	 */
	var API_ROOT = '/api';
	
	var emailSignIn = exports.emailSignIn = function emailSignIn() {
	  return API_ROOT + '/login';
	};
	var emailSignUp = exports.emailSignUp = function emailSignUp() {
	  return API_ROOT + '/customers';
	};
	var currentUser = exports.currentUser = function currentUser() {
	  return API_ROOT + '/user';
	};
	var accountsPath = exports.accountsPath = function accountsPath() {
	  return API_ROOT + '/accounts';
	};
	var customersLookup = exports.customersLookup = function customersLookup(lookup) {
	  return API_ROOT + '/customers?' + makeQuery(lookup);
	};
	var customersAccounts = exports.customersAccounts = function customersAccounts(customerId) {
	  return API_ROOT + '/customers/' + customerId + '/accounts';
	};
	var refAccounts = exports.refAccounts = function refAccounts(customerId) {
	  return API_ROOT + '/customers/' + customerId + '/toaccounts';
	};
	var refAccount = exports.refAccount = function refAccount(customerId, accountId) {
	  return API_ROOT + '/customers/' + customerId + '/toaccounts/' + accountId;
	};
	var account = exports.account = function account(accountId) {
	  return API_ROOT + '/accounts/' + accountId;
	};
	var history = exports.history = function history(accountId) {
	  return API_ROOT + '/accounts/' + accountId + '/history';
	};
	var transfers = exports.transfers = function transfers() {
	  return API_ROOT + '/transfers';
	};
	
	function makeQuery(params) {
	  return Object.keys(params).map(function (key) {
	    return [encodeURIComponent(key), encodeURIComponent(params[key])].join('=');
	  }).join('&');
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "apiEndpoints.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseResponse = parseResponse;
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	function parseResponse(response) {
	  var json = response.json();
	  // .catch(err => {
	  //     if (err.toString().indexOf('SyntaxError: Unexpected end of JSON input') >= 0) {
	  //       return Promise.resolve({});
	  //     }
	  //     throw err;
	  //   });
	
	  if (response.status >= 200 && response.status < 300) {
	    return json;
	  } else {
	
	    //error: "Bad Request"
	    //exception: "org.springframework.web.bind.MethodArgumentNotValidException"
	    //message: "Validation failed for argument at index 0 in method: public rx.Observable<net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerResponse> net.chrisrichardson.eventstore.javaexamples.banking.web.commandside.customers.CustomerController.createCustomer(net.chrisrichardson.eventstore.javaexamples.banking.common.customers.CustomerInfo), with 3 error(s): [Field error in object 'customerInfo' on field 'ssn': rejected value [null]; codes [NotNull.customerInfo.ssn,NotNull.ssn,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [customerInfo.ssn,ssn]; arguments []; default message [ssn]]; default message [may not be null]] [Field error in object 'customerInfo' on field 'email': rejected value [null]; codes [NotNull.customerInfo.email,NotNull.email,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [customerInfo.email,email]; arguments []; default message [email]]; default message [may not be null]] [Field error in object 'customerInfo' on field 'phoneNumber': rejected value [null]; codes [NotNull.customerInfo.phoneNumber,NotNull.phoneNumber,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [customerInfo.phoneNumber,phoneNumber]; arguments []; default message [phoneNumber]]; default message [may not be null]] "
	    //path: "/customers"
	    //status: 400
	    //timestamp: 1458002123103
	
	    return json.then(function (_ref) {
	      var message = _ref.message;
	
	      var rest = _objectWithoutProperties(_ref, ['message']);
	
	      if (!message) {
	        return rest;
	      }
	      var jvmPattern = /\[Field error in object '\w+' on field '(\w+)'/gm;
	      var errors = {};
	      message.replace(jvmPattern, function (m, name) {
	        errors[name] = ['Required'];
	      });
	
	      if (Object.keys(errors).length) {
	        return { errors: errors };
	      }
	      return { errors: message };
	    }).then(function (err) {
	      return Promise.reject(err);
	    });
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "handleFetchResponse.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransfers = exports.getTransfersError = exports.getTransfersComplete = exports.getTransfersRequested = exports.makeTransfer = exports.makeTransferFormUpdate = exports.makeTransferError = exports.makeTransferComplete = exports.makeTransferRequested = exports.createRefAccountLookup = exports.createRefOwnerLookup = exports.createRefAccountLookupComplete = exports.createRefAccountLookupStart = exports.createRefOwnerLookupComplete = exports.createRefOwnerLookupStart = exports.errorMessageStop = exports.errorMessageStart = exports.deleteAccountError = exports.deleteAccountComplete = exports.deleteAccountRequested = exports.accountError = exports.accountComplete = exports.accountRequested = exports.accountRefCreateFormUpdate = exports.accountRefCreateError = exports.accountRefCreateComplete = exports.accountRefCreateStart = exports.accountCreateFormUpdate = exports.accountCreateError = exports.accountCreateComplete = exports.accountCreateStart = exports.accountsRefListReceived = exports.accountsListError = exports.accountsListReceived = exports.accountsListRequested = exports.entityReceived = exports.entityRequested = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 27/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	exports.accountsList = accountsList;
	exports.accountCreate = accountCreate;
	exports.accountRefCreate = accountRefCreate;
	exports.fetchOwnAccounts = fetchOwnAccounts;
	exports.fetchAccount = fetchAccount;
	exports.deleteAccount = deleteAccount;
	exports.errorMessageTimedOut = errorMessageTimedOut;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(316);
	
	var _api = __webpack_require__(321);
	
	var api = _interopRequireWildcard(_api);
	
	var _authenticate = __webpack_require__(315);
	
	var _root = __webpack_require__(320);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var entityRequested = exports.entityRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ENTITIES.REQUESTED, 'id');
	var entityReceived = exports.entityReceived = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ENTITIES.RECEIVED, 'id', 'entity');
	
	var accountsListRequested = exports.accountsListRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.LIST_START);
	var accountsListReceived = exports.accountsListReceived = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.LIST_COMPLETE, 'payload');
	var accountsListError = exports.accountsListError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.LIST_ERROR, 'error');
	
	var accountsRefListReceived = exports.accountsRefListReceived = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.LIST_REF_COMPLETE, 'payload');
	
	var accountCreateStart = exports.accountCreateStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_START);
	var accountCreateComplete = exports.accountCreateComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_COMPLETE, 'payload');
	var accountCreateError = exports.accountCreateError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_ERROR, 'error');
	var accountCreateFormUpdate = exports.accountCreateFormUpdate = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_FORM_UPDATE, 'key', 'value');
	
	var accountRefCreateStart = exports.accountRefCreateStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_START);
	var accountRefCreateComplete = exports.accountRefCreateComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_COMPLETE, 'payload');
	var accountRefCreateError = exports.accountRefCreateError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ERROR, 'error');
	var accountRefCreateFormUpdate = exports.accountRefCreateFormUpdate = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_FORM_UPDATE, 'key', 'value');
	
	var accountRequested = exports.accountRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.SINGLE_START, 'id');
	var accountComplete = exports.accountComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.SINGLE_COMPLETE, 'id', 'payload');
	var accountError = exports.accountError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.SINGLE_ERROR, 'id', 'error');
	
	function accountsList(customerId) {
	  return function (dispatch) {
	    dispatch(accountsListRequested());
	    return api.apiRetrieveAccounts(customerId).then(function (_ref) {
	      var _ref$accounts = _ref.accounts;
	      var accounts = _ref$accounts === undefined ? [] : _ref$accounts;
	
	      dispatch(accountsListReceived(accounts));
	    }).catch(function (err) {
	      dispatch(accountsListError(err));
	      return Promise.resolve({ error: err });
	    });
	  };
	}
	
	function readUntilChanged(initialData, promisedFn, leftCalls) {
	  var _this = this;
	
	  if (!leftCalls) {
	    return Promise.reject('Data not changed');
	  }
	  var initialDataFlat = _root2.default['JSON'].stringify(initialData);
	  return new Promise(function (rs, rj) {
	    setTimeout(function () {
	      promisedFn().then(function (data) {
	        debugger;
	        if (initialDataFlat == _root2.default['JSON'].stringify(data)) {
	          return readUntilChanged.call(_this, data, promisedFn, leftCalls - 1).then(rs, rj); // Promise
	        }
	        rs(data);
	      }).catch(rj);
	    }, 500 * Math.pow(2, 4 - leftCalls));
	  });
	}
	
	function accountCreate(customerId, payload) {
	  return function (dispatch) {
	    dispatch(accountCreateStart());
	    return api.apiCreateAccount(customerId, payload).then(function (data) {
	      if (data.accountId) {
	        var accountId = data.accountId;
	
	        dispatch(accountCreateComplete(_extends({
	          id: accountId
	        }, payload)));
	        // dispatch(entityReceived(accountId, payload));
	        dispatch((0, _authenticate.authenticate)(true));
	        return accountId;
	      } else {
	        return readUntilChanged(data, function () {
	          return api.apiRetrieveAccounts(customerId);
	        }, 4).then(function () {
	          debugger;
	          dispatch(accountCreateComplete({
	            id: ''
	          }));
	          dispatch((0, _authenticate.authenticate)(true));
	        });
	      }
	    }).catch(function (err) {
	      debugger;
	      dispatch(accountCreateError(err));
	      // return Promise.resolve({ error: err });
	    });
	  };
	}
	
	function accountRefCreate(customerId, payload) {
	  return function (dispatch) {
	    dispatch(accountRefCreateStart());
	    return api.apiCreateRefAccount(customerId, payload).then(function (_ref2) {
	      var id = _ref2.id;
	
	      dispatch(accountRefCreateComplete(_extends({}, payload, {
	        id: id
	      })));
	      dispatch(entityReceived(id, payload));
	      return dispatch((0, _authenticate.authenticate)(true));
	    }).catch(function (err) {
	      debugger;
	      dispatch(accountRefCreateError(err));
	      return Promise.resolve({ error: err });
	    });
	  };
	}
	
	function fetchOwnAccounts(customerId) {
	  return function (dispatch) {
	    //dispatch(accountsListRequested());
	    return api.apiRetrieveAccounts(customerId).then(function (data) {
	      dispatch(accountsListReceived(data.accounts));
	    });
	  };
	}
	
	function fetchAccount(accountId) {
	  return function (dispatch) {
	    dispatch(accountRequested(accountId));
	    return api.apiRetrieveAccount(accountId).then(function (data) {
	      dispatch(accountComplete(accountId, data));
	    }).catch(function (err) {
	      dispatch(accountError(accountId, err));
	    });
	  };
	}
	
	var deleteAccountRequested = exports.deleteAccountRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.DELETE_START);
	var deleteAccountComplete = exports.deleteAccountComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.DELETE_COMPLETE);
	var deleteAccountError = exports.deleteAccountError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.DELETE_ERROR);
	
	function deleteAccount(customerId, accountId, isRef) {
	  return function (dispatch) {
	    dispatch(deleteAccountRequested());
	
	    var deleteApiAction = isRef ? api.apiDeleteRefAccount(customerId, accountId) : api.apiDeleteAccount(customerId, accountId);
	
	    return deleteApiAction.then(function (data) {
	      dispatch(deleteAccountComplete(data));
	      return Promise.resolve(data);
	    }).catch(function (err) {
	      dispatch(deleteAccountError(err));
	      return Promise.reject(err);
	    });
	  };
	}
	
	var errorMessageStart = exports.errorMessageStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ERROR.START, 'payload');
	var errorMessageStop = exports.errorMessageStop = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ERROR.STOP);
	
	function errorMessageTimedOut(error, timeout) {
	  return function (dispatch) {
	    dispatch(errorMessageStart(error));
	    setTimeout(function () {
	      dispatch(errorMessageStop());
	    }, timeout || 5000);
	  };
	}
	
	var createRefOwnerLookupStart = exports.createRefOwnerLookupStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START, 'payload');
	var createRefOwnerLookupComplete = exports.createRefOwnerLookupComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE, 'payload');
	
	var createRefAccountLookupStart = exports.createRefAccountLookupStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START, 'payload');
	var createRefAccountLookupComplete = exports.createRefAccountLookupComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE, 'payload');
	
	var createRefOwnerLookup = exports.createRefOwnerLookup = function createRefOwnerLookup(lookup) {
	  return function (dispatch) {
	    dispatch(createRefOwnerLookupStart(lookup));
	    return api.apiRetrieveUsers(lookup).then(function (data) {
	      var _ref3 = data || {};
	
	      var _ref3$customers = _ref3.customers;
	      var customers = _ref3$customers === undefined ? [] : _ref3$customers;
	
	
	      var arr = customers.map(function (c) {
	        var id = c.id;
	        var name = c.name;
	        var email = c.email;
	
	        var fullName = [name.firstName, name.lastName].filter(function (i) {
	          return i;
	        }).join(' ');
	        var label = email ? fullName + ' (' + email + ')' : fullName;
	        return {
	          value: id,
	          label: label
	        };
	      });
	      dispatch(createRefOwnerLookupComplete(arr));
	      return { options: arr };
	    }).catch(function (err) {
	      dispatch(createRefOwnerLookupComplete([]));
	      return { options: [] };
	    });
	  };
	};
	
	var createRefAccountLookup = exports.createRefAccountLookup = function createRefAccountLookup(customerId) {
	  return function (dispatch) {
	    dispatch(createRefAccountLookupStart(customerId));
	    return api.apiRetrieveAccounts(customerId).then(function (_ref4) {
	      var accounts = _ref4.accounts;
	
	      var arr = accounts.map(function (_ref5) {
	        var accountId = _ref5.accountId;
	        var title = _ref5.title;
	        return {
	          value: accountId,
	          label: title
	        };
	      });
	      dispatch(createRefAccountLookupComplete(arr));
	      return { options: arr };
	    }).catch(function (err) {
	      dispatch(createRefAccountLookupComplete([]));
	      return { options: [] };
	    });
	  };
	};
	
	var makeTransferRequested = exports.makeTransferRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.MAKE_START);
	var makeTransferComplete = exports.makeTransferComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.MAKE_COMPLETE, 'payload');
	var makeTransferError = exports.makeTransferError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.MAKE_ERROR, 'error');
	var makeTransferFormUpdate = exports.makeTransferFormUpdate = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.MAKE_FORM_UPDATE, 'key', 'value');
	
	var makeTransfer = exports.makeTransfer = function makeTransfer(accountId, payload) {
	  return function (dispatch) {
	    dispatch(makeTransferRequested());
	    return api.apiMakeTransfer(accountId, payload).then(function (data) {
	      var moneyTransferId = data.moneyTransferId;
	
	      dispatch(makeTransferComplete(data));
	      return moneyTransferId;
	    }).catch(function (err) {
	      dispatch(makeTransferError(err));
	      return err;
	    });
	  };
	};
	
	var getTransfersRequested = exports.getTransfersRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.LIST_START, 'id');
	var getTransfersComplete = exports.getTransfersComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.LIST_COMPLETE, 'id', 'payload');
	var getTransfersError = exports.getTransfersError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.LIST_ERROR, 'id', 'error');
	
	var getTransfers = exports.getTransfers = function getTransfers(accountId) {
	  return function (dispatch) {
	    dispatch(getTransfersRequested(accountId));
	    return api.apiRetrieveTransfers(accountId).then(function (data) {
	      dispatch(getTransfersComplete(accountId, data['transactionsHistory']));
	      return data;
	    }).catch(function (err) {
	      dispatch(getTransfersError(accountId, err));
	      return err;
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entities.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 26/02/16.
	                                                                                                                                                                                                                                                                   */
	
	exports.applyConfig = applyConfig;
	
	var _constants = __webpack_require__(319);
	
	var C = _interopRequireWildcard(_constants);
	
	var _parseEndpointConfig2 = __webpack_require__(329);
	
	var _parseEndpointConfig3 = _interopRequireDefault(_parseEndpointConfig2);
	
	var _configure = __webpack_require__(314);
	
	var _sessionStorage = __webpack_require__(317);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var defaultSettings = {
	  forceHardRedirect: false,
	  storage: "cookies",
	  cookieExpiry: 14,
	  cookiePath: "/",
	  initialCredentials: null,
	
	  tokenFormat: {
	    "access-token": "{{ access-token }}"
	  }
	};
	
	// save session configuration
	function applyConfig() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var dispatch = _ref.dispatch;
	  var _ref$endpoint = _ref.endpoint;
	  var endpoint = _ref$endpoint === undefined ? {} : _ref$endpoint;
	  var _ref$settings = _ref.settings;
	  var settings = _ref$settings === undefined ? {} : _ref$settings;
	  var _ref$reset = _ref.reset;
	  var reset = _ref$reset === undefined ? false : _ref$reset;
	
	
	  if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
	    return Promise.resolve({ blank: true });
	  }
	
	  var currentEndpointKey = void 0;
	
	  if (reset) {
	    resetConfig();
	  }
	
	  if (settings.initialCredentials) {
	    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
	  }
	
	  (0, _sessionStorage.setCurrentSettings)(_extends({}, defaultSettings, settings));
	
	  var currentHeaders = (0, _sessionStorage.retrieveData)(C.SAVED_CREDS_KEY) || {};
	
	  var accessToken = currentHeaders["access-token"];
	
	  //if (authRedirectHeaders && authRedirectHeaders["access-token"]) {
	  if (!accessToken) {
	    (0, _sessionStorage.destroySession)();
	  }
	
	  var _parseEndpointConfig = (0, _parseEndpointConfig3.default)(endpoint, (0, _sessionStorage.getInitialEndpointKey)());
	
	  var defaultEndpointKey = _parseEndpointConfig.defaultEndpointKey;
	  var currentEndpoint = _parseEndpointConfig.currentEndpoint;
	
	
	  if (!currentEndpointKey) {
	    currentEndpointKey = defaultEndpointKey;
	  }
	
	  // persist default config key with session storage
	  (0, _sessionStorage.setDefaultEndpointKey)(defaultEndpointKey);
	  (0, _sessionStorage.setCurrentEndpoint)(currentEndpoint);
	
	  dispatch((0, _configure.setEndpointKeys)(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));
	
	  (0, _sessionStorage.setCurrentEndpointKey)(currentEndpointKey);
	
	  return Promise.resolve();
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "clientSettings.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by andrew on 26/02/16.
	                                                                                                                                                                                                                                                                   */
	
	
	exports.default = parseEndpointConfig;
	
	var _constants = __webpack_require__(319);
	
	var C = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// base endpoint that other endpoints extend from
	var defaultEndpoint = {
	  apiUrl: "/api",
	  signOutPath: "/auth/sign_out",
	  emailSignInPath: "/auth/sign_in",
	  emailRegistrationPath: "/auth",
	  accountUpdatePath: "/auth",
	  accountDeletePath: "/auth",
	  passwordResetPath: "/auth/password",
	  passwordUpdatePath: "/auth/password",
	  tokenValidationPath: "/auth/validate_token",
	
	  authProviderPaths: {
	    github: "/auth/github",
	    facebook: "/auth/facebook",
	    google: "/auth/google_oauth2"
	  }
	};
	
	function getFirstObjectKey(obj) {
	  for (var key in obj) {
	    return key;
	  }
	}
	
	function parseEndpointConfig(endpoint) {
	  var defaultEndpointKey = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	  // normalize so opts is always an array of objects
	  if (endpoint.constructor !== Array) {
	    // single config will always be called 'default' unless set
	    // by previous session
	    defaultEndpointKey = C.INITIAL_CONFIG_KEY;
	
	    // config should look like {default: {...}}
	    var defaultConfig = {};
	    defaultConfig[defaultEndpointKey] = endpoint;
	
	    // endpoint should look like [{default: {...}}]
	    endpoint = [defaultConfig];
	  }
	
	  var currentEndpoint = {};
	
	  // iterate over config items, extend each from defaults
	  for (var i = 0; i < endpoint.length; i++) {
	    var configName = getFirstObjectKey(endpoint[i]);
	
	    // set first as default config
	    if (!defaultEndpointKey) {
	      defaultEndpointKey = configName;
	    }
	
	    // save config to `configs` hash
	    currentEndpoint[configName] = _extends({}, defaultEndpoint, endpoint[i][configName]);
	  }
	
	  return { defaultEndpointKey: defaultEndpointKey, currentEndpoint: currentEndpoint };
	}
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "parseEndpointConfig.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.visitLocation = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(316);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	var visitLocation = exports.visitLocation = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.LOCATION.ENTER, 'location');
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "navigate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.requireAuthentication = requireAuthentication;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reduxRouter = __webpack_require__(246);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 21/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	function requireAuthentication(Component) {
	  var AuthComponent = function (_React$Component) {
	    _inherits(AuthComponent, _React$Component);
	
	    function AuthComponent() {
	      _classCallCheck(this, AuthComponent);
	
	      return _possibleConstructorReturn(this, (AuthComponent.__proto__ || Object.getPrototypeOf(AuthComponent)).apply(this, arguments));
	    }
	
	    _createClass(AuthComponent, [{
	      key: 'checkRedirect',
	      value: function checkRedirect(props) {
	        if (!props.isAuthenticated) {
	          // redirect to login and add next param so we can redirect again after login
	          var redirectAfterLogin = props.location.pathname;
	          props.dispatch((0, _reduxRouter.pushState)(null, '/signin?next=' + redirectAfterLogin));
	        }
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this.checkRedirect(this.props);
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        this.checkRedirect(nextProps);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props$isAuthenticate = this.props.isAuthenticated;
	        var isAuthenticated = _props$isAuthenticate === undefined ? false : _props$isAuthenticate;
	
	
	        if (isAuthenticated) {
	          // render the component that requires auth (passed to this wrapper)
	          return _react2.default.createElement(Component, this.props);
	        }
	
	        return _react2.default.createElement(
	          'div',
	          { className: 'panel' },
	          _react2.default.createElement(
	            'h2',
	            { className: 'text-danger' },
	            'No anonymous access!'
	          )
	        );
	      }
	    }]);
	
	    return AuthComponent;
	  }(_react2.default.Component);
	
	  var mapStateToProps = function mapStateToProps(state) {
	    return {
	      isAuthenticated: (0, _readProp2.default)(state, 'app.auth.user.isSignedIn', false)
	    };
	  };
	
	  return (0, _reactRedux.connect)(mapStateToProps)(AuthComponent);
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AuthComponent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = read;
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	/**
	 * Created by andrew on 11/03/16.
	 */
	function read(src) {
	  var path = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	  var defaultVal = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var _path$split = path.split('.');
	
	  var _path$split2 = _toArray(_path$split);
	
	  var _path$split2$ = _path$split2[0];
	  var pathItem = _path$split2$ === undefined ? null : _path$split2$;
	
	  var rest = _path$split2.slice(1);
	
	  if (pathItem === null) {
	    return src || defaultVal;
	  } else if (rest.length === 0) {
	    if (!src) {
	      return defaultVal;
	    }
	    return src[pathItem] || defaultVal;
	  }
	
	  if (!src) {
	    return defaultVal;
	  }
	  return read(src[pathItem], rest.join('.'), defaultVal);
	}
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "readProp.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var _reactRouterBootstrap = __webpack_require__(577);
	
	var _HeaderLinks = __webpack_require__(580);
	
	var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 17/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Container = exports.Container = function (_React$Component) {
	  _inherits(Container, _React$Component);
	
	  function Container() {
	    _classCallCheck(this, Container);
	
	    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	  }
	
	  _createClass(Container, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "wrapper" },
	        _react2.default.createElement(
	          _reactBootstrap.Navbar,
	          { className: "main-nav" },
	          _react2.default.createElement(
	            _reactRouterBootstrap.LinkContainer,
	            { to: "/" },
	            _react2.default.createElement(
	              _reactBootstrap.NavbarBrand,
	              null,
	              "Money Transfer"
	            )
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            null,
	            _react2.default.createElement(
	              _reactRouterBootstrap.LinkContainer,
	              { to: "/", onlyActiveOnIndex: true },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 1 },
	                "Home"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(_HeaderLinks2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          { className: "content" },
	          this.props.children
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Navbar,
	          { fixedBottom: true, className: "footer-navigation" },
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12, sm: 6 },
	            "© 2016 Eventuate.io"
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12, sm: 6, className: "text-right" },
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              "Terms"
	            ),
	            " | ",
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              "Policy"
	            ),
	            " | ",
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              "Contact"
	            ),
	            " | ",
	            _react2.default.createElement(
	              "a",
	              { href: "#" },
	              "About"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Container;
	}(_react2.default.Component);
	
	Container.propTypes = {
	  children: _react.PropTypes.node
	};
	exports.default = Container;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Container.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderLinks = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reactRouterBootstrap = __webpack_require__(577);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _signOut2 = __webpack_require__(581);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 11/03/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var HeaderLinks = exports.HeaderLinks = function (_React$Component) {
	  _inherits(HeaderLinks, _React$Component);
	
	  function HeaderLinks() {
	    _classCallCheck(this, HeaderLinks);
	
	    return _possibleConstructorReturn(this, (HeaderLinks.__proto__ || Object.getPrototypeOf(HeaderLinks)).apply(this, arguments));
	  }
	
	  _createClass(HeaderLinks, [{
	    key: 'signOut',
	    value: function signOut(evt, key) {
	      this.props.dispatch((0, _signOut2.signOut)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var buttonSet = null;
	      var isSignedIn = (0, _readProp2.default)(this.props.auth, 'user.isSignedIn', false);
	      var location = this.props.router.location;
	
	      var isRegister = location.pathname == '/register';
	      var isLogin = location.pathname == '/signin';
	
	      var condition = isSignedIn ? 2 : isRegister ? 1 : 0;
	
	      switch (condition) {
	        case 0:
	          buttonSet = _react2.default.createElement(
	            _reactRouterBootstrap.LinkContainer,
	            { to: '/register' },
	            _react2.default.createElement(
	              BS.NavItem,
	              null,
	              'Register'
	            )
	          );
	          break;
	        case 1:
	          buttonSet = _react2.default.createElement(
	            _reactRouterBootstrap.LinkContainer,
	            { to: '/signin' },
	            _react2.default.createElement(
	              BS.NavItem,
	              null,
	              'Log In'
	            )
	          );
	          break;
	        case 2:
	          buttonSet = _react2.default.createElement(
	            BS.NavItem,
	            { onClick: this.signOut.bind(this), eventKey: '2' },
	            'Sign Out'
	          );
	          break;
	      }
	
	      return _react2.default.createElement(
	        BS.Nav,
	        { pullRight: true },
	        buttonSet
	      );
	    }
	  }]);
	
	  return HeaderLinks;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var router = _ref.router;
	  var app = _ref.app;
	  return {
	    //dispatch,
	    router: router,
	    auth: app.auth
	  };
	})(HeaderLinks);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HeaderLinks.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signOut = exports.signOutComplete = exports.signOutStart = undefined;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(316);
	
	var _sessionStorage = __webpack_require__(317);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signOutStart = exports.signOutStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_OUT_START); /**
	                                                                                                                        * Created by andrew on 11/03/16.
	                                                                                                                        */
	var signOutComplete = exports.signOutComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_OUT_COMPLETE);
	
	var signOut = exports.signOut = function signOut() {
	  return function (dispatch) {
	    dispatch(signOutStart());
	
	    (0, _sessionStorage.destroySession)();
	
	    dispatch(signOutComplete());
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signOut.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRedux = __webpack_require__(170);
	
	var _AccountInfo = __webpack_require__(583);
	
	var _AccountInfo2 = _interopRequireDefault(_AccountInfo);
	
	var _modals = __webpack_require__(586);
	
	var M = _interopRequireWildcard(_modals);
	
	var _IndexPanel = __webpack_require__(600);
	
	var _IndexPanel2 = _interopRequireDefault(_IndexPanel);
	
	var _entities = __webpack_require__(327);
	
	var A = _interopRequireWildcard(_entities);
	
	var _authenticate = __webpack_require__(315);
	
	var AU = _interopRequireWildcard(_authenticate);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _Money = __webpack_require__(599);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 17/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var resetModals = {
	  showAccountModal: false,
	  show3rdPartyAccountModal: false,
	  showDeleteAccountModal: false
	};
	
	var MyAccounts = function (_React$Component) {
	  _inherits(MyAccounts, _React$Component);
	
	  function MyAccounts() {
	    var _ref;
	
	    _classCallCheck(this, MyAccounts);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, (_ref = MyAccounts.__proto__ || Object.getPrototypeOf(MyAccounts)).call.apply(_ref, [this].concat(args)));
	
	    _this.state = _extends({}, resetModals);
	    return _this;
	  }
	
	  _createClass(MyAccounts, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      var customerId = this.props.auth.user.attributes.id;
	
	      this.props.dispatch(A.fetchOwnAccounts(customerId));
	    }
	  }, {
	    key: "createAccountModal",
	    value: function createAccountModal() {
	      this.setState({
	        showAccountModal: true
	      });
	    }
	  }, {
	    key: "createAccountModalConfirmed",
	    value: function createAccountModalConfirmed(payload) {
	      var _this2 = this;
	
	      var customerId = this.props.auth.user.attributes.id;
	
	
	      this.props.dispatch(A.accountCreate(customerId, payload)).then(function (accountId) {
	        _this2.close();
	        // return new Promise((rs, rj) => {
	        setTimeout(function () {
	          _this2.props.dispatch(A.fetchOwnAccounts(customerId)); //.then(rs, rj);
	        }, 1500);
	        // });
	      }).catch(function (err) {
	        // debugger;
	        _this2.props.dispatch(A.accountCreateError(err));
	      });
	    }
	  }, {
	    key: "create3rdPartyAccountModal",
	    value: function create3rdPartyAccountModal() {
	      this.setState({
	        show3rdPartyAccountModal: true
	      });
	    }
	  }, {
	    key: "create3rdPartyAccountModalConfirmed",
	    value: function create3rdPartyAccountModalConfirmed(payload) {
	      var _this3 = this;
	
	      var customerId = this.props.auth.user.attributes.id;
	      var dispatch = this.props.dispatch;
	
	
	      dispatch(A.accountRefCreate(customerId, payload)).then(function () {
	        _this3.close();
	        return new Promise(function (rs, rj) {
	          setTimeout(function () {
	            Promise.all([dispatch(AU.authenticate(true)), dispatch(A.fetchOwnAccounts(customerId))]).then(rs, rj);
	          }, 1500);
	        });
	      }).catch(function (err) {
	        // debugger;
	        _this3.props.dispatch(A.accountRefCreateError(err));
	      });
	    }
	  }, {
	    key: "remove3rdPartyAccountModal",
	    value: function remove3rdPartyAccountModal(accountId, evt) {
	      var account = this.props.app.entities[accountId];
	      this.setState({
	        accountToRemove: account,
	        showDeleteAccountModal: true
	      });
	    }
	  }, {
	    key: "remove3rdPartyAccountModalConfirmed",
	    value: function remove3rdPartyAccountModalConfirmed(account) {
	      var _this4 = this;
	
	      var accountId = account.id || account.accountId;
	      var isRef = typeof account.balance == 'undefined';
	
	      var _props = this.props;
	      var customerId = _props.customerId;
	      var dispatch = _props.dispatch;
	
	      dispatch(A.deleteAccount(customerId, accountId, isRef)).then(function () {
	        _this4.close();
	        setTimeout(function () {
	          return Promise.all([dispatch(AU.authenticate(true)), dispatch(A.fetchOwnAccounts(customerId))]);
	        }, 1500);
	      }, function (err) {
	        dispatch(A.errorMessageTimedOut(err && err.message || err));
	        _this4.close();
	      });
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.setState(_extends({}, resetModals));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this5 = this;
	
	      //const deployTooltip = (<Tooltip>
	      //  Create a new instance of this demo on your own Heroku server.
	      //</Tooltip>);
	      var user = this.props.auth.user.attributes;
	      var customerId = user.id;
	      var _user$email = user.email;
	      var email = _user$email === undefined ? '' : _user$email;
	      var _user$ssn = user.ssn;
	      var ssn = _user$ssn === undefined ? '' : _user$ssn;
	      var _user$name = user.name;
	      var name = _user$name === undefined ? {} : _user$name;
	      var _user$phoneNumber = user.phoneNumber;
	      var phoneNumber = _user$phoneNumber === undefined ? '' : _user$phoneNumber;
	      var _user$address = user.address;
	      var address = _user$address === undefined ? {} : _user$address;
	      var toAccounts = user.toAccounts;
	
	
	      var firstName = name.firstName || '';
	      var lastName = name.lastName || '';
	
	      var city = address.city;
	      var state = address.state;
	      var street1 = address.street1;
	      var street2 = address.street2;
	      var zipCode = address.zipCode;
	      var _state = this.state;
	      var showAccountModal = _state.showAccountModal;
	      var show3rdPartyAccountModal = _state.show3rdPartyAccountModal;
	      var showDeleteAccountModal = _state.showDeleteAccountModal;
	      var _state$accountToRemov = this.state.accountToRemove;
	      var accountToRemove = _state$accountToRemov === undefined ? null : _state$accountToRemov;
	      var error = this.props.error;
	
	      var errorLine = error ? _react2.default.createElement(
	        BS.Panel,
	        { bsStyle: "danger" },
	        _react2.default.createElement(
	          "strong",
	          null,
	          JSON.stringify(error.errors || error)
	        )
	      ) : [];
	
	      var ownAccountsData = this.props.app.accounts.own || [];
	
	      //accountId: "000001537c2cf075-a250093f26850000"
	      //balance: 0
	      //description: null
	      //title: "Sample"
	
	      var ownAccounts = ownAccountsData.map(function (_ref2, idx) {
	        var accountId = _ref2.accountId;
	        var balance = _ref2.balance;
	        var _ref2$description = _ref2.description;
	        var description = _ref2$description === undefined ? '' : _ref2$description;
	        var title = _ref2.title;
	        return _react2.default.createElement(
	          "tr",
	          { key: "own_" + idx },
	          _react2.default.createElement(
	            "td",
	            { key: 0 },
	            _react2.default.createElement(_AccountInfo2.default, { accountId: accountId }),
	            description ? [_react2.default.createElement("br", null), _react2.default.createElement(
	              "span",
	              null,
	              description
	            )] : null
	          ),
	          _react2.default.createElement(
	            "td",
	            { key: 1 },
	            _react2.default.createElement(_Money.Money, { amount: balance })
	          ),
	          _react2.default.createElement(
	            "td",
	            { key: 2 },
	            _react2.default.createElement(
	              BS.Button,
	              { bsStyle: "link", onClick: _this5.remove3rdPartyAccountModal.bind(_this5, accountId) },
	              _react2.default.createElement(BS.Glyphicon, { glyph: "remove" })
	            )
	          )
	        );
	      });
	
	      var refAccountsData = this.props.app.accounts.other || [];
	      var refAccounts = refAccountsData.map(function (_ref3, idx) {
	        var title = _ref3.title;
	        var _ref3$description = _ref3.description;
	        var description = _ref3$description === undefined ? '' : _ref3$description;
	        var id = _ref3.id;
	        return _react2.default.createElement(
	          "tr",
	          { key: "ref_" + idx },
	          _react2.default.createElement(
	            "td",
	            { key: 0 },
	            _react2.default.createElement(_AccountInfo2.default, { accountId: id }),
	            description ? [_react2.default.createElement("br", null), _react2.default.createElement(
	              "span",
	              null,
	              description
	            )] : null
	          ),
	          _react2.default.createElement("td", { key: 1 }),
	          _react2.default.createElement(
	            "td",
	            { key: 2 },
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { pullRight: true, bsStyle: "link", onClick: _this5.remove3rdPartyAccountModal.bind(_this5, id) },
	              _react2.default.createElement(BS.Glyphicon, { glyph: "remove" })
	            )
	          )
	        );
	      });
	
	      var accounts = !!(ownAccounts.length + refAccounts.length) ? [].concat(ownAccounts, refAccounts) : _react2.default.createElement(
	        "tr",
	        null,
	        _react2.default.createElement(
	          "td",
	          { colSpan: 3 },
	          "No account exists: ",
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: "link", onClick: this.createAccountModal.bind(this) },
	            "create a new one"
	          ),
	          " or ",
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: "link", onClick: this.create3rdPartyAccountModal.bind(this) },
	            "add a recipient"
	          )
	        )
	      );
	
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          null,
	          "My Accounts",
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            { pullRight: true },
	            _react2.default.createElement(
	              _reactBootstrap.ButtonGroup,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: "link", onClick: this.createAccountModal.bind(this) },
	                "Create Account"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: "link", onClick: this.create3rdPartyAccountModal.bind(this) },
	                "Add 3rd Party Recipients"
	              )
	            )
	          )
	        ),
	        errorLine,
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _IndexPanel2.default,
	            { header: "Personal Info:" },
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "Customer:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  firstName + " " + lastName
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "Email:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  email
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "Phone:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  phoneNumber
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "SSN:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  ssn
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Table,
	          null,
	          _react2.default.createElement(
	            "thead",
	            null,
	            _react2.default.createElement(
	              "tr",
	              null,
	              _react2.default.createElement(
	                "th",
	                null,
	                "Account Title"
	              ),
	              _react2.default.createElement(
	                "th",
	                null,
	                "Balance"
	              ),
	              _react2.default.createElement("th", null)
	            )
	          ),
	          _react2.default.createElement(
	            "tbody",
	            null,
	            accounts
	          )
	        ),
	        _react2.default.createElement(M.NewAccountModal, { show: showAccountModal,
	          action: this.createAccountModalConfirmed.bind(this),
	          account: this.props.app.accounts.create,
	          onHide: this.close.bind(this),
	          key: 0 }),
	        _react2.default.createElement(M.Add3rdPartyAccountModal, { show: show3rdPartyAccountModal,
	          action: this.create3rdPartyAccountModalConfirmed.bind(this),
	          onHide: this.close.bind(this),
	          key: 1 }),
	        _react2.default.createElement(M.RemoveAccountBookmarkModal, { show: showDeleteAccountModal,
	          account: accountToRemove,
	          action: this.remove3rdPartyAccountModalConfirmed.bind(this),
	          onHide: this.close.bind(this),
	          key: 2 })
	      );
	    }
	  }]);
	
	  return MyAccounts;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref4) {
	  var app = _ref4.app;
	
	  return {
	    auth: app.auth,
	    app: app.data,
	    customerId: (0, _readProp2.default)(app, 'auth.user.isSignedIn', false) ? (0, _readProp2.default)(app, 'auth.user.attributes.id', null) : null,
	    error: app.ui.error
	  };
	})(MyAccounts);
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MyAccounts.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AccountInfo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reactLoader = __webpack_require__(584);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _entities = __webpack_require__(327);
	
	var A = _interopRequireWildcard(_entities);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactRouter = __webpack_require__(183);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 3/22/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var AccountInfo = exports.AccountInfo = function (_React$Component) {
	  _inherits(AccountInfo, _React$Component);
	
	  function AccountInfo() {
	    _classCallCheck(this, AccountInfo);
	
	    return _possibleConstructorReturn(this, (AccountInfo.__proto__ || Object.getPrototypeOf(AccountInfo)).apply(this, arguments));
	  }
	
	  _createClass(AccountInfo, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.ensureData(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.ensureData(nextProps);
	    }
	  }, {
	    key: "ensureData",
	    value: function ensureData(_ref) {
	      var dispatch = _ref.dispatch;
	      var entities = _ref.entities;
	      var accountId = _ref.accountId;
	
	      if (entities[accountId]) {
	        return;
	      }
	      dispatch(A.fetchAccount(accountId));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var entities = _props.entities;
	      var accountId = _props.accountId;
	      var customerId = _props.customerId;
	
	
	      var account = entities[accountId];
	
	      if (!account || !accountId) {
	        return _react2.default.createElement(
	          "div",
	          { className: "text-info", title: "" + accountId },
	          "Loading.. ",
	          _react2.default.createElement(_reactLoader2.default, { loaded: false })
	        );
	      }
	
	      var errors = account.errors;
	
	      if (errors) {
	        return _react2.default.createElement(
	          "div",
	          { className: "text-danger" },
	          errors
	        );
	      }
	
	      var title = account.title;
	      var owner = account.owner;
	
	
	      if (typeof owner !== 'undefined' && customerId !== owner) {
	        return _react2.default.createElement(
	          BS.Button,
	          { bsStyle: "link", disabled: true, title: "" + accountId, style: { padding: '0 0' } },
	          title
	        );
	      } else {
	        return _react2.default.createElement(
	          _reactRouter.Link,
	          { to: "/account/" + accountId },
	          title
	        );
	      }
	    }
	  }]);
	
	  return AccountInfo;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref2) {
	  var app = _ref2.app;
	  return {
	    entities: app.data.entities,
	    customerId: (0, _readProp2.default)(app, 'auth.user.isSignedIn', false) ? (0, _readProp2.default)(app, 'auth.user.attributes.id', null) : null
	  };
	})(AccountInfo);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AccountInfo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Add3rdPartyAccountModal = __webpack_require__(587);
	
	Object.defineProperty(exports, 'Add3rdPartyAccountModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Add3rdPartyAccountModal).default;
	  }
	});
	
	var _NewAccountModal = __webpack_require__(597);
	
	Object.defineProperty(exports, 'NewAccountModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NewAccountModal).default;
	  }
	});
	
	var _RemoveAccountModal = __webpack_require__(598);
	
	Object.defineProperty(exports, 'RemoveAccountBookmarkModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RemoveAccountModal).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Add3rdPartyAccountModal = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _ButtonLoader = __webpack_require__(588);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _Input = __webpack_require__(589);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _AuxErrorLabel = __webpack_require__(590);
	
	var _AuxErrorLabel2 = _interopRequireDefault(_AuxErrorLabel);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactRouter = __webpack_require__(183);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reactSelect = __webpack_require__(591);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _entities = __webpack_require__(327);
	
	var A = _interopRequireWildcard(_entities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 20/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
	
	
	var formValidation = function formValidation(payload) {
	  return ['owner', 'account', 'title', 'description'].reduce(function (memo, prop) {
	    var result = [];
	    var value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');
	
	    switch (prop) {
	      case 'owner':
	      case 'account':
	      case 'title':
	        if (/^$/.test(value)) {
	          result.push('required');
	        }
	    }
	
	    switch (prop) {
	      case 'description':
	        if (value.length > 400) {
	          result.push('need to less than 400 symbols long');
	        }
	    }
	
	    if (result.length) {
	      memo[prop] = result;
	      memo.hasErrors = true;
	    }
	    return memo;
	  }, {});
	};
	
	var Add3rdPartyAccountModal = exports.Add3rdPartyAccountModal = function (_React$Component) {
	  _inherits(Add3rdPartyAccountModal, _React$Component);
	
	  function Add3rdPartyAccountModal() {
	    _classCallCheck(this, Add3rdPartyAccountModal);
	
	    return _possibleConstructorReturn(this, (Add3rdPartyAccountModal.__proto__ || Object.getPrototypeOf(Add3rdPartyAccountModal)).apply(this, arguments));
	  }
	
	  _createClass(Add3rdPartyAccountModal, [{
	    key: "handleInput",
	    value: function handleInput(key, value) {
	      this.props.dispatch(A.accountRefCreateFormUpdate(key, value));
	      switch (key) {
	        case 'owner':
	          if (value) {
	            this.props.dispatch(A.createRefAccountLookup(value));
	          } else {
	            this.props.dispatch(A.createRefAccountLookupComplete([]));
	          }
	      }
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(evt) {
	      evt.preventDefault();
	
	      var payload = _extends({}, this.props.data.form);
	
	      var validationErrors = formValidation(payload);
	      if (validationErrors.hasErrors) {
	        this.props.dispatch(A.accountRefCreateError(validationErrors));
	        return;
	      }
	
	      var action = this.props.action;
	
	
	      if (action) {
	        action(payload);
	      }
	    }
	  }, {
	    key: "onHide",
	    value: function onHide() {
	      this.props.dispatch(A.accountRefCreateComplete({}));
	      if (this.props.onHide) {
	        this.props.onHide();
	      }
	    }
	  }, {
	    key: "getOwnersOptions",
	    value: function getOwnersOptions(input) {
	      if (!input) {
	        return Promise.resolve({ options: [] });
	      }
	      return this.props.dispatch(A.createRefOwnerLookup(input));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var disabled = (0, _readProp2.default)(this.props.data, 'loading', false);
	
	      var ownersLoading = (0, _readProp2.default)(this.props.data, 'ownersLookup.loading', false);
	
	      var formErrors = (0, _readProp2.default)(this.props.data, 'errors.errors', '');
	
	      return _react2.default.createElement(
	        BS.Modal,
	        { show: this.props.show, onHide: this.onHide.bind(this), key: 1 },
	        _react2.default.createElement(
	          BS.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            BS.Modal.Title,
	            null,
	            "Add 3rd Party Account"
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Body,
	          null,
	          _react2.default.createElement(
	            "form",
	            { className: "account-create-ref clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "form-group", style: {
	                  display: formErrors ? 'block' : 'none'
	                } },
	              _react2.default.createElement(_AuxErrorLabel2.default, {
	                label: "Form:",
	                errors: formErrors.length ? [formErrors] : []
	              })
	            ),
	            _react2.default.createElement(
	              "label",
	              null,
	              "Owner:"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "form-group" },
	              _react2.default.createElement(_reactSelect2.default, {
	                name: "owner",
	                onBlurResetsInput: false,
	                asyncOptions: this.getOwnersOptions.bind(this),
	                matchProp: "label",
	                onChange: this.handleInput.bind(this, 'owner'),
	                value: (0, _readProp2.default)(this.props.data, 'form.owner', ''),
	                disabled: disabled
	              }),
	              _react2.default.createElement(_AuxErrorLabel2.default, {
	                label: "Owner:",
	                errors: (0, _readProp2.default)(this.props.data, 'errors.owner', [])
	              })
	            ),
	            _react2.default.createElement(
	              "label",
	              null,
	              "Account:"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "form-group" },
	              _react2.default.createElement(_reactSelect2.default, {
	                name: "account",
	                value: (0, _readProp2.default)(this.props.data, 'form.account', ''),
	                disabled: ownersLoading || disabled,
	                clearable: false,
	                searchable: false,
	                options: (0, _readProp2.default)(this.props.data, 'accountsLookup.options', []),
	                onChange: this.handleInput.bind(this, 'account') }),
	              _react2.default.createElement(_AuxErrorLabel2.default, {
	                label: "Account:",
	                errors: (0, _readProp2.default)(this.props.data, 'errors.account', [])
	              })
	            ),
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "account-create-description",
	              label: "Title:",
	              placeholder: "Title",
	              name: "title",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.data, 'form.title', ''),
	              errors: (0, _readProp2.default)(this.props.data, 'errors.title', []),
	              onChange: this.handleInput.bind(this, 'title') }),
	            _react2.default.createElement(_Input2.default, { type: "textarea",
	              className: "account-create-description",
	              label: "Description:",
	              placeholder: "Description",
	              name: "description",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.data, 'form.description', ''),
	              errors: (0, _readProp2.default)(this.props.data, 'errors.description', []),
	              onChange: this.handleInput.bind(this, 'description') })
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            BS.Button,
	            { onClick: this.onHide.bind(this) },
	            "Cancel"
	          ),
	          _react2.default.createElement(
	            _ButtonLoader2.default,
	            { loading: (0, _readProp2.default)(this.props.data, 'loading', false),
	              type: "submit",
	              bsStyle: "primary",
	              icon: _react2.default.createElement(BS.Glyphicon, { glyph: "plus" }),
	              disabled: disabled,
	              onClick: this.handleSubmit.bind(this) },
	            "Add"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Add3rdPartyAccountModal;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(_ref) {
	  var app = _ref.app;
	  return {
	    ui: app.ui.bookmarkAccount,
	    data: app.data.bookmarkAccount
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Add3rdPartyAccountModal);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Add3rdPartyAccountModal.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var _reactLoader = __webpack_require__(584);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 15/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ButtonLoader = function (_React$Component) {
	  _inherits(ButtonLoader, _React$Component);
	
	  function ButtonLoader() {
	    _classCallCheck(this, ButtonLoader);
	
	    return _possibleConstructorReturn(this, (ButtonLoader.__proto__ || Object.getPrototypeOf(ButtonLoader)).apply(this, arguments));
	  }
	
	  _createClass(ButtonLoader, [{
	    key: "renderIcon",
	    value: function renderIcon() {
	      var icon = void 0;
	
	      if (this.props.loading) {
	        var spinColor = !this.props.bsStyle || this.props.bsStyle === "default" ? this.props.spinColorDark : this.props.spinColorLight;
	
	        icon = _react2.default.createElement(_reactLoader2.default, _extends({}, this.props.spinConfig, { color: spinColor, loaded: false }));
	      } else {
	        icon = this.props.icon;
	      }
	
	      return _react2.default.createElement(
	        "div",
	        { style: {
	            position: "relative",
	            display: "inline-block",
	            marginRight: "6px",
	            width: "10px",
	            height: "10px",
	            top: "1px"
	          } },
	        icon
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Button,
	        {
	          onClick: this.props.onClick,
	          disabled: this.props.disabled || this.props.loading,
	          bsStyle: this.props.bsStyle,
	          className: this.props.className,
	          type: this.props.type,
	          style: this.props.style,
	          bsSize: this.props.bsSize },
	        this.renderIcon(),
	        " ",
	        this.props.children
	      );
	    }
	  }]);
	
	  return ButtonLoader;
	}(_react2.default.Component);
	
	ButtonLoader.propTypes = {
	  icon: _react.PropTypes.node,
	  loading: _react.PropTypes.bool,
	  spinConfig: _react.PropTypes.object,
	  spinColorDark: _react.PropTypes.string,
	  spinColorLight: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  onClick: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object
	};
	ButtonLoader.defaultProps = {
	  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "heart" }),
	  loading: false,
	  spinConfig: {
	    lines: 10,
	    length: 4,
	    width: 2,
	    radius: 3
	  },
	  spinColorDark: "#444",
	  spinColorLight: "#fff",
	  children: _react2.default.createElement(
	    "span",
	    null,
	    "Submit"
	  ),
	  style: {}
	};
	exports.default = ButtonLoader;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ButtonLoader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 15/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var AuthInput = function (_React$Component) {
	  _inherits(AuthInput, _React$Component);
	
	  function AuthInput() {
	    _classCallCheck(this, AuthInput);
	
	    return _possibleConstructorReturn(this, (AuthInput.__proto__ || Object.getPrototypeOf(AuthInput)).apply(this, arguments));
	  }
	
	  _createClass(AuthInput, [{
	    key: "handleInput",
	    value: function handleInput(ev) {
	      this.props.onChange(ev.target.value);
	    }
	  }, {
	    key: "renderErrorList",
	    value: function renderErrorList() {
	      var _this2 = this;
	
	      if (this.props.errors.length) {
	        return _react2.default.createElement(
	          "div",
	          { className: "auth-error-message has-error" },
	          this.props.errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              { className: "control-label inline-error-item",
	                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
	                key: i },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  top: 2
	                }
	              }),
	              " ",
	              _this2.props.label,
	              " ",
	              err
	            );
	          })
	        );
	      } else {
	        return _react2.default.createElement("span", null);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_reactBootstrap.Input, _extends({}, this.props, {
	          bsStyle: this.props.errors.length ? "error" : null,
	          onChange: this.handleInput.bind(this) })),
	        this.renderErrorList()
	      );
	    }
	  }]);
	
	  return AuthInput;
	}(_react2.default.Component);
	
	AuthInput.propTypes = {
	  label: _react.PropTypes.string,
	  value: _react.PropTypes.string,
	  errors: _react.PropTypes.array
	};
	AuthInput.defaultProps = {
	  label: '',
	  value: null,
	  errors: []
	};
	exports.default = AuthInput;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Input.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 15/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var AuxErrorLabel = function (_React$Component) {
	  _inherits(AuxErrorLabel, _React$Component);
	
	  function AuxErrorLabel() {
	    _classCallCheck(this, AuxErrorLabel);
	
	    return _possibleConstructorReturn(this, (AuxErrorLabel.__proto__ || Object.getPrototypeOf(AuxErrorLabel)).apply(this, arguments));
	  }
	
	  _createClass(AuxErrorLabel, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var errors = this.props.errors;
	
	
	      if (errors.length) {
	        return _react2.default.createElement(
	          "div",
	          { className: "has-error" },
	          errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              { className: "control-label inline-error-item",
	                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
	                key: i },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  top: 2
	                }
	              }),
	              " ",
	              _this2.props.label,
	              " ",
	              err
	            );
	          })
	        );
	      } else {
	        return _react2.default.createElement("span", null);
	      }
	    }
	  }]);
	
	  return AuxErrorLabel;
	}(_react2.default.Component);
	
	AuxErrorLabel.propTypes = {
	  label: _react.PropTypes.string,
	  errors: _react.PropTypes.array
	};
	AuxErrorLabel.defaultProps = {
	  label: '',
	  errors: []
	};
	exports.default = AuxErrorLabel;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AuxErrorLabel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NewAccountModal = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _Input = __webpack_require__(589);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonLoader = __webpack_require__(588);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _reactRouter = __webpack_require__(183);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _entities = __webpack_require__(327);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 20/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	//import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
	
	var formValidation = function formValidation(payload) {
	  return ['title', 'balance', 'description'].reduce(function (memo, prop) {
	    var result = [];
	    var value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');
	
	    switch (prop) {
	      case 'title':
	      case 'balance':
	        if (/^$/.test(value)) {
	          result.push('required');
	        }
	    }
	
	    switch (prop) {
	      case 'balance':
	        if (!/\d+/.test(value)) {
	          result.push('need to be a number');
	        }
	    }
	
	    switch (prop) {
	      case 'description':
	        if (value.length > 400) {
	          result.push('need to less than 400 symbols long');
	        }
	
	    }
	    if (result.length) {
	      memo[prop] = result;
	      memo.hasErrors = true;
	    }
	    return memo;
	  }, {});
	};
	
	var NewAccountModal = exports.NewAccountModal = function (_React$Component) {
	  _inherits(NewAccountModal, _React$Component);
	
	  function NewAccountModal() {
	    _classCallCheck(this, NewAccountModal);
	
	    return _possibleConstructorReturn(this, (NewAccountModal.__proto__ || Object.getPrototypeOf(NewAccountModal)).apply(this, arguments));
	  }
	
	  _createClass(NewAccountModal, [{
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      var payload = _extends({}, this.props.account.form);
	
	      var validationErrors = formValidation(payload);
	      if (validationErrors.hasErrors) {
	        this.props.dispatch((0, _entities.accountCreateError)(validationErrors));
	        return;
	      }
	
	      var action = this.props.action;
	
	
	      if (action) {
	        action(payload);
	      }
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _entities.accountCreateFormUpdate)(key, val));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      var disabled = this.props.account.loading;
	
	      var actionLabel = 'Create';
	
	      return _react2.default.createElement(
	        BS.Modal,
	        { show: this.props.show, onHide: this.props.onHide, key: 0 },
	        _react2.default.createElement(
	          BS.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            BS.Modal.Title,
	            null,
	            "New Account"
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Body,
	          null,
	          _react2.default.createElement(
	            "form",
	            { className: "account-create-form clearfix",
	              onSubmit: this.handleSubmit.bind(this) },
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "account-create-title",
	              label: "Title",
	              placeholder: "Title",
	              name: "title",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.account, 'form.title', ''),
	              errors: (0, _readProp2.default)(this.props.account, 'errors.title', []),
	              onChange: this.handleInput.bind(this, "title")
	            }),
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "account-create-balance",
	              label: "Balance",
	              placeholder: "Balance",
	              name: "balance",
	              addonBefore: _react2.default.createElement(BS.Glyphicon, { glyph: "usd" }),
	              addonAfter: ".00",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.account, 'form.balance', ''),
	              errors: (0, _readProp2.default)(this.props.account, 'errors.balance', []),
	              onChange: this.handleInput.bind(this, 'balance')
	            }),
	            _react2.default.createElement(_Input2.default, { type: "textarea",
	              className: "account-create-description",
	              label: "Description",
	              placeholder: "Description",
	              name: "description",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.account, 'form.description', '') || '',
	              errors: (0, _readProp2.default)(this.props.account, 'errors.description', []),
	              onChange: this.handleInput.bind(this, 'description')
	            })
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            BS.Button,
	            { onClick: this.props.onHide },
	            "Cancel"
	          ),
	          _react2.default.createElement(
	            _ButtonLoader2.default,
	            { loading: (0, _readProp2.default)(this.props.account, 'loading', false),
	              type: "submit",
	              bsStyle: "primary",
	              icon: _react2.default.createElement(BS.Glyphicon, { glyph: "plus" }),
	              disabled: disabled,
	              onClick: this.handleSubmit.bind(this)
	            },
	            actionLabel
	          )
	        )
	      );
	    }
	  }]);
	
	  return NewAccountModal;
	}(_react2.default.Component);
	
	NewAccountModal.propTypes = {
	  action: _react.PropTypes.func,
	  account: _react.PropTypes.object.isRequired
	};
	exports.default = (0, _reactRedux.connect)()(NewAccountModal);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NewAccountModal.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RemoveAccountBookmarkModal = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _Money = __webpack_require__(599);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 20/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var RemoveAccountBookmarkModal = exports.RemoveAccountBookmarkModal = function (_React$Component) {
	  _inherits(RemoveAccountBookmarkModal, _React$Component);
	
	  function RemoveAccountBookmarkModal() {
	    _classCallCheck(this, RemoveAccountBookmarkModal);
	
	    return _possibleConstructorReturn(this, (RemoveAccountBookmarkModal.__proto__ || Object.getPrototypeOf(RemoveAccountBookmarkModal)).apply(this, arguments));
	  }
	
	  _createClass(RemoveAccountBookmarkModal, [{
	    key: "handleAction",
	    value: function handleAction(evt) {
	      evt.preventDefault();
	      var _props = this.props;
	      var action = _props.action;
	      var account = _props.account;
	
	      if (action) {
	        action(account);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var account = this.props.account;
	
	      var _ref = account || {};
	
	      var titleRaw = _ref.title;
	      var descriptionRaw = _ref.description;
	      var balanceRaw = _ref.balance;
	      var id = _ref.id;
	      var accountId = _ref.accountId;
	
	
	      var entityId = id || accountId;
	
	      var title = titleRaw || '—';
	      var balance = (0, _Money.moneyText)(balanceRaw);
	      var description = descriptionRaw || '—';
	
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.show, onHide: this.props.onHide, key: 0 },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            null,
	            "Remove Account Bookmark"
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            "form",
	            { className: "form-horizontal" },
	            _react2.default.createElement(
	              BS.FormControls.Static,
	              { label: "Title", labelClassName: "col-xs-2", wrapperClassName: "col-xs-10" },
	              title
	            ),
	            _react2.default.createElement(
	              BS.FormControls.Static,
	              { label: "Balance", labelClassName: "col-xs-2", wrapperClassName: "col-xs-10" },
	              balance
	            ),
	            _react2.default.createElement(
	              BS.FormControls.Static,
	              { label: "Description", labelClassName: "col-xs-2", wrapperClassName: "col-xs-10" },
	              description
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.props.onHide },
	            "Cancel"
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: "danger", eventKey: entityId, onClick: this.handleAction.bind(this) },
	            "Remove"
	          )
	        )
	      );
	    }
	  }]);
	
	  return RemoveAccountBookmarkModal;
	}(_react2.default.Component);
	
	RemoveAccountBookmarkModal.propTypes = {
	  action: _react.PropTypes.func,
	  account: _react.PropTypes.object
	};
	exports.default = RemoveAccountBookmarkModal;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "RemoveAccountModal.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Money = exports.moneyText = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moneyText = exports.moneyText = function moneyText(amount) {
	
	  if (Number.isNaN(Number(amount))) {
	    return '—';
	  }
	  var absNum = Math.abs(Number(amount) / 100);
	  if (absNum < 0) {
	    return '$(' + absNum.toFixed(2) + ')';
	  }
	  return '$' + absNum.toFixed(2);
	}; /**
	    * Created by andrew on 3/22/16.
	    */
	var Money = exports.Money = function Money(_ref) {
	  var amount = _ref.amount;
	
	
	  if (Number.isNaN(Number(amount))) {
	    return _react2.default.createElement('span', null);
	  }
	  var absNum = Math.abs(Number(amount) / 100);
	  if (absNum < 0) {
	    return _react2.default.createElement(
	      'span',
	      { className: 'text-danger' },
	      '($$',
	      absNum.toFixed(2),
	      ')'
	    );
	  }
	  return _react2.default.createElement(
	    'span',
	    null,
	    '$',
	    absNum.toFixed(2)
	  );
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Money.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IndexPanel = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 17/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var IndexPanel = exports.IndexPanel = function (_React$Component) {
	  _inherits(IndexPanel, _React$Component);
	
	  function IndexPanel() {
	    _classCallCheck(this, IndexPanel);
	
	    return _possibleConstructorReturn(this, (IndexPanel.__proto__ || Object.getPrototypeOf(IndexPanel)).apply(this, arguments));
	  }
	
	  _createClass(IndexPanel, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Col,
	        { sm: 6 },
	        _react2.default.createElement(_reactBootstrap.Panel, this.props)
	      );
	    }
	  }]);
	
	  return IndexPanel;
	}(_react2.default.Component);
	
	IndexPanel.propTypes = {
	  bsStyle: _react.PropTypes.string,
	  header: _react.PropTypes.string,
	  children: _react.PropTypes.node
	};
	IndexPanel.defaultProps = {
	  bsStyle: "info",
	  children: _react2.default.createElement("span", null)
	};
	exports.default = IndexPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "IndexPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Account = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactSelect = __webpack_require__(591);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _Input = __webpack_require__(589);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Money = __webpack_require__(599);
	
	var _TransfersTable = __webpack_require__(602);
	
	var _reactRouter = __webpack_require__(183);
	
	var _IndexPanel = __webpack_require__(600);
	
	var _IndexPanel2 = _interopRequireDefault(_IndexPanel);
	
	var _modals = __webpack_require__(586);
	
	var Modals = _interopRequireWildcard(_modals);
	
	var _entities = __webpack_require__(327);
	
	var A = _interopRequireWildcard(_entities);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _blockedExecution = __webpack_require__(604);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 12/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import Spinner from "react-loader";
	
	
	var resetModals = {
	  showAccountModal: false,
	  unsaved: false
	};
	
	var Account = exports.Account = function (_React$Component) {
	  _inherits(Account, _React$Component);
	
	  function Account() {
	    var _ref;
	
	    _classCallCheck(this, Account);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, (_ref = Account.__proto__ || Object.getPrototypeOf(Account)).call.apply(_ref, [this].concat(args)));
	
	    _this.state = _extends({}, resetModals);
	
	    var ensureTransfers = _this.ensureTransfers.bind(_this);
	    var ensureAccounts = _this.ensureAccounts.bind(_this);
	
	    _this.ensureTransfers = (0, _blockedExecution.blocked)(ensureTransfers, true);
	    _this.ensureAccounts = (0, _blockedExecution.blocked)(ensureAccounts, true);
	    return _this;
	  }
	
	  _createClass(Account, [{
	    key: "ensureTransfers",
	    value: function ensureTransfers(props, cb) {
	      var forceFetch = !cb;
	      if (forceFetch) {
	        cb = props;
	        props = this.props;
	      }
	
	      var _props = props;
	      var dispatch = _props.dispatch;
	      var params = _props.params;
	      var transfers = _props.transfers;
	
	
	      if (!forceFetch && !params) {
	        return cb();
	      }
	
	      var accountId = params.accountId;
	
	      if (!forceFetch && (!accountId || transfers[accountId])) {
	        return cb();
	      }
	
	      dispatch(A.getTransfers(accountId)).then(cb, cb);
	    }
	  }, {
	    key: "ensureAccounts",
	    value: function ensureAccounts(props, cb) {
	      var forceFetch = !cb;
	      if (forceFetch) {
	        cb = props;
	        props = this.props;
	      }
	
	      var _props2 = props;
	      var dispatch = _props2.dispatch;
	      var params = _props2.params;
	      var data = _props2.data;
	
	
	      if (!forceFetch && (!params || !data || !data.accounts)) {
	        return cb();
	      }
	
	      var accountId = params.accountId;
	
	
	      if (!forceFetch && data.accounts.own && data.accounts.own.length && data.entities[accountId]) {
	        return cb();
	      }
	
	      if (!forceFetch && (!props.auth || !props.auth.user || !props.auth.user.attributes)) {
	        return cb();
	      }
	
	      var customerId = props.auth.user.attributes.id;
	
	
	      Promise.all([dispatch(A.fetchOwnAccounts(customerId)), dispatch(A.fetchAccount(accountId))]).then(cb, cb);
	    }
	
	    // shouldComponentUpdate(nextProps) {
	    //   return (nextProps.params.accountId !== this.props.params.accountId) || (nextProps.app !== this.props.app);
	    // }
	
	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.ensureAccounts(this.props);
	      this.ensureTransfers(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.ensureAccounts(nextProps);
	      this.ensureTransfers(nextProps);
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.setState(_extends({}, resetModals));
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, value) {
	      this.props.dispatch(A.makeTransferFormUpdate(key, value));
	    }
	  }, {
	    key: "initiateTransfer",
	    value: function initiateTransfer() {
	      var _this2 = this;
	
	      var _props3 = this.props;
	      var dispatch = _props3.dispatch;
	      var params = _props3.params;
	      var transfer = _props3.transfer;
	      var accountId = params.accountId;
	
	      dispatch(A.makeTransfer(accountId, transfer.form)).then(function () {
	        return new Promise(function (rs) {
	          setTimeout(function () {
	            _this2.ensureAccounts();
	            _this2.ensureTransfers();
	            rs();
	          }, 1500);
	        });
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var showAccountModal = this.state.showAccountModal;
	      var params = this.props.params;
	      var _props$ui = this.props.ui;
	      var loading = _props$ui.loading;
	      var errors = _props$ui.errors;
	      var _props$data = this.props.data;
	      var entities = _props$data.entities;
	      var accounts = _props$data.accounts;
	      var accountId = params.accountId;
	
	
	      var account = entities[accountId];
	
	      var spinnerResult = _react2.default.createElement(
	        "h2",
	        { key: "0" },
	        "Loading.."
	      );
	
	      if (loading) {
	        return spinnerResult;
	      }
	
	      if (!account) {
	        if (errors.length) {
	          return _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(
	              "h2",
	              null,
	              "Error loading specified account"
	            ),
	            _react2.default.createElement(
	              "div",
	              null,
	              "Return ",
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/" },
	                "Home"
	              ),
	              " to pick another"
	            )
	          );
	        } else {
	          return spinnerResult;
	        }
	      }
	
	      var transferTo = [].concat(accounts.own.reduce(function (memo, item, idx) {
	        var balance = item.balance;
	        var title = item.title;
	        var itemAccountId = item.accountId;
	
	
	        if (itemAccountId != accountId) {
	          memo.push({
	            value: itemAccountId,
	            label: title + ": " + (0, _Money.moneyText)(balance)
	          });
	        }
	        return memo;
	      }, []), accounts.other.reduce(function (memo, item, idx) {
	        if (!(item.id == accountId || item.accountId == accountId)) {
	          memo.push({
	            value: item.accountId || item.id,
	            label: "" + item.title + (item.description ? ': ' + item.description.substr(0, 10) : '')
	          });
	        }
	        return memo;
	      }, []));
	
	      var titleRaw = account.title;
	      var descriptionRaw = account.description;
	      var balance = account.balance;
	
	
	      var title = titleRaw || '—';
	      var description = descriptionRaw || '—';
	
	      var transferDisabled = this.props.transfer.loading;
	
	      return _react2.default.createElement(
	        "div",
	        { key: accountId },
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          null,
	          "Account",
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            { pullRight: true },
	            _react2.default.createElement(
	              _reactBootstrap.ButtonGroup,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: "link", onClick: null, disabled: true },
	                "Edit"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _IndexPanel2.default,
	            { header: "Account Info:" },
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "Title:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  title
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "Balance:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  _react2.default.createElement(_Money.Money, { amount: balance })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              null,
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4 },
	                "Description:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8 },
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  description
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12 },
	            _react2.default.createElement(
	              "h3",
	              null,
	              "You can transfer money to accounts:"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 4 },
	            _react2.default.createElement(
	              "label",
	              null,
	              "Transfer To:"
	            ),
	            _react2.default.createElement(_reactSelect2.default, {
	              value: (0, _readProp2.default)(this.props.transfer, 'form.account', ''),
	              clearable: true,
	              options: transferTo,
	              disabled: transferDisabled,
	              onChange: this.handleInput.bind(this, 'account')
	            })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 3 },
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "",
	              label: "Amount:",
	              placeholder: "Amount",
	              name: "amount",
	              addonBefore: _react2.default.createElement(BS.Glyphicon, { glyph: "usd" }),
	              addonAfter: ".00",
	              disabled: transferDisabled,
	              value: (0, _readProp2.default)(this.props.transfer, 'form.amount', ''),
	              errors: (0, _readProp2.default)(this.props.transfer, 'errors.amount', []) || [],
	              onChange: this.handleInput.bind(this, 'amount')
	            })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 3 },
	            _react2.default.createElement(_Input2.default, { type: "textarea",
	              className: "",
	              label: "Description:",
	              placeholder: "Description",
	              name: "description",
	              disabled: transferDisabled,
	              value: (0, _readProp2.default)(this.props.transfer, 'form.description', '') || '',
	              errors: (0, _readProp2.default)(this.props.transfer, 'errors.description', []) || [],
	              onChange: this.handleInput.bind(this, 'description')
	            })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 2 },
	            _react2.default.createElement("br", null),
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { bsStyle: "primary",
	                disabled: transferDisabled,
	                onClick: !transferDisabled && this.initiateTransfer.bind(this) },
	              "Transfer"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12 },
	            _react2.default.createElement(
	              "h3",
	              null,
	              "Transfer History:"
	            )
	          )
	        ),
	        _react2.default.createElement(_TransfersTable.TransfersTable, { forAccount: accountId, transfers: this.props.transfers[accountId] }),
	        _react2.default.createElement(Modals.NewAccountModal, { show: showAccountModal,
	          action: null,
	          account: { loading: true },
	          onHide: this.close.bind(this),
	          key: 0 })
	      );
	    }
	  }]);
	
	  return Account;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref2) {
	  var app = _ref2.app;
	  var router = _ref2.router;
	  return {
	    app: app,
	    auth: app.auth,
	    data: app.data,
	    transfers: app.data.transfers,
	    ui: app.ui.account,
	    transfer: app.ui.transfersMake,
	    router: router
	  };
	})(Account);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Account.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TransfersTable = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLoader = __webpack_require__(584);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactTimeago = __webpack_require__(603);
	
	var _reactTimeago2 = _interopRequireDefault(_reactTimeago);
	
	var _Money = __webpack_require__(599);
	
	var _AccountInfo = __webpack_require__(583);
	
	var _AccountInfo2 = _interopRequireDefault(_AccountInfo);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 3/22/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var TransfersTable = exports.TransfersTable = function (_React$Component) {
	  _inherits(TransfersTable, _React$Component);
	
	  function TransfersTable() {
	    _classCallCheck(this, TransfersTable);
	
	    return _possibleConstructorReturn(this, (TransfersTable.__proto__ || Object.getPrototypeOf(TransfersTable)).apply(this, arguments));
	  }
	
	  _createClass(TransfersTable, [{
	    key: "preprocessItems",
	    value: function preprocessItems(input, currentAccountId) {
	      return input.sort(function (a, b) {
	        return a.date - b.date;
	      }).filter(function (_ref) {
	        var entryType = _ref.entryType;
	        var toAccountId = _ref.toAccountId;
	        var fromAccountId = _ref.fromAccountId;
	        return entryType !== 'transaction' || fromAccountId === currentAccountId || toAccountId === currentAccountId;
	      }).reduce(function (_ref2, v) {
	        var items = _ref2.items;
	        var balance = _ref2.balance;
	
	        if (v.entryType == 'account') {
	          balance = v.initialBalance;
	        } else if (v.entryType == 'transaction' && v.status !== 'FAILED_DUE_TO_INSUFFICIENT_FUNDS') {
	          var isOriginating = v.fromAccountId == currentAccountId;
	          balance += (isOriginating ? -1 : 1) * v.amount;
	        }
	        v.balance = balance;
	        items.push(v);
	        return { items: items, balance: balance };
	      }, {
	        items: [],
	        balance: 0
	      }).items.sort(function (a, b) {
	        return -(a.date - b.date);
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var transfers = _props.transfers;
	      var forAccount = _props.forAccount;
	
	      var _ref3 = transfers || {};
	
	      var loading = _ref3.loading;
	      var data = _ref3.data;
	      var errors = _ref3.errors;
	
	
	      if (!transfers || loading) {
	        return _react2.default.createElement(
	          "h2",
	          null,
	          _react2.default.createElement(_reactLoader2.default, { loaded: false }),
	          " Loading.."
	        );
	      }
	
	      if (Object.keys(errors).length) {
	        return _react2.default.createElement(
	          "div",
	          { className: "text-danger" },
	          "Errors.."
	        );
	      }
	
	      var currentAccountId = forAccount;
	
	      var transfersMarkup = data.length ? this.preprocessItems(data, currentAccountId).map(function (_ref4) {
	        var entryType = _ref4.entryType;
	        var amount = _ref4.amount;
	        var fromAccountId = _ref4.fromAccountId;
	        var toAccountId = _ref4.toAccountId;
	        var transactionId = _ref4.transactionId;
	        var _ref4$description = _ref4.description;
	        var description = _ref4$description === undefined ? '—' : _ref4$description;
	        var _ref4$date = _ref4.date;
	        var date = _ref4$date === undefined ? null : _ref4$date;
	        var _ref4$status = _ref4.status;
	        var status = _ref4$status === undefined ? '—' : _ref4$status;
	        var balance = _ref4.balance;
	        var _ref4$initialBalance = _ref4.initialBalance;
	        var initialBalance = _ref4$initialBalance === undefined ? null : _ref4$initialBalance;
	
	
	        var transferTimestamp = new Date(date);
	        var timeAgoTitle = transferTimestamp.toLocaleDateString() + ' ' + transferTimestamp.toLocaleTimeString();
	
	        if (entryType == 'account') {
	          return _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              _react2.default.createElement(_reactTimeago2.default, { date: date, title: timeAgoTitle })
	            ),
	            _react2.default.createElement(
	              "td",
	              { colSpan: "3" },
	              "Account created"
	            ),
	            _react2.default.createElement(
	              "td",
	              null,
	              _react2.default.createElement(_Money.Money, { amount: initialBalance })
	            ),
	            _react2.default.createElement(
	              "td",
	              null,
	              description
	            ),
	            _react2.default.createElement(
	              "td",
	              null,
	              status || '—'
	            )
	          );
	        }
	
	        var isOriginating = fromAccountId == currentAccountId;
	        var directionMarkup = isOriginating ? 'Debit' : 'Credit';
	        var counterAccountMarkup = isOriginating ? _react2.default.createElement(_AccountInfo2.default, { accountId: toAccountId }) : _react2.default.createElement(_AccountInfo2.default, { accountId: fromAccountId });
	
	        return _react2.default.createElement(
	          "tr",
	          { key: transactionId },
	          _react2.default.createElement(
	            "td",
	            null,
	            _react2.default.createElement(_reactTimeago2.default, { date: date, title: timeAgoTitle })
	          ),
	          _react2.default.createElement(
	            "td",
	            null,
	            directionMarkup
	          ),
	          _react2.default.createElement(
	            "td",
	            null,
	            counterAccountMarkup
	          ),
	          _react2.default.createElement(
	            "td",
	            null,
	            _react2.default.createElement(_Money.Money, { amount: amount })
	          ),
	          _react2.default.createElement(
	            "td",
	            null,
	            _react2.default.createElement(_Money.Money, { amount: balance })
	          ),
	          _react2.default.createElement(
	            "td",
	            null,
	            description || '—'
	          ),
	          _react2.default.createElement(
	            "td",
	            null,
	            status || '—'
	          )
	        );
	      }) : _react2.default.createElement(
	        "tr",
	        null,
	        _react2.default.createElement(
	          "td",
	          { colSpan: 6 },
	          "No transfers for this account just yet."
	        )
	      );
	
	      return _react2.default.createElement(
	        BS.Table,
	        { striped: true, bordered: true, condensed: true, hover: true },
	        _react2.default.createElement(
	          "thead",
	          null,
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "th",
	              null,
	              "Date"
	            ),
	            _react2.default.createElement(
	              "th",
	              null,
	              "Type"
	            ),
	            _react2.default.createElement(
	              "th",
	              null,
	              "Other Account"
	            ),
	            _react2.default.createElement(
	              "th",
	              null,
	              "Amount"
	            ),
	            _react2.default.createElement(
	              "th",
	              null,
	              "Balance"
	            ),
	            _react2.default.createElement(
	              "th",
	              null,
	              "Description"
	            ),
	            _react2.default.createElement(
	              "th",
	              null,
	              "Status"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "tbody",
	          null,
	          transfersMarkup
	        )
	      );
	    }
	  }]);
	
	  return TransfersTable;
	}(_react2.default.Component);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TransfersTable.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Created by andrew on 8/17/16.
	 */
	
	var blocked = exports.blocked = function blocked(fn, useCb) {
	  var isBlocked = false;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (isBlocked) {
	      return;
	    }
	    //noinspection JSUnusedAssignment
	    isBlocked = true;
	    var cb = function cb() {
	      isBlocked = false;
	    };
	    var result = useCb ? fn.apply(undefined, _toConsumableArray(args.concat([cb]))) : fn.apply(undefined, args);
	    if (!useCb) {
	      cb();
	    }
	    return result;
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "blockedExecution.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignIn = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reduxRouter = __webpack_require__(246);
	
	var _EmailSignInForm = __webpack_require__(606);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 12/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var SignIn = exports.SignIn = function (_React$Component) {
	  _inherits(SignIn, _React$Component);
	
	  function SignIn() {
	    _classCallCheck(this, SignIn);
	
	    return _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).apply(this, arguments));
	  }
	
	  _createClass(SignIn, [{
	    key: "checkRedirect",
	    value: function checkRedirect(props) {
	
	      var isSignedIn = (0, _readProp2.default)(props.auth, 'user.isSignedIn');
	      if (isSignedIn) {
	
	        var nextLocation = (0, _readProp2.default)(props.location, 'query.next');
	        props.dispatch((0, _reduxRouter.pushState)(null, nextLocation));
	
	        //// redirect to login and add next param so we can redirect again after login
	        //const redirectAfterLogin = this.props.location.pathname;
	        //this.props.dispatch(pushState(null, `/signin?next=${redirectAfterLogin}`));
	      }
	    }
	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.checkRedirect(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.checkRedirect(nextProps);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      return _react2.default.createElement(
	        BS.Well,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          null,
	          "Sign In"
	        ),
	        _react2.default.createElement(_EmailSignInForm.EmailSignInForm, this.props)
	      );
	    }
	  }]);
	
	  return SignIn;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var routes = _ref.routes;
	  var app = _ref.app;
	  return {
	    //dispatch,
	    routes: routes,
	    auth: app.auth
	  };
	})(SignIn);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SignIn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EmailSignInForm = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _Input = __webpack_require__(589);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonLoader = __webpack_require__(588);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _AuxErrorLabel = __webpack_require__(590);
	
	var _AuxErrorLabel2 = _interopRequireDefault(_AuxErrorLabel);
	
	var _signIn = __webpack_require__(607);
	
	var AS = _interopRequireWildcard(_signIn);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 15/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var formValidation = function formValidation(payload) {
	  return ['email', 'password'].reduce(function (memo, prop) {
	    var result = [];
	    var value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');
	
	    switch (prop) {
	      case 'email':
	      case 'password':
	        if (/^$/.test(value)) {
	          result.push('required');
	        }
	    }
	
	    if (result.length) {
	      memo[prop] = result;
	      memo.hasErrors = true;
	    }
	    return memo;
	  }, {});
	};
	
	var EmailSignInForm = exports.EmailSignInForm = function (_React$Component) {
	  _inherits(EmailSignInForm, _React$Component);
	
	  function EmailSignInForm() {
	    _classCallCheck(this, EmailSignInForm);
	
	    return _possibleConstructorReturn(this, (EmailSignInForm.__proto__ || Object.getPrototypeOf(EmailSignInForm)).apply(this, arguments));
	  }
	
	  _createClass(EmailSignInForm, [{
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch(AS.emailSignInFormUpdate(key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      var formData = (0, _readProp2.default)(this.props.auth, 'signIn.form');
	
	      var validationErrors = formValidation(formData);
	      if (validationErrors.hasErrors) {
	        this.props.dispatch(AS.emailSignInError(validationErrors));
	        return;
	      }
	
	      this.props.dispatch(AS.emailSignIn(formData));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      try {
	        var disabled = this.props.auth.user.isSignedIn || this.props.auth.signIn.loading;
	
	        //const error = read(this.props.auth, 'signIn.errors.email', null);
	        var formErrors = (0, _readProp2.default)(this.props.auth, 'signIn.errors.errors', '');
	
	        return _react2.default.createElement(
	          "form",
	          { className: "redux-auth email-sign-in-form clearfix",
	            onSubmit: this.handleSubmit.bind(this) },
	          _react2.default.createElement(
	            "div",
	            { className: "form-group", style: {
	                display: formErrors ? 'block' : 'none'
	              } },
	            _react2.default.createElement(_AuxErrorLabel2.default, {
	              label: "Form:",
	              errors: formErrors.length ? [formErrors] : []
	            })
	          ),
	          _react2.default.createElement(_Input2.default, _extends({ type: "text",
	            className: "email-sign-in-email",
	            label: "Email",
	            placeholder: "Email",
	            name: "email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signIn.form.email', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signIn.errors.email', []),
	            onChange: this.handleInput.bind(this, "email")
	          }, this.props.inputProps.email)),
	          _react2.default.createElement(_Input2.default, _extends({ type: "password",
	            className: "password-sign-in-email",
	            label: "Password",
	            placeholder: "Password",
	            name: "password",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signIn.form.password', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signIn.errors.password', []),
	            onChange: this.handleInput.bind(this, "password")
	          }, this.props.inputProps.password)),
	          _react2.default.createElement(
	            _ButtonLoader2.default,
	            _extends({ loading: (0, _readProp2.default)(this.props.auth, 'signIn.loading', false),
	              type: "submit",
	              icon: _react2.default.createElement(BS.Glyphicon, { glyph: "log-in" }),
	              className: "email-sign-in-submit pull-right",
	              disabled: disabled,
	              onClick: this.handleSubmit.bind(this)
	            }, this.props.inputProps.submit),
	            "Sign In"
	          )
	        );
	      } catch (ex) {
	        console.error('Render exception: ', ex);
	        return [' ERROR '];
	      }
	    }
	  }]);
	
	  return EmailSignInForm;
	}(_react2.default.Component);
	
	EmailSignInForm.propTypes = {
	  endpoint: _react.PropTypes.string,
	  inputProps: _react.PropTypes.shape({
	    email: _react.PropTypes.object,
	    password: _react.PropTypes.object,
	    submit: _react.PropTypes.object
	  })
	};
	
	EmailSignInForm.defaultProps = {
	  inputProps: {
	    email: {},
	    password: {},
	    submit: {}
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "EmailSignInForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emailSignInError = exports.emailSignInComplete = exports.emailSignInStart = exports.emailSignInFormUpdate = undefined;
	exports.emailSignIn = emailSignIn;
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(316);
	
	var _sessionStorage = __webpack_require__(317);
	
	var _entities = __webpack_require__(327);
	
	var _api = __webpack_require__(321);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emailSignInFormUpdate = exports.emailSignInFormUpdate = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_IN_FORM_UPDATE, 'key', 'value'); /**
	                                                                                                                                                               * Created by andrew on 26/02/16.
	                                                                                                                                                               */
	var emailSignInStart = exports.emailSignInStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_IN_START);
	var emailSignInComplete = exports.emailSignInComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE, 'user');
	var emailSignInError = exports.emailSignInError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_IN_ERROR, 'error');
	
	function emailSignIn(body) {
	  return function (dispatch) {
	
	    dispatch(emailSignInStart());
	
	    return (0, _api.apiSignIn)(body).then(function () {
	      var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var id = data.id;
	
	      if (id) {
	        dispatch((0, _entities.entityReceived)(id, data));
	      }
	      return data;
	    }).then(function (user) {
	      (0, _sessionStorage.persistUserData)(user);
	      dispatch(emailSignInComplete(user));
	    }).catch(function (errors) {
	      // revert endpoint key to what it was before failed request
	      //setCurrentEndpointKey(prevEndpointKey);
	      //dispatch(storeCurrentEndpointKey(prevEndpointKey));
	      return dispatch(emailSignInError(errors));
	    });
	  };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signIn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignUp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reduxRouter = __webpack_require__(246);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRouter = __webpack_require__(183);
	
	var _EmailSignUpForm = __webpack_require__(609);
	
	var _EmailSignUpForm2 = _interopRequireDefault(_EmailSignUpForm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 12/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	//import { PageHeader } from "react-bootstrap";
	
	
	//import { EmailSignUpForm } from "redux-auth/bootstrap-theme"
	
	
	var SignUp = exports.SignUp = function (_React$Component) {
	  _inherits(SignUp, _React$Component);
	
	  function SignUp() {
	    _classCallCheck(this, SignUp);
	
	    return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
	  }
	
	  _createClass(SignUp, [{
	    key: "checkRedirect",
	    value: function checkRedirect(props) {
	      if (props.isAuthenticated) {
	        // redirect to login and add next param so we can redirect again after login
	        // const redirectAfterLogin = props.location.pathname;
	        props.dispatch((0, _reduxRouter.pushState)(null, "/"));
	      }
	    }
	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.checkRedirect(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.checkRedirect(nextProps);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        BS.Well,
	        null,
	        _react2.default.createElement(
	          BS.PageHeader,
	          null,
	          "Register"
	        ),
	        _react2.default.createElement(_EmailSignUpForm2.default, null)
	      );
	    }
	  }]);
	
	  return SignUp;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var routes = _ref.routes;
	  var app = _ref.app;
	  return { routes: routes,
	    isAuthenticated: (0, _readProp2.default)(app, 'auth.user.isSignedIn', false)
	  };
	})(SignUp);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SignUp.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(170);
	
	var _reactBootstrap = __webpack_require__(334);
	
	var _Input = __webpack_require__(589);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonLoader = __webpack_require__(588);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _IndexPanel = __webpack_require__(600);
	
	var _IndexPanel2 = _interopRequireDefault(_IndexPanel);
	
	var _AuxErrorLabel = __webpack_require__(590);
	
	var _AuxErrorLabel2 = _interopRequireDefault(_AuxErrorLabel);
	
	var _formToPayloadMappers = __webpack_require__(610);
	
	var _readProp = __webpack_require__(332);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _signUp = __webpack_require__(611);
	
	var AS = _interopRequireWildcard(_signUp);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andrew on 15/02/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var formValidation = function formValidation(payload) {
	  return ['fname', 'lname', 'email', 'password', 'passwordConfirm', 'ssn', 'phoneNumber', 'address1', 'address2', 'city', 'state', 'zip'].reduce(function (memo, prop) {
	    var result = [];
	    var value = (payload[prop] || '').replace(/(^\s+)|(\s+$)/g, '');
	
	    switch (prop) {
	      case 'fname':
	      case 'lname':
	      case 'email':
	      case 'ssn':
	      case 'password':
	      case 'passwordConfirm':
	        if (/^$/.test(value)) {
	          result.push('required');
	        }
	    }
	
	    switch (prop) {
	      case 'passwordConfirm':
	        if (value != payload['password']) {
	          result.push('need to be equal to password');
	        }
	    }
	
	    if (result.length) {
	      memo[prop] = result;
	      memo.hasErrors = true;
	    }
	    return memo;
	  }, {});
	};
	
	var EmailSignUpForm = function (_React$Component) {
	  _inherits(EmailSignUpForm, _React$Component);
	
	  function EmailSignUpForm() {
	    _classCallCheck(this, EmailSignUpForm);
	
	    return _possibleConstructorReturn(this, (EmailSignUpForm.__proto__ || Object.getPrototypeOf(EmailSignUpForm)).apply(this, arguments));
	  }
	
	  _createClass(EmailSignUpForm, [{
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch(AS.emailSignUpFormUpdate(key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      var formData = (0, _readProp2.default)(this.props.auth, 'signUp.form');
	      var validationErrors = formValidation(formData);
	      if (validationErrors.hasErrors) {
	        this.props.dispatch(AS.emailSignUpError(validationErrors));
	        return;
	      }
	
	      this.props.dispatch(AS.emailSignUp((0, _formToPayloadMappers.customerInfoMap)(formData)));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      var disabled = this.props.auth.user.isSignedIn || this.props.auth.signUp.loading;
	
	      var formErrors = (0, _readProp2.default)(this.props.auth, 'signUp.errors.errors', '');
	
	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth email-sign-up-form clearfix",
	          onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(
	          "div",
	          { className: "form-group", style: {
	              display: formErrors ? 'block' : 'none'
	            } },
	          _react2.default.createElement(_AuxErrorLabel2.default, {
	            label: "Form:",
	            errors: formErrors.length ? [formErrors] : []
	          })
	        ),
	        _react2.default.createElement(
	          _IndexPanel2.default,
	          { header: "basic" },
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "First name",
	            placeholder: "First name",
	            className: "email-sign-up-email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.fname', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.fname', []),
	            onChange: this.handleInput.bind(this, "fname")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Last name",
	            placeholder: "Last name",
	            className: "email-sign-up-email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.lname', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.lname', []),
	            onChange: this.handleInput.bind(this, "lname")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Email",
	            placeholder: "Email",
	            className: "email-sign-up-email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.email', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.email', []),
	            onChange: this.handleInput.bind(this, "email")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "password",
	            className: "password-sign-in-email",
	            label: "Password",
	            placeholder: "Password",
	            name: "password",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.password', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.password', []),
	            onChange: this.handleInput.bind(this, "password")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "password",
	            className: "password-sign-in-email",
	            label: "Confirm password",
	            placeholder: "Confirm password",
	            name: "password-confirm",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.passwordConfirm', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.passwordConfirm', []),
	            onChange: this.handleInput.bind(this, "passwordConfirm")
	          })
	        ),
	        _react2.default.createElement(
	          _IndexPanel2.default,
	          { header: "advanced" },
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "SSN",
	            placeholder: "SSN",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.ssn', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.ssn', []),
	            onChange: this.handleInput.bind(this, "ssn")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Phone",
	            placeholder: "Phone",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.phoneNumber', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.phoneNumber', []),
	            onChange: this.handleInput.bind(this, "phoneNumber")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Address 1",
	            placeholder: "Address 1",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.address1', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.address1', []),
	            onChange: this.handleInput.bind(this, "address1")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Address 2",
	            placeholder: "Address 2",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.address2', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.address2', []),
	            onChange: this.handleInput.bind(this, "address2")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "City",
	            placeholder: "City",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.city', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.city', {}),
	            onChange: this.handleInput.bind(this, "city")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "State",
	            placeholder: "State",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.state', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.state', []),
	            onChange: this.handleInput.bind(this, "state")
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "ZIP",
	            placeholder: "ZIP",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.zip', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.zip', []),
	            onChange: this.handleInput.bind(this, "zip")
	          })
	        ),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          { loading: (0, _readProp2.default)(this.props.auth, 'signUp.loading', false),
	            type: "submit",
	            className: "email-sign-up-submit pull-right",
	            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "send" }),
	            disabled: disabled,
	            onClick: this.handleSubmit.bind(this)
	          },
	          "Sign Up"
	        )
	      );
	    }
	  }]);
	
	  return EmailSignUpForm;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var app = _ref.app;
	  return { auth: app.auth };
	})(EmailSignUpForm);
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "EmailSignUpForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by andrew on 21/02/16.
	 */
	var customerInfoMap = exports.customerInfoMap = function customerInfoMap(_ref) {
	  var ssn = _ref.ssn;
	  var password = _ref.password;
	  var address1 = _ref.address1;
	  var address2 = _ref.address2;
	  var city = _ref.city;
	  var email = _ref.email;
	  var fname = _ref.fname;
	  var lname = _ref.lname;
	  var phoneNumber = _ref.phoneNumber;
	  var state = _ref.state;
	  var zip = _ref.zip;
	  return {
	    "name": {
	      "firstName": fname,
	      "lastName": lname
	    },
	    password: password,
	    email: email,
	    ssn: ssn,
	    "phoneNumber": phoneNumber,
	    "address": {
	      "street1": address1,
	      "street2": address2,
	      city: city,
	      state: state,
	      "zipCode": zip
	    }
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "formToPayloadMappers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emailSignUpError = exports.emailSignUpComplete = exports.emailSignUpStart = exports.emailSignUpFormUpdate = undefined;
	exports.emailSignUp = emailSignUp;
	
	var _reduxRouter = __webpack_require__(246);
	
	var _ACTION_TYPES = __webpack_require__(295);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(316);
	
	var _api = __webpack_require__(321);
	
	var _signIn = __webpack_require__(607);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emailSignUpFormUpdate = exports.emailSignUpFormUpdate = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_UP_FORM_UPDATE, 'key', 'value'); /**
	                                                                                                                                                               * Created by andrew on 11/03/16.
	                                                                                                                                                               */
	var emailSignUpStart = exports.emailSignUpStart = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_UP_START);
	var emailSignUpComplete = exports.emailSignUpComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_UP_COMPLETE, 'user');
	var emailSignUpError = exports.emailSignUpError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_UP_ERROR, 'error');
	
	function emailSignUp(body) {
	  return function (dispatch) {
	    dispatch(emailSignUpStart());
	
	    return (0, _api.apiSignUp)(body).then(function (_ref) {
	      var data = _ref.data;
	
	      dispatch(emailSignUpComplete(data));
	      var email = body.email;
	
	      dispatch((0, _signIn.emailSignInFormUpdate)('email', email));
	      dispatch((0, _reduxRouter.push)('/signin'));
	    }).catch(function (_ref2) {
	      var errors = _ref2.errors;
	
	      dispatch(emailSignUpError({
	        errors: errors
	      }));
	    });
	  };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signUp.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});
//# sourceMappingURL=app.30980d75b78111237ddf.js.map