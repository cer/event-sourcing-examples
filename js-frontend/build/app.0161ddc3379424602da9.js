webpackJsonp([0,3],[
/* 0 */
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
	var reactRoot = window.document.getElementById("root"); /**
	                                                         * Created by andrew on 12/02/16.
	                                                         */
	
	(0, _app.initialize)().then(function (_ref) {
	  var provider = _ref.provider;
	
	  _reactDom2.default.render(provider, reactRoot);
	});
	
	/**
	 * Detect whether the server-side render has been discarded due to an invalid checksum.
	 */
	if (process.env.NODE_ENV !== "production") {
	  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes || !reactRoot.firstChild.attributes["data-react-checksum"]) {
	    console.error("Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.");
	  }
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "client.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/app.js"; /**
	                                                                                                        * Created by andrew on 12/02/16.
	                                                                                                        */
	
	//import demoButtons from "./reducers/request-test-buttons";
	//import demoUi from "./reducers/demo-ui";
	
	exports.initialize = initialize;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(187);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reduxThunk = __webpack_require__(208);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(209);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reactRouter = __webpack_require__(210);
	
	var _reduxRouter = __webpack_require__(273);
	
	var _reducers = __webpack_require__(289);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _configure = __webpack_require__(387);
	
	var _history = __webpack_require__(417);
	
	var _server = __webpack_require__(444);
	
	var _AuthComponent = __webpack_require__(447);
	
	var _Container = __webpack_require__(450);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _MyAccounts = __webpack_require__(699);
	
	var _MyAccounts2 = _interopRequireDefault(_MyAccounts);
	
	var _Account = __webpack_require__(720);
	
	var _Account2 = _interopRequireDefault(_Account);
	
	var _SignIn = __webpack_require__(725);
	
	var _SignIn2 = _interopRequireDefault(_SignIn);
	
	var _SignUp = __webpack_require__(728);
	
	var _SignUp2 = _interopRequireDefault(_SignUp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import GlobalComponents from "./views/partials/GlobalComponents";
	
	var App = function (_React$Component) {
	  (0, _inherits3.default)(App, _React$Component);
	
	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(App, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _Container2.default,
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 36
	          }
	        },
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
	
	  var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: "/", component: App, __source: {
	        fileName: _jsxFileName,
	        lineNumber: 50
	      }
	    },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: (0, _AuthComponent.requireAuthentication)(_MyAccounts2.default), __source: {
	        fileName: _jsxFileName,
	        lineNumber: 51
	      }
	    }),
	    _react2.default.createElement(_reactRouter.Route, { path: "signin", component: _SignIn2.default, __source: {
	        fileName: _jsxFileName,
	        lineNumber: 52
	      }
	    }),
	    _react2.default.createElement(_reactRouter.Route, { path: "register", component: _SignUp2.default, __source: {
	        fileName: _jsxFileName,
	        lineNumber: 53
	      }
	    }),
	    _react2.default.createElement(_reactRouter.Route, { path: "account/:accountId", component: (0, _AuthComponent.requireAuthentication)(_Account2.default), __source: {
	        fileName: _jsxFileName,
	        lineNumber: 54
	      }
	    })
	  );
	
	  // these methods will differ from server to client
	  var reduxReactRouter = isServer ? _server.reduxReactRouter : _reduxRouter.reduxReactRouter;
	  var createHistoryMethod = isServer ? _history.createMemoryHistory : _history.createHashHistory;
	
	  // create the redux store
	  var store = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()), reduxReactRouter({
	    routes: routes,
	    createHistory: createHistoryMethod
	  }))(_redux.createStore)(reducer);
	
	  /**
	   * The React Router 1.0 routes for both the server and the client.
	   */
	  return store.dispatch((0, _configure.configure)([{
	    default: {
	      //apiUrl: '/',
	      emailSignInPath: '/login',
	      customersPath: '/customers',
	      currentUserPath: '/user',
	      accountsPath: '/accounts',
	      transfersPath: '/transfers'
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
	      return _react2.default.createElement("noscript", {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 120
	        }
	      });
	    }
	
	    console.log("redirect path: " + redirectPath);
	
	    return {
	      blank: blank,
	      store: store,
	      redirectPath: redirectPath,
	      provider: _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store, key: "provider", __source: {
	            fileName: _jsxFileName,
	            lineNumber: 130
	          }
	        },
	        _react2.default.createElement(_reduxRouter.ReduxRouter, { children: routes, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 131
	          }
	        })
	      )
	    };
	  });
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(162);
	module.exports = __webpack_require__(168).Object.getPrototypeOf;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(163);
	
	__webpack_require__(165)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(164);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(166)
	  , core    = __webpack_require__(168)
	  , fails   = __webpack_require__(171);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(167)
	  , core      = __webpack_require__(168)
	  , ctx       = __webpack_require__(169)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 167 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 168 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(170);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 172 */
/***/ function(module, exports) {

	"use strict";
	
	function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }
	
	exports.default = function (instance, Constructor) {
	  if (!_instanceof(instance, Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(174);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(175), __esModule: true };

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(176);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";
	
	function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	};
	
	exports.__esModule = true;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _setPrototypeOf = __webpack_require__(179);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(185);
	
	var _create2 = _interopRequireDefault(_create);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(180), __esModule: true };

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	module.exports = __webpack_require__(168).Object.setPrototypeOf;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(166);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(182).set});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(176).getDesc
	  , isObject = __webpack_require__(183)
	  , anObject = __webpack_require__(184);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(169)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(183);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(186), __esModule: true };

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(176);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(187);
	
	var _auth = __webpack_require__(290);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _data = __webpack_require__(373);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _ui = __webpack_require__(382);
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(187);
	
	var _configure = __webpack_require__(291);
	
	var _authenticate = __webpack_require__(367);
	
	var _signin = __webpack_require__(368);
	
	var _signup = __webpack_require__(370);
	
	var _signout = __webpack_require__(371);
	
	var _user = __webpack_require__(372);
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configReducer = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createDataReducer = __webpack_require__(357);
	
	var _createDataReducer2 = _interopRequireDefault(_createDataReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 25/02/16.
	 */
	var configReducer = exports.configReducer = (0, _createDataReducer2.default)([_ACTION_TYPES2.default.AUTH.CONFIGURE_START, _ACTION_TYPES2.default.AUTH.CONFIGURE_COMPLETE, _ACTION_TYPES2.default.AUTH.CONFIGURE_ERROR], 'config', 'config', function () {
	  var c = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  return (0, _extends3.default)({}, c);
	});
	//
	// const configInitialState = {
	//   loading: true,
	//   errors: null,
	//   config: null
	// };
	//
	// export const configReducer = (state = {...configInitialState}, action) => {
	//   switch(action.type) {
	//     case T.AUTH.CONFIGURE_START:
	//     {
	//       return {
	//         ...state,
	//         loading: true
	//       };
	//     }
	//
	//     case T.AUTH.CONFIGURE_COMPLETE: {
	//       const { config } = action;
	//       return {
	//         ...state,
	//         loading: false,
	//         errors: null,
	//         config
	//       };
	//     }
	//
	//     case T.AUTH.CONFIGURE_ERROR:
	//     {
	//       const { errors } = action;
	//       return {
	//         ...state,
	//         loading: false,
	//         errors
	//       };
	//     }
	//
	//     default:
	//       return state;
	//   }
	// };

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configure.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(293)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(294), __esModule: true };

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(295);
	module.exports = __webpack_require__(168).Object.assign;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(166);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(296)});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(176)
	  , toObject = __webpack_require__(163)
	  , IObject  = __webpack_require__(297);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(171)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(298);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineActionTypes = __webpack_require__(300);
	
	exports.default = (0, _defineActionTypes.defineActionType)({
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ACTION_TYPES.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineActionType = exports.TODO_DEFINE = undefined;
	
	var _getIterator2 = __webpack_require__(301);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _set = __webpack_require__(327);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _slicedToArray2 = __webpack_require__(342);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _entries = __webpack_require__(346);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _symbol = __webpack_require__(350);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	exports.default = defineActionTypes;
	
	var _invariant = __webpack_require__(207);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TODO_DEFINE = exports.TODO_DEFINE = (0, _symbol2.default)('Define property');
	
	var defineActionType = exports.defineActionType = function defineActionType(obj) {
	  var result = (0, _entries2.default)(obj).reduce(function (memo, _ref) {
	    var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
	
	    var namespace = _ref2[0];
	    var value = _ref2[1];
	
	    var types = [];
	    var namespaceTypes = {};
	
	    if (typeof value == 'string') {
	      types = value.trim().split(/\s+/);
	    } else {
	      types = (0, _entries2.default)(value).filter(function (_ref3) {
	        var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
	
	        var key = _ref4[0];
	        var needDefinition = _ref4[1];
	        return needDefinition === TODO_DEFINE;
	      }).map(function (_ref5) {
	        var _ref6 = (0, _slicedToArray3.default)(_ref5, 1);
	
	        var key = _ref6[0];
	        return key;
	      });
	    }
	
	    (0, _invariant2.default)(/^[A-Z][A-Z0-9_]*$/.test(namespace), "Namespace names must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character.");
	
	    (0, _invariant2.default)(new _set2.default(types).size == types.length, "There must be no repeated action types passed to defineActionTypes");
	
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
	    for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(obj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = (0, _slicedToArray3.default)(_step.value, 2);
	
	      var namespace = _step$value[0];
	      var value = _step$value[1];
	
	      var types = value.trim().split(/\s+/);
	      var namespaceTypes = {};
	
	      (0, _invariant2.default)(/^[A-Z][A-Z0-9_]*$/.test(namespace), "Namespace names must start with a capital letter, and be composed entirely of capital letters, numbers, and the underscore character.");
	      (0, _invariant2.default)(new _set2.default(types).size == types.length, "There must be no repeated action types passed to defineActionTypes");
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(types), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(302), __esModule: true };

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(303);
	__webpack_require__(321);
	module.exports = __webpack_require__(324);

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(304);
	var Iterators = __webpack_require__(307);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(305)
	  , step             = __webpack_require__(306)
	  , Iterators        = __webpack_require__(307)
	  , toIObject        = __webpack_require__(308);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(309)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 305 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(297)
	  , defined = __webpack_require__(164);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(310)
	  , $export        = __webpack_require__(166)
	  , redefine       = __webpack_require__(311)
	  , hide           = __webpack_require__(312)
	  , has            = __webpack_require__(315)
	  , Iterators      = __webpack_require__(307)
	  , $iterCreate    = __webpack_require__(316)
	  , setToStringTag = __webpack_require__(317)
	  , getProto       = __webpack_require__(176).getProto
	  , ITERATOR       = __webpack_require__(318)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(312);

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(176)
	  , createDesc = __webpack_require__(313);
	module.exports = __webpack_require__(314) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(171)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 315 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(176)
	  , descriptor     = __webpack_require__(313)
	  , setToStringTag = __webpack_require__(317)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(312)(IteratorPrototype, __webpack_require__(318)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(176).setDesc
	  , has = __webpack_require__(315)
	  , TAG = __webpack_require__(318)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(319)('wks')
	  , uid    = __webpack_require__(320)
	  , Symbol = __webpack_require__(167).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(167)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 320 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(322)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(309)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(323)
	  , defined   = __webpack_require__(164);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 323 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(184)
	  , get      = __webpack_require__(325);
	module.exports = __webpack_require__(168).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(326)
	  , ITERATOR  = __webpack_require__(318)('iterator')
	  , Iterators = __webpack_require__(307);
	module.exports = __webpack_require__(168).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(298)
	  , TAG = __webpack_require__(318)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(328), __esModule: true };

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(329);
	__webpack_require__(321);
	__webpack_require__(303);
	__webpack_require__(330);
	__webpack_require__(340);
	module.exports = __webpack_require__(168).Set;

/***/ },
/* 329 */
/***/ function(module, exports) {



/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(331);
	
	// 23.2 Set Objects
	__webpack_require__(339)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(176)
	  , hide         = __webpack_require__(312)
	  , redefineAll  = __webpack_require__(332)
	  , ctx          = __webpack_require__(169)
	  , strictNew    = __webpack_require__(333)
	  , defined      = __webpack_require__(164)
	  , forOf        = __webpack_require__(334)
	  , $iterDefine  = __webpack_require__(309)
	  , step         = __webpack_require__(306)
	  , ID           = __webpack_require__(320)('id')
	  , $has         = __webpack_require__(315)
	  , isObject     = __webpack_require__(183)
	  , setSpecies   = __webpack_require__(338)
	  , DESCRIPTORS  = __webpack_require__(314)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(311);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 333 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(169)
	  , call        = __webpack_require__(335)
	  , isArrayIter = __webpack_require__(336)
	  , anObject    = __webpack_require__(184)
	  , toLength    = __webpack_require__(337)
	  , getIterFn   = __webpack_require__(325);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(184);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(307)
	  , ITERATOR   = __webpack_require__(318)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(323)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(168)
	  , $           = __webpack_require__(176)
	  , DESCRIPTORS = __webpack_require__(314)
	  , SPECIES     = __webpack_require__(318)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(176)
	  , global         = __webpack_require__(167)
	  , $export        = __webpack_require__(166)
	  , fails          = __webpack_require__(171)
	  , hide           = __webpack_require__(312)
	  , redefineAll    = __webpack_require__(332)
	  , forOf          = __webpack_require__(334)
	  , strictNew      = __webpack_require__(333)
	  , isObject       = __webpack_require__(183)
	  , setToStringTag = __webpack_require__(317)
	  , DESCRIPTORS    = __webpack_require__(314);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(166);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(341)('Set')});

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(334)
	  , classof = __webpack_require__(326);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _isIterable2 = __webpack_require__(343);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(301);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(344), __esModule: true };

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(303);
	__webpack_require__(321);
	module.exports = __webpack_require__(345);

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(326)
	  , ITERATOR  = __webpack_require__(318)('iterator')
	  , Iterators = __webpack_require__(307);
	module.exports = __webpack_require__(168).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(347), __esModule: true };

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(348);
	module.exports = __webpack_require__(168).Object.entries;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(166)
	  , $entries = __webpack_require__(349)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(176)
	  , toIObject = __webpack_require__(308)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(351), __esModule: true };

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(352);
	__webpack_require__(329);
	module.exports = __webpack_require__(168).Symbol;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(176)
	  , global         = __webpack_require__(167)
	  , has            = __webpack_require__(315)
	  , DESCRIPTORS    = __webpack_require__(314)
	  , $export        = __webpack_require__(166)
	  , redefine       = __webpack_require__(311)
	  , $fails         = __webpack_require__(171)
	  , shared         = __webpack_require__(319)
	  , setToStringTag = __webpack_require__(317)
	  , uid            = __webpack_require__(320)
	  , wks            = __webpack_require__(318)
	  , keyOf          = __webpack_require__(353)
	  , $names         = __webpack_require__(354)
	  , enumKeys       = __webpack_require__(355)
	  , isArray        = __webpack_require__(356)
	  , anObject       = __webpack_require__(184)
	  , toIObject      = __webpack_require__(308)
	  , createDesc     = __webpack_require__(313)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(310)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(176)
	  , toIObject = __webpack_require__(308);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(308)
	  , getNames  = __webpack_require__(176).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(176);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(298);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createByIdDataReducer = undefined;
	
	var _isSealed = __webpack_require__(358);
	
	var _isSealed2 = _interopRequireDefault(_isSealed);
	
	var _toConsumableArray2 = __webpack_require__(361);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _defineProperty2 = __webpack_require__(366);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends4 = __webpack_require__(292);
	
	var _extends5 = _interopRequireDefault(_extends4);
	
	var _slicedToArray2 = __webpack_require__(342);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 3/22/16.
	 */
	
	var createByIdDataReducer = exports.createByIdDataReducer = function createByIdDataReducer(_ref, next) {
	  var _ref2 = (0, _slicedToArray3.default)(_ref, 3);
	
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
	          return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, action.id, next(state, action)));
	        }
	      default:
	        return state;
	    }
	  };
	};
	
	var createDataReducer = function createDataReducer(_ref3) {
	  var _ref4 = (0, _slicedToArray3.default)(_ref3, 3);
	
	  var KEY_REQUEST = _ref4[0];
	  var KEY_SUCCESS = _ref4[1];
	  var KEY_ERROR = _ref4[2];
	  var payloadActionNameProp = arguments.length <= 1 || arguments[1] === undefined ? 'payload' : arguments[1];
	  var payloadStateNameProp = arguments.length <= 2 || arguments[2] === undefined ? 'data' : arguments[2];
	  var payloadAssignFn = arguments.length <= 3 || arguments[3] === undefined ? function () {
	    var k = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    return [].concat((0, _toConsumableArray3.default)(k));
	  } : arguments[3];
	
	
	  var initialState = (0, _defineProperty3.default)({
	    loading: false,
	    errors: {}
	  }, payloadStateNameProp, payloadAssignFn());
	
	  return function formReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends5.default)({}, initialState) : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case KEY_REQUEST:
	        {
	          return (0, _extends5.default)({}, state, {
	            loading: true
	          });
	        }
	      case KEY_SUCCESS:
	        {
	          var payload = action[payloadActionNameProp];
	          return (0, _extends5.default)({}, initialState, (0, _defineProperty3.default)({}, payloadStateNameProp, payloadAssignFn(payload)));
	        }
	      case KEY_ERROR:
	        {
	          var error = action.error;
	
	          return (0, _extends5.default)({}, state, {
	            loading: false,
	            errors: (0, _isSealed2.default)(error) ? { aggregate: error } : (0, _extends5.default)({}, error)
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
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(359), __esModule: true };

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(360);
	module.exports = __webpack_require__(168).Object.isSealed;

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(183);
	
	__webpack_require__(165)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _from = __webpack_require__(362);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(363), __esModule: true };

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(321);
	__webpack_require__(364);
	module.exports = __webpack_require__(168).Array.from;

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(169)
	  , $export     = __webpack_require__(166)
	  , toObject    = __webpack_require__(163)
	  , call        = __webpack_require__(335)
	  , isArrayIter = __webpack_require__(336)
	  , toLength    = __webpack_require__(337)
	  , getIterFn   = __webpack_require__(325);
	$export($export.S + $export.F * !__webpack_require__(365)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(318)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(174);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.authReducer = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  loading: false,
	  valid: false,
	  errors: null
	}; /**
	    * Created by andrew on 25/02/16.
	    */
	
	
	var authReducer = exports.authReducer = function authReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends3.default)({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_START:
	      return (0, _extends3.default)({}, state, {
	        loading: true
	      });
	
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	      return (0, _extends3.default)({}, state, {
	        loading: false,
	        errors: null,
	        valid: true
	      });
	
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_ERROR:
	      return (0, _extends3.default)({}, state, {
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
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signInReducer = undefined;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createFormReducer = __webpack_require__(369);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 25/02/16.
	 */
	var signInReducer = exports.signInReducer = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.AUTH.SIGN_IN_START, _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE, _ACTION_TYPES2.default.AUTH.SIGN_IN_ERROR, _ACTION_TYPES2.default.AUTH.SIGN_IN_FORM_UPDATE]);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signin.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(366);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends4 = __webpack_require__(292);
	
	var _extends5 = _interopRequireDefault(_extends4);
	
	var _slicedToArray2 = __webpack_require__(342);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 3/22/16.
	 */
	
	var createFormReducer = function createFormReducer(_ref) {
	  var _ref2 = (0, _slicedToArray3.default)(_ref, 4);
	
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
	    var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends5.default)({}, initialState) : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	      case KEY_REQUEST:
	        {
	          return (0, _extends5.default)({}, state, {
	            loading: true
	          });
	        }
	      case KEY_ERROR:
	        {
	          var error = action.error;
	
	          return (0, _extends5.default)({}, state, {
	            loading: false,
	            errors: error
	          });
	        }
	      case KEY_SUCCESS:
	        {
	          return (0, _extends5.default)({}, initialState);
	        }
	      case KEY_UPDATE:
	        {
	          var key = action.key;
	          var value = action.value;
	
	          return (0, _extends5.default)({}, state, {
	            form: (0, _extends5.default)({}, state.form, (0, _defineProperty3.default)({}, key, value)),
	            errors: (0, _extends5.default)({}, state.errors, (0, _defineProperty3.default)({
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "createFormReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signUpReducer = undefined;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createFormReducer = __webpack_require__(369);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 25/02/16.
	 */
	var signUpReducer = exports.signUpReducer = (0, _createFormReducer2.default)([_ACTION_TYPES2.default.AUTH.SIGN_UP_START, _ACTION_TYPES2.default.AUTH.SIGN_UP_COMPLETE, _ACTION_TYPES2.default.AUTH.SIGN_UP_ERROR, _ACTION_TYPES2.default.AUTH.SIGN_UP_FORM_UPDATE]);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signup.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signOutReducer = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signOutInitialState = {
	  loading: false,
	  errors: null
	}; /**
	    * Created by andrew on 25/02/16.
	    */
	
	
	var signOutReducer = exports.signOutReducer = function signOutReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends3.default)({}, signOutInitialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.SIGN_OUT_START:
	      return (0, _extends3.default)({}, state, {
	        loading: true
	      });
	    case _ACTION_TYPES2.default.AUTH.SIGN_OUT_COMPLETE:
	      return (0, _extends3.default)({}, state, {
	        loading: false,
	        errors: null
	      });
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signout.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.userReducer = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initalState = {
	  attributes: null,
	  isSignedIn: false
	}; /**
	    * Created by andrew on 25/02/16.
	    */
	
	
	var userReducer = exports.userReducer = function userReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends3.default)({}, initalState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE:
	      {
	        var user = action.user;
	
	        return (0, _extends3.default)({}, state, {
	          attributes: user,
	          isSignedIn: !!user
	        });
	      }
	    case _ACTION_TYPES2.default.AUTH.SIGN_OUT_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_ERROR:
	      return (0, _extends3.default)({}, initalState);
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(187);
	
	var _accounts = __webpack_require__(374);
	
	var _transfers = __webpack_require__(379);
	
	var _entities = __webpack_require__(380);
	
	var _bookmarkAccount = __webpack_require__(381);
	
	var dataReducer = (0, _redux.combineReducers)({
	  transfers: _transfers.transfers,
	  entities: _entities.entities,
	  accounts: _accounts.accounts,
	  bookmarkAccount: _bookmarkAccount.bookmarkAccount
	}); /**
	     * Created by andrew on 15/03/16.
	     */
	
	
	exports.default = dataReducer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.accounts = undefined;
	
	var _typeof2 = __webpack_require__(375);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _keys = __webpack_require__(376);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _toConsumableArray2 = __webpack_require__(361);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _redux = __webpack_require__(187);
	
	var _createFormReducer = __webpack_require__(369);
	
	var _createFormReducer2 = _interopRequireDefault(_createFormReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ownAccountsReducer = function ownAccountsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNTS.LIST_COMPLETE:
	      {
	        var _action$payload = action.payload;
	        var payload = _action$payload === undefined ? [] : _action$payload;
	        //const accounts = Object.keys(payload).map(key => payload[key]);
	
	        return [].concat((0, _toConsumableArray3.default)(payload));
	      }
	    default:
	      return state;
	  }
	}; /**
	    * Created by andrew on 15/03/16.
	    */
	/**
	 * Created by andrew on 15/03/16.
	 */
	
	
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
	
	          var accounts = (0, _keys2.default)(payload).map(function (key) {
	            return payload[key];
	          });
	          return {
	            v: [].concat((0, _toConsumableArray3.default)(accounts))
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
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
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(350)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(377), __esModule: true };

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(378);
	module.exports = __webpack_require__(168).Object.keys;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(163);
	
	__webpack_require__(165)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transfers = undefined;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createDataReducer = __webpack_require__(357);
	
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
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.entities = undefined;
	
	var _defineProperty2 = __webpack_require__(366);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends5 = __webpack_require__(292);
	
	var _extends6 = _interopRequireDefault(_extends5);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {}; /**
	                        * Created by andrew on 15/03/16.
	                        */
	
	
	var nodeInitialState = {
	  loading: false,
	  data: {}
	};
	
	var entities = exports.entities = function entities() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends6.default)({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ENTITIES.REQUESTED:
	      {
	        var id = action.id;
	
	        return (0, _extends6.default)({}, state, (0, _defineProperty3.default)({}, id, null));
	      }
	    case _ACTION_TYPES2.default.ENTITIES.RECEIVED:
	      {
	        var id = action.id;
	        var _action$entity = action.entity;
	        var entity = _action$entity === undefined ? {} : _action$entity;
	
	        return (0, _extends6.default)({}, state, (0, _defineProperty3.default)({}, id, (0, _extends6.default)({}, entity)));
	      }
	
	    case _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE:
	    case _ACTION_TYPES2.default.AUTH.SIGN_IN_COMPLETE:
	      {
	        var user = action.user;
	        var _user$toAccounts = user.toAccounts;
	        var toAccounts = _user$toAccounts === undefined ? [] : _user$toAccounts;
	
	        return (0, _extends6.default)({}, state, toAccounts);
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.LIST_COMPLETE:
	      {
	        var payload = action.payload;
	
	        var hashMap = payload.reduce(function (memo, item) {
	          memo[item.accountId] = item;
	          return memo;
	        }, {});
	        return (0, _extends6.default)({}, state, hashMap);
	      }
	
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_COMPLETE:
	      {
	        var _action$payload = action.payload;
	        var payload = _action$payload === undefined ? {} : _action$payload;
	        var accountId = payload.accountId;
	
	        if (!accountId) {
	          return state;
	        }
	        return (0, _extends6.default)({}, state, (0, _defineProperty3.default)({}, accountId, payload));
	      }
	    case _ACTION_TYPES2.default.ENTITIES.RECEIVED_LIST:
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entities.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bookmarkAccount = undefined;
	
	var _defineProperty2 = __webpack_require__(366);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends5 = __webpack_require__(292);
	
	var _extends6 = _interopRequireDefault(_extends5);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var optionsLoaderInitialState = {
	  loading: false,
	  options: [],
	  value: ''
	}; /**
	    * Created by andrew on 18/03/16.
	    */
	
	
	var initialState = {
	  loading: false,
	  form: {},
	  errors: {},
	  accountsDisabled: true,
	
	  ownersLookup: (0, _extends6.default)({}, optionsLoaderInitialState),
	  accountsLookup: (0, _extends6.default)({}, optionsLoaderInitialState)
	};
	
	var optionsLoaderReducer = function optionsLoaderReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends6.default)({}, optionsLoaderInitialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START:
	      {
	        var value = action.payload;
	        return (0, _extends6.default)({}, state, {
	          loading: true,
	          value: value
	        });
	      }
	
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE:
	      {
	        var payload = action.payload;
	
	        return (0, _extends6.default)({}, state, {
	          loading: false,
	          options: payload === null ? state.options : payload
	        });
	      }
	
	    default:
	      return state;
	  }
	};
	
	var bookmarkAccount = exports.bookmarkAccount = function bookmarkAccount() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends6.default)({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_START:
	      {
	        return (0, _extends6.default)({}, state, {
	          loading: true
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_COMPLETE:
	      {
	        return (0, _extends6.default)({}, initialState);
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ERROR:
	      {
	        var error = action.error;
	
	        return (0, _extends6.default)({}, state, {
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
	
	        var nextForm = isOwnerSetBlank ? (0, _extends6.default)({}, state.form, (0, _defineProperty3.default)({
	          account: null
	        }, key, value)) : (0, _extends6.default)({}, state.form, (0, _defineProperty3.default)({}, key, value));
	
	        var nextErrors = (0, _extends6.default)({}, state.errors, (0, _defineProperty3.default)({}, key, null));
	        return (0, _extends6.default)({}, state, {
	          accountsDisabled: nextAccountsDisabled,
	          form: nextForm,
	          errors: nextErrors
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE:
	      {
	        return (0, _extends6.default)({}, state, {
	          ownersLookup: optionsLoaderReducer(state.ownersLookup, action)
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START:
	    case _ACTION_TYPES2.default.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE:
	      {
	        return (0, _extends6.default)({}, state, {
	          accountsLookup: optionsLoaderReducer(state.accountsLookup, action)
	        });
	      }
	    default:
	      return state;
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "bookmarkAccount.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(187);
	
	var _account = __webpack_require__(383);
	
	var _errors = __webpack_require__(384);
	
	var _bookmarkAccount = __webpack_require__(385);
	
	var _transfersMake = __webpack_require__(386);
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.account = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _redux = __webpack_require__(187);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 15/03/16.
	 */
	/**
	 * Created by andrew on 15/03/16.
	 */
	
	
	var initialState = {
	  loading: false,
	  errors: []
	};
	
	var account = exports.account = function account() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends3.default)({}, initialState) : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_START:
	      {
	        return (0, _extends3.default)({}, state, {
	          loading: true
	        });
	      }
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_COMPLETE:
	      {
	        return (0, _extends3.default)({}, initialState);
	      }
	    case _ACTION_TYPES2.default.ACCOUNT.SINGLE_ERROR:
	      {
	        var error = action.error;
	
	        return (0, _extends3.default)({}, state, {
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
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.error = undefined;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
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
/* 385 */
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
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transfersMake = undefined;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _createFormReducer = __webpack_require__(369);
	
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
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.STORE_CURRENT_ENDPOINT_KEY = exports.SET_ENDPOINT_KEYS = undefined;
	exports.setEndpointKeys = setEndpointKeys;
	exports.storeCurrentEndpointKey = storeCurrentEndpointKey;
	exports.configure = configure;
	
	var _constants = __webpack_require__(388);
	
	var C = _interopRequireWildcard(_constants);
	
	var _authenticate = __webpack_require__(389);
	
	var _sessionStorage = __webpack_require__(400);
	
	var _clientSettings = __webpack_require__(411);
	
	var _parseUrl = __webpack_require__(413);
	
	var _parseUrl2 = _interopRequireDefault(_parseUrl);
	
	var _reduxRouter = __webpack_require__(273);
	
	var _root = __webpack_require__(402);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SET_ENDPOINT_KEYS = exports.SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";
	
	//import {
	//  showFirstTimeLoginSuccessModal,
	//  showFirstTimeLoginErrorModal,
	//  showPasswordResetSuccessModal,
	//  showPasswordResetErrorModal
	//} from "./ui";
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	
	var STORE_CURRENT_ENDPOINT_KEY = exports.STORE_CURRENT_ENDPOINT_KEY = "STORE_CURRENT_ENDPOINT_KEY";
	
	function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
	  return { type: SET_ENDPOINT_KEYS, endpoints: endpoints, currentEndpointKey: currentEndpointKey, defaultEndpointKey: defaultEndpointKey };
	}
	
	function storeCurrentEndpointKey(currentEndpointKey) {
	  return { type: STORE_CURRENT_ENDPOINT_KEY, currentEndpointKey: currentEndpointKey };
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
/* 388 */
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
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.authenticateStart = authenticateStart;
	exports.authenticateComplete = authenticateComplete;
	exports.authenticateError = authenticateError;
	exports.authenticate = authenticate;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _sessionStorage = __webpack_require__(400);
	
	var _api = __webpack_require__(403);
	
	var _entities = __webpack_require__(409);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	function authenticateStart() {
	  return { type: _ACTION_TYPES2.default.AUTH.AUTHENTICATE_START };
	}
	function authenticateComplete(user) {
	  return { type: _ACTION_TYPES2.default.AUTH.AUTHENTICATE_COMPLETE, user: user };
	}
	function authenticateError(errors) {
	  return { type: _ACTION_TYPES2.default.AUTH.AUTHENTICATE_ERROR, errors: errors };
	}
	
	function authenticate(forceReread) {
	  return function (dispatch) {
	
	    dispatch(authenticateStart());
	
	    var savedUserPromise = new _promise2.default(function (rs, rj) {
	
	      var currentHeaders = (0, _sessionStorage.retrieveHeaders)();
	      var accessToken = currentHeaders["access-token"];
	
	      if (!accessToken) {
	        return rj({ reason: 'no token' });
	      }
	
	      var savedUser = (0, _sessionStorage.retrieveUserData)();
	
	      if (savedUser && !forceReread) {
	        return rs(savedUser);
	      }
	
	      return (0, _api.apiGetCurrentUser)().then(function (userData) {
	        (0, _sessionStorage.persistUserData)(userData);
	        dispatch((0, _entities.entityReceived)(userData.id, userData));
	        rs(userData);
	      }, function (err) {
	        debugger;
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
	
	      return _promise2.default.resolve({ reason: reason });
	    });
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "authenticate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(391), __esModule: true };

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(329);
	__webpack_require__(321);
	__webpack_require__(303);
	__webpack_require__(392);
	module.exports = __webpack_require__(168).Promise;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(176)
	  , LIBRARY    = __webpack_require__(310)
	  , global     = __webpack_require__(167)
	  , ctx        = __webpack_require__(169)
	  , classof    = __webpack_require__(326)
	  , $export    = __webpack_require__(166)
	  , isObject   = __webpack_require__(183)
	  , anObject   = __webpack_require__(184)
	  , aFunction  = __webpack_require__(170)
	  , strictNew  = __webpack_require__(333)
	  , forOf      = __webpack_require__(334)
	  , setProto   = __webpack_require__(182).set
	  , same       = __webpack_require__(393)
	  , SPECIES    = __webpack_require__(318)('species')
	  , speciesConstructor = __webpack_require__(394)
	  , asap       = __webpack_require__(395)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(314)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(332)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(317)(P, PROMISE);
	__webpack_require__(338)(PROMISE);
	Wrapper = __webpack_require__(168)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(365)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 393 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(184)
	  , aFunction = __webpack_require__(170)
	  , SPECIES   = __webpack_require__(318)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(167)
	  , macrotask = __webpack_require__(396).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(298)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(169)
	  , invoke             = __webpack_require__(397)
	  , html               = __webpack_require__(398)
	  , cel                = __webpack_require__(399)
	  , global             = __webpack_require__(167)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(298)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 397 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167).document && document.documentElement;

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(183)
	  , document = __webpack_require__(167).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCurrentSettings = setCurrentSettings;
	exports.getCurrentSettings = getCurrentSettings;
	exports.setCurrentEndpoint = setCurrentEndpoint;
	exports.getCurrentEndpoint = getCurrentEndpoint;
	exports.setCurrentEndpointKey = setCurrentEndpointKey;
	exports.getCurrentEndpointKey = getCurrentEndpointKey;
	exports.setDefaultEndpointKey = setDefaultEndpointKey;
	exports.getDefaultEndpointKey = getDefaultEndpointKey;
	exports.resetConfig = resetConfig;
	exports.destroySession = destroySession;
	exports.getInitialEndpointKey = getInitialEndpointKey;
	exports.isApiRequest = isApiRequest;
	exports.getSessionEndpointKey = getSessionEndpointKey;
	exports.getSessionEndpoint = getSessionEndpoint;
	exports.getEmailSignInUrl = getEmailSignInUrl;
	exports.getEmailSignUpUrl = getEmailSignUpUrl;
	exports.getCurrentUserUrl = getCurrentUserUrl;
	exports.getAccountsUrl = getAccountsUrl;
	exports.getCustomersUrl = getCustomersUrl;
	exports.getTransfersUrl = getTransfersUrl;
	exports.getApiUrl = getApiUrl;
	exports.getTokenFormat = getTokenFormat;
	exports.persistUserData = persistUserData;
	exports.retrieveUserData = retrieveUserData;
	exports.retrieveHeaders = retrieveHeaders;
	exports.persistData = persistData;
	exports.retrieveData = retrieveData;
	
	var _jsCookie = __webpack_require__(401);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _constants = __webpack_require__(388);
	
	var C = _interopRequireWildcard(_constants);
	
	var _root = __webpack_require__(402);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import "babel-polyfill";
	
	// stateful variables that persist throughout session
	_root2.default.authState = {
	  currentSettings: {},
	  currentEndpoint: {},
	  defaultEndpointKey: 'default'
	}; /**
	    * Created by andrew on 26/02/16.
	    */
	
	
	function setCurrentSettings(s) {
	  _root2.default.authState.currentSettings = s;
	}
	
	function getCurrentSettings() {
	  return _root2.default.authState.currentSettings;
	}
	
	function setCurrentEndpoint(e) {
	  _root2.default.authState.currentEndpoint = e;
	}
	
	function getCurrentEndpoint() {
	  return _root2.default.authState.currentEndpoint;
	}
	
	/**
	 * @deprecated
	 * @param k
	 */
	function setCurrentEndpointKey(k) {
	  persistData(C.SAVED_CONFIG_KEY, k || getDefaultEndpointKey());
	}
	
	function getCurrentEndpointKey() {
	  return getDefaultEndpointKey();
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
	  _root2.default.authState = _root2.default.authState || {};
	  _root2.default.authState.currentSettings = {};
	  _root2.default.authState.currentEndpoint = {};
	  destroySession();
	}
	
	function destroySession() {
	  var sessionKeys = [C.SAVED_CREDS_KEY, C.SAVED_CONFIG_KEY, C.SAVED_USER_INFO];
	
	  for (var key in sessionKeys) {
	    key = sessionKeys[key];
	
	    // kill all local storage keys
	    if (_root2.default.localStorage) {
	      _root2.default.localStorage.removeItem(key);
	    }
	
	    // remove from base path in case config is not specified
	    _jsCookie2.default.remove(key, {
	      path: _root2.default.authState.currentSettings.cookiePath || "/"
	    });
	  }
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
	
	function getSessionEndpointKey() {
	  return getCurrentEndpointKey();
	}
	
	function getSessionEndpoint(k) {
	  return getCurrentEndpoint()[getSessionEndpointKey()];
	}
	
	//// only should work for current session
	//export function getSignOutUrl (endpointKey) {
	//  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).signOutPath}`
	//}
	
	function getEmailSignInUrl() {
	  return "" + getSessionEndpoint().emailSignInPath;
	}
	
	function getEmailSignUpUrl() {
	  return getCustomersUrl();
	}
	
	function getCurrentUserUrl() {
	  return "" + getSessionEndpoint().currentUserPath;
	}
	
	function getAccountsUrl() {
	  return "" + getSessionEndpoint().accountsPath;
	}
	
	function getCustomersUrl() {
	  return "" + getSessionEndpoint().customersPath;
	}
	
	function getTransfersUrl() {
	  return "" + getSessionEndpoint().transfersPath;
	}
	
	/**
	 * @deprecated
	 * @param key
	 * @returns {string|string}
	 */
	function getApiUrl(key) {
	  var configKey = getSessionEndpointKey(key);
	  return _root2.default.authState.currentEndpoint[configKey].apiUrl;
	}
	
	function getTokenFormat() {
	  return _root2.default.authState.currentSettings.tokenFormat;
	}
	
	function persistUserData(user) {
	  persistData(C.SAVED_USER_INFO, user);
	}
	
	function retrieveUserData() {
	  return retrieveData(C.SAVED_USER_INFO);
	}
	
	function retrieveHeaders() {
	  return retrieveData(C.SAVED_CREDS_KEY) || {};
	}
	
	function persistData(key, val) {
	  val = _root2.default.JSON.stringify(val);
	
	  switch (_root2.default.authState.currentSettings.storage) {
	    case "localStorage":
	      _root2.default.localStorage.setItem(key, val);
	      break;
	
	    default:
	      _jsCookie2.default.set(key, val, {
	        expires: _root2.default.authState.currentSettings.cookieExpiry,
	        path: _root2.default.authState.currentSettings.cookiePath
	      });
	      break;
	  }
	}
	
	function retrieveData(key) {
	  var val = null;
	
	  switch (_root2.default.authState.currentSettings.storage) {
	
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
/* 401 */,
/* 402 */
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "root.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _keys = __webpack_require__(376);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.apiSignIn = apiSignIn;
	exports.apiSignUp = apiSignUp;
	exports.apiGetCurrentUser = apiGetCurrentUser;
	exports.apiCreateAccount = apiCreateAccount;
	exports.apiCreateRefAccount = apiCreateRefAccount;
	exports.apiMakeTransfer = apiMakeTransfer;
	exports.apiRetrieveAccounts = apiRetrieveAccounts;
	exports.apiRetrieveTransfers = apiRetrieveTransfers;
	exports.apiRetrieveAccount = apiRetrieveAccount;
	exports.apiDeleteAccount = apiDeleteAccount;
	exports.apiRetrieveUsers = apiRetrieveUsers;
	exports.apiRetrieveUser = apiRetrieveUser;
	
	var _fetch = __webpack_require__(404);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _sessionStorage = __webpack_require__(400);
	
	var _root = __webpack_require__(402);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _handleFetchResponse = __webpack_require__(407);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 12/03/16.
	 */
	
	
	function makeQuery(params) {
	  return (0, _keys2.default)(params).map(function (key) {
	    return [encodeURIComponent(key), encodeURIComponent(params[key])].join('=');
	  }).join('&');
	}
	
	function apiSignIn(body) {
	  return (0, _fetch2.default)((0, _sessionStorage.getEmailSignInUrl)(), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "post",
	    body: _root2.default.JSON.stringify(body)
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiSignUp(body) {
	  return (0, _fetch2.default)((0, _sessionStorage.getEmailSignUpUrl)(), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "post",
	    body: _root2.default.JSON.stringify(body)
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiGetCurrentUser() {
	  return (0, _fetch2.default)((0, _sessionStorage.getCurrentUserUrl)(), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "get"
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiCreateAccount(customerId, _ref) {
	  var title = _ref.title;
	  var initialBalance = _ref.balance;
	  var description = _ref.description;
	
	  //{
	  //"accountId": "0000015377cf131b-a250093f26850000"
	  //}
	
	  return (0, _fetch2.default)((0, _sessionStorage.getAccountsUrl)(), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "post",
	    body: _root2.default.JSON.stringify({
	      customerId: customerId,
	      title: title,
	      initialBalance: initialBalance,
	      description: description })
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiCreateRefAccount(customerId, _ref2) {
	  var owner = _ref2.owner;
	  var accountId = _ref2.account;
	  var title = _ref2.title;
	  var description = _ref2.description;
	
	
	  return (0, _fetch2.default)((0, _sessionStorage.getCustomersUrl)() + '/' + customerId + '/toaccounts', {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "post",
	    body: _root2.default.JSON.stringify({
	      owner: owner,
	      id: accountId,
	      title: title,
	      description: description })
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiMakeTransfer(fromAccountId, _ref3) {
	  var account = _ref3.account;
	  var amount = _ref3.amount;
	  var description = _ref3.description;
	
	
	  return (0, _fetch2.default)((0, _sessionStorage.getTransfersUrl)(), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "post",
	    body: _root2.default.JSON.stringify({
	      "amount": amount,
	      "fromAccountId": fromAccountId,
	      "toAccountId": account,
	      description: description
	    })
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiRetrieveAccounts(customerId) {
	
	  return (0, _fetch2.default)((0, _sessionStorage.getAccountsUrl)() + '?' + makeQuery({ customerId: customerId }), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "get"
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiRetrieveTransfers(accountId) {
	
	  return (0, _fetch2.default)((0, _sessionStorage.getAccountsUrl)() + '/' + accountId + '/history', {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "get"
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiRetrieveAccount(accountId) {
	  return (0, _fetch2.default)((0, _sessionStorage.getAccountsUrl)() + '/' + accountId, {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "get"
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiDeleteAccount(accountId) {
	  return _promise2.default.reject({
	    message: '\'Delete Account\' is not implemented.'
	  });
	
	  return (0, _fetch2.default)((0, _sessionStorage.getAccountsUrl)() + '/' + accountId, {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "delete"
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiRetrieveUsers(email) {
	  return (0, _fetch2.default)((0, _sessionStorage.getCustomersUrl)() + '?' + makeQuery({ email: email }), {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "get"
	  }).then(_handleFetchResponse.parseResponse);
	}
	
	function apiRetrieveUser(customerId) {
	  return (0, _fetch2.default)((0, _sessionStorage.getCustomersUrl)() + '/' + customerId, {
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	    },
	    method: "get"
	  }).then(_handleFetchResponse.parseResponse);
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.default = function (url) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	
	  if (!options.headers) {
	    options.headers = {};
	  }
	
	  options.headers = (0, _extends3.default)({}, options.headers, getAuthHeaders(url));
	
	  //extend(options.headers, getAuthHeaders(url));
	  return (0, _isomorphicFetch2.default)(url, options).then(function (resp) {
	    return updateAuthCredentials(resp);
	  });
	};
	
	var _isomorphicFetch = __webpack_require__(405);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _constants = __webpack_require__(388);
	
	var C = _interopRequireWildcard(_constants);
	
	var _sessionStorage = __webpack_require__(400);
	
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
	} /**
	   * Created by andrew on 26/02/16.
	   */
	
	
	function updateAuthCredentials(resp) {
	
	  // check config apiUrl matches the current response url
	  if ((0, _sessionStorage.isApiRequest)(resp.url)) {
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
	  }
	
	  return resp;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "fetch.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 405 */,
/* 406 */,
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _keys = __webpack_require__(376);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _objectWithoutProperties2 = __webpack_require__(408);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	exports.parseResponse = parseResponse;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	function parseResponse(response) {
	  var json = response.json();
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
	      var rest = (0, _objectWithoutProperties3.default)(_ref, ['message']);
	
	      if (!message) {
	        return rest;
	      }
	      var jvmPattern = /\[Field error in object '\w+' on field '(\w+)'/gm;
	      var errors = {};
	      message.replace(jvmPattern, function (m, name) {
	        errors[name] = ['Required'];
	      });
	
	      if ((0, _keys2.default)(errors).length) {
	        return { errors: errors };
	      }
	      return { errors: message };
	    }).then(function (err) {
	      return _promise2.default.reject(err);
	    });
	  }
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "handleFetchResponse.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 408 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransfers = exports.getTransfersError = exports.getTransfersComplete = exports.getTransfersRequested = exports.makeTransfer = exports.makeTransferFormUpdate = exports.makeTransferError = exports.makeTransferComplete = exports.makeTransferRequested = exports.createRefAccountLookup = exports.createRefOwnerLookup = exports.createRefAccountLookupComplete = exports.createRefAccountLookupStart = exports.createRefOwnerLookupComplete = exports.createRefOwnerLookupStart = exports.errorMessageStop = exports.errorMessageStart = exports.deleteAccountError = exports.deleteAccountComplete = exports.deleteAccountRequested = exports.accountError = exports.accountComplete = exports.accountRequested = exports.accountRefCreateFormUpdate = exports.accountRefCreateError = exports.accountRefCreateComplete = exports.accountRefCreateStart = exports.accountCreateFormUpdate = exports.accountCreateError = exports.accountCreateComplete = exports.accountCreateStart = exports.accountsRefListReceived = exports.accountsListError = exports.accountsListReceived = exports.accountsListRequested = exports.entityReceived = exports.entityRequested = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.accountsList = accountsList;
	exports.accountCreate = accountCreate;
	exports.accountRefCreate = accountRefCreate;
	exports.fetchOwnAccounts = fetchOwnAccounts;
	exports.fetchAccount = fetchAccount;
	exports.deleteAccount = deleteAccount;
	exports.errorMessageTimedOut = errorMessageTimedOut;
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _actions = __webpack_require__(410);
	
	var _api = __webpack_require__(403);
	
	var api = _interopRequireWildcard(_api);
	
	var _authenticate = __webpack_require__(389);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 27/02/16.
	 */
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
	
	var accountRequested = exports.accountRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.SINGLE_START);
	var accountComplete = exports.accountComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.SINGLE_COMPLETE, 'payload');
	var accountError = exports.accountError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.SINGLE_ERROR, 'error');
	
	function accountsList(userId) {
	  return function (dispatch) {
	    dispatch(accountsListRequested());
	    return api.apiRetrieveAccounts(userId).then(function (list) {
	      dispatch(accountsListReceived(list));
	    }).catch(function (err) {
	      dispatch(accountsListError(err));
	      return _promise2.default.resolve({ error: err });
	    });
	  };
	}
	
	function accountCreate(customerId, payload) {
	  return function (dispatch) {
	    dispatch(accountCreateStart());
	    return api.apiCreateAccount(customerId, payload).then(function (_ref) {
	      var accountId = _ref.accountId;
	
	      dispatch(accountCreateComplete((0, _extends3.default)({
	        id: accountId
	      }, payload)));
	      // dispatch(entityReceived(accountId, payload));
	      dispatch((0, _authenticate.authenticate)(true));
	      return accountId;
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
	
	      dispatch(accountRefCreateComplete((0, _extends3.default)({}, payload, {
	        id: id
	      })));
	      dispatch(entityReceived(id, payload));
	      return dispatch((0, _authenticate.authenticate)(true));
	    }).catch(function (err) {
	      debugger;
	      dispatch(accountRefCreateError(err));
	      return _promise2.default.resolve({ error: err });
	    });
	  };
	}
	
	function fetchOwnAccounts(customerId) {
	  return function (dispatch) {
	    //dispatch(accountsListRequested());
	    return api.apiRetrieveAccounts(customerId).then(function (data) {
	      dispatch(accountsListReceived(data));
	    });
	  };
	}
	
	function fetchAccount(accountId) {
	  return function (dispatch) {
	    dispatch(accountRequested());
	    return api.apiRetrieveAccount(accountId).then(function (data) {
	      dispatch(accountComplete(data));
	    }).catch(function (err) {
	      dispatch(accountError(err));
	    });
	  };
	}
	
	var deleteAccountRequested = exports.deleteAccountRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.DELETE_START);
	var deleteAccountComplete = exports.deleteAccountComplete = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.DELETE_COMPLETE);
	var deleteAccountError = exports.deleteAccountError = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.ACCOUNT.DELETE_ERROR);
	
	function deleteAccount(customerId, accountId) {
	  return function (dispatch) {
	    dispatch(deleteAccountRequested());
	    return api.apiDeleteAccount(accountId).then(function (data) {
	      //debugger;
	      dispatch(deleteAccountComplete());
	      return _promise2.default.resolve('ok');
	    }).catch(function (err) {
	      dispatch(deleteAccountError());
	      return _promise2.default.reject(err);
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
	    dispatch(createRefAccountLookupStart());
	    return api.apiRetrieveAccounts(customerId).then(function (data) {
	      var arr = data.map(function (_ref4) {
	        var accountId = _ref4.accountId;
	        var title = _ref4.title;
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
	
	var makeTransferRequested = exports.makeTransferRequested = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.TRANSFERS.MAKE_START, 'payload');
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
	      dispatch(getTransfersComplete(accountId, data));
	      return data;
	    }).catch(function (err) {
	      dispatch(getTransfersError(accountId, err));
	      return err;
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "entities.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 410 */
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
	
	    var action = { type: type };
	    argNames.forEach(function (arg, index) {
	      action[argNames[index]] = args[index];
	    });
	    return action;
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(376);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.applyConfig = applyConfig;
	
	var _constants = __webpack_require__(388);
	
	var C = _interopRequireWildcard(_constants);
	
	var _root = __webpack_require__(402);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _fetch = __webpack_require__(404);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _parseEndpointConfig2 = __webpack_require__(412);
	
	var _parseEndpointConfig3 = _interopRequireDefault(_parseEndpointConfig2);
	
	var _configure = __webpack_require__(387);
	
	var _sessionStorage = __webpack_require__(400);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	
	var defaultSettings = {
	  //proxyIf:            function() { return false; },
	  //proxyUrl:           "/proxy",
	  forceHardRedirect: false,
	  storage: "cookies",
	  cookieExpiry: 14,
	  cookiePath: "/",
	  initialCredentials: null,
	
	  passwordResetSuccessUrl: function passwordResetSuccessUrl() {
	    return _root2.default.location.href;
	  },
	
	  confirmationSuccessUrl: function confirmationSuccessUrl() {
	    return _root2.default.location.href;
	  },
	
	  tokenFormat: {
	    "access-token": "{{ access-token }}"
	    //"token-type":   "Bearer",
	    //client:         "{{ client }}",
	    //expiry:         "{{ expiry }}",
	    //uid:            "{{ uid }}"
	  },
	
	  parseExpiry: function parseExpiry(headers) {
	    // convert from ruby time (seconds) to js time (millis)
	    return parseInt(headers["expiry"], 10) * 1000 || null;
	  },
	
	  handleLoginResponse: function handleLoginResponse(resp) {
	    return resp.data;
	  },
	
	  handleAccountUpdateResponse: function handleAccountUpdateResponse(resp) {
	    return resp.data;
	  },
	
	  handleTokenValidationResponse: function handleTokenValidationResponse(resp) {
	    return resp.data;
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
	    return _promise2.default.resolve({ blank: true });
	  }
	
	  var currentEndpointKey = undefined;
	
	  if (reset) {
	    resetConfig();
	  }
	
	  if (settings.initialCredentials) {
	    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
	  }
	
	  (0, _sessionStorage.setCurrentSettings)((0, _extends3.default)({}, defaultSettings, settings));
	
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
	
	  dispatch((0, _configure.setEndpointKeys)((0, _keys2.default)(currentEndpoint), currentEndpointKey, defaultEndpointKey));
	
	  (0, _sessionStorage.setCurrentEndpointKey)(currentEndpointKey);
	
	  return _promise2.default.resolve();
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "clientSettings.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.default = parseEndpointConfig;
	
	var _constants = __webpack_require__(388);
	
	var C = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	}; /**
	    * Created by andrew on 26/02/16.
	    */
	
	
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
	    currentEndpoint[configName] = (0, _extends3.default)({}, defaultEndpoint, endpoint[i][configName]);
	  }
	
	  return { defaultEndpointKey: defaultEndpointKey, currentEndpoint: currentEndpoint };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "parseEndpointConfig.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(301);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.normalizeTokenKeys = normalizeTokenKeys;
	exports.getAllParams = getAllParams;
	exports.default = getRedirectInfo;
	
	var _querystring = __webpack_require__(414);
	
	var _querystring2 = _interopRequireDefault(_querystring);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function normalizeTokenKeys(params) {
	  // normalize keys
	  if (params.token) {
	    params["access-token"] = params.token;
	    delete params.token;
	  }
	  if (params.auth_token) {
	    params["access-token"] = params.auth_token;
	    delete params.auth_token;
	  }
	  if (params.client_id) {
	    params.client = params.client_id;
	    delete params.client_id;
	  }
	  if (params.config) {
	    params.endpointKey = params.config;
	    delete params.config;
	  }
	
	  return params;
	} /**
	   * Created by andrew on 26/02/16.
	   */
	;
	
	var getAnchorSearch = function getAnchorSearch(location) {
	  var rawAnchor = location.hash || "",
	      arr = rawAnchor.split("?");
	  return arr.length > 1 ? arr[1] : null;
	};
	
	var getSearchQs = function getSearchQs(location) {
	  var rawQs = location.search || "",
	      qs = rawQs.replace("?", ""),
	      qsObj = qs ? _querystring2.default.parse(qs) : {};
	
	  return qsObj;
	};
	
	var getAnchorQs = function getAnchorQs(location) {
	  var anchorQs = getAnchorSearch(location),
	      anchorQsObj = anchorQs ? _querystring2.default.parse(anchorQs) : {};
	
	  return anchorQsObj;
	};
	
	var stripKeys = function stripKeys(obj, keys) {
	  for (var q in keys) {
	    delete obj[keys[q]];
	  }
	
	  return obj;
	};
	
	function getAllParams(location) {
	  return (0, _extends3.default)({}, getAnchorQs(location), getSearchQs(location));
	};
	
	var buildCredentials = function buildCredentials(location, keys) {
	  var params = getAllParams(location);
	  var authHeaders = {};
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(keys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;
	
	      authHeaders[key] = params[key];
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
	
	  return normalizeTokenKeys(authHeaders);
	};
	
	// this method is tricky. we want to reconstruct the current URL with the
	// following conditions:
	// 1. search contains none of the supplied keys
	// 2. anchor search (i.e. `#/?key=val`) contains none of the supplied keys
	// 3. all of the keys NOT supplied are presevered in their original form
	// 4. url protocol, host, and path are preserved
	var getLocationWithoutParams = function getLocationWithoutParams(currentLocation, keys) {
	  // strip all values from both actual and anchor search params
	  var newSearch = _querystring2.default.stringify(stripKeys(getSearchQs(currentLocation), keys)),
	      newAnchorQs = _querystring2.default.stringify(stripKeys(getAnchorQs(currentLocation), keys)),
	      newAnchor = (currentLocation.hash || "").split("?")[0];
	
	  if (newSearch) {
	    newSearch = "?" + newSearch;
	  }
	
	  if (newAnchorQs) {
	    newAnchor += "?" + newAnchorQs;
	  }
	
	  if (newAnchor && !newAnchor.match(/^#/)) {
	    newAnchor = "#/" + newAnchor;
	  }
	
	  // reconstruct location with stripped auth keys
	  var newLocation = currentLocation.pathname + newSearch + newAnchor;
	
	  return newLocation;
	};
	
	function getRedirectInfo(currentLocation) {
	  if (!currentLocation) {
	    return {};
	  } else {
	    var authKeys = ["access-token", "token", "auth_token", "config", "client", "client_id", "expiry", "uid", "reset_password", "account_confirmation_success"];
	
	    var authRedirectHeaders = buildCredentials(currentLocation, authKeys);
	    var authRedirectPath = getLocationWithoutParams(currentLocation, authKeys);
	
	    if (authRedirectPath !== currentLocation) {
	      return { authRedirectHeaders: authRedirectHeaders, authRedirectPath: authRedirectPath };
	    } else {
	      return {};
	    }
	  }
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "parseUrl.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	// This file is copied to the root of the project to allow
	'use strict';
	
	exports.__esModule = true;
	
	var _libServer = __webpack_require__(445);
	
	exports.reduxReactRouter = _libServer.reduxReactRouter;
	exports.match = _libServer.match;

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.match = match;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(187);
	
	var _reduxReactRouter = __webpack_require__(283);
	
	var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);
	
	var _useDefaults = __webpack_require__(285);
	
	var _useDefaults2 = _interopRequireDefault(_useDefaults);
	
	var _routeReplacement = __webpack_require__(286);
	
	var _routeReplacement2 = _interopRequireDefault(_routeReplacement);
	
	var _matchMiddleware = __webpack_require__(446);
	
	var _matchMiddleware2 = _interopRequireDefault(_matchMiddleware);
	
	var _constants = __webpack_require__(275);
	
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
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = matchMiddleware;
	
	var _actionCreators = __webpack_require__(281);
	
	var _constants = __webpack_require__(275);
	
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
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = '/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/AuthComponent.js'; /**
	                                                                                                                             * Created by andrew on 21/02/16.
	                                                                                                                             */
	
	exports.requireAuthentication = requireAuthentication;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reduxRouter = __webpack_require__(273);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function requireAuthentication(Component) {
	  var AuthComponent = function (_React$Component) {
	    (0, _inherits3.default)(AuthComponent, _React$Component);
	
	    function AuthComponent() {
	      (0, _classCallCheck3.default)(this, AuthComponent);
	      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AuthComponent).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(AuthComponent, [{
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
	          return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 37
	            }
	          }));
	        }
	
	        return _react2.default.createElement(
	          'div',
	          { className: 'panel', __source: {
	              fileName: _jsxFileName,
	              lineNumber: 41
	            }
	          },
	          _react2.default.createElement(
	            'h2',
	            { className: 'text-danger', __source: {
	                fileName: _jsxFileName,
	                lineNumber: 42
	              }
	            },
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
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toArray2 = __webpack_require__(449);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	exports.default = read;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 11/03/16.
	 */
	function read(src) {
	  var path = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	  var defaultVal = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var _path$split = path.split('.');
	
	  var _path$split2 = (0, _toArray3.default)(_path$split);
	
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "readProp.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _from = __webpack_require__(362);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};
	
	exports.__esModule = true;

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/partials/Container.js"; /**
	                                                                                                                                  * Created by andrew on 17/02/16.
	                                                                                                                                  */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var _reactRouterBootstrap = __webpack_require__(694);
	
	var _HeaderLinks = __webpack_require__(697);
	
	var _HeaderLinks2 = _interopRequireDefault(_HeaderLinks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import { SignOutButton } from "redux-auth/bootstrap-theme";
	
	//const SignOutButton = () => (<div>SignOutButton!</div>);
	
	var Container = function (_React$Component) {
	  (0, _inherits3.default)(Container, _React$Component);
	
	  function Container() {
	    (0, _classCallCheck3.default)(this, Container);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Container, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "wrapper", __source: {
	            fileName: _jsxFileName,
	            lineNumber: 21
	          }
	        },
	        _react2.default.createElement(
	          _reactBootstrap.Navbar,
	          { className: "main-nav", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 22
	            }
	          },
	          _react2.default.createElement(
	            _reactRouterBootstrap.LinkContainer,
	            { to: "/", __source: {
	                fileName: _jsxFileName,
	                lineNumber: 23
	              }
	            },
	            _react2.default.createElement(
	              _reactBootstrap.NavbarBrand,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 24
	                }
	              },
	              "Money Transfer"
	            )
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 26
	              }
	            },
	            _react2.default.createElement(
	              _reactRouterBootstrap.LinkContainer,
	              { to: "/", onlyActiveOnIndex: true, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 27
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.NavItem,
	                { eventKey: 1, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 28
	                  }
	                },
	                "Home"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 31
	              }
	            },
	            _react2.default.createElement(_HeaderLinks2.default, {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 32
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          { className: "content", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 36
	            }
	          },
	          this.props.children
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Navbar,
	          { fixedBottom: true, className: "footer-navigation", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 40
	            }
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12, sm: 6, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 41
	              }
	            },
	            "© 2016 Eventuate.io"
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12, sm: 6, className: "text-right", __source: {
	                fileName: _jsxFileName,
	                lineNumber: 42
	              }
	            },
	            _react2.default.createElement(
	              "a",
	              { href: "#", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 43
	                }
	              },
	              "Terms"
	            ),
	            " | ",
	            _react2.default.createElement(
	              "a",
	              { href: "#", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 44
	                }
	              },
	              "Policy"
	            ),
	            " | ",
	            _react2.default.createElement(
	              "a",
	              { href: "#", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 45
	                }
	              },
	              "Contact"
	            ),
	            " | ",
	            _react2.default.createElement(
	              "a",
	              { href: "#", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 46
	                }
	              },
	              "About"
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return Container;
	}(_react2.default.Component);
	/*<a href="https://github.com/lynndylanhurley/redux-auth">
	 <img
	 style={{position: "absolute", top: 0, right: 0, border: 0}}
	 src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
	 alt="Fork me on GitHub"
	 data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
	 </a>*/
	
	
	Container.propTypes = {
	  children: _react.PropTypes.node
	};
	exports.default = Container;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Container.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HeaderLinks = undefined;
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = '/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/HeaderLinks.js'; /**
	                                                                                                                           * Created by andrew on 11/03/16.
	                                                                                                                           */
	
	
	//import { PageHeader, OverlayTrigger, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactRouterBootstrap = __webpack_require__(694);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRouter = __webpack_require__(210);
	
	var _signOut2 = __webpack_require__(698);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeaderLinks = exports.HeaderLinks = function (_React$Component) {
	  (0, _inherits3.default)(HeaderLinks, _React$Component);
	
	  function HeaderLinks() {
	    (0, _classCallCheck3.default)(this, HeaderLinks);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HeaderLinks).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(HeaderLinks, [{
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
	            { to: '/register', __source: {
	                fileName: _jsxFileName,
	                lineNumber: 35
	              }
	            },
	            _react2.default.createElement(
	              BS.NavItem,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 36
	                }
	              },
	              'Register'
	            )
	          );
	          break;
	        case 1:
	          buttonSet = _react2.default.createElement(
	            _reactRouterBootstrap.LinkContainer,
	            { to: '/signin', __source: {
	                fileName: _jsxFileName,
	                lineNumber: 40
	              }
	            },
	            _react2.default.createElement(
	              BS.NavItem,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 41
	                }
	              },
	              'Log In'
	            )
	          );
	          break;
	        case 2:
	          buttonSet = _react2.default.createElement(
	            BS.NavItem,
	            { onClick: this.signOut.bind(this), eventKey: '2', __source: {
	                fileName: _jsxFileName,
	                lineNumber: 45
	              }
	            },
	            'Sign Out'
	          );
	          break;
	      }
	
	      return _react2.default.createElement(
	        BS.Nav,
	        { pullRight: true, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 50
	          }
	        },
	        buttonSet
	      );
	    }
	  }]);
	  return HeaderLinks;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var
	  //dispatch,
	  router = _ref.router;
	  var app = _ref.app;
	  return {
	    //dispatch,
	    router: router,
	    auth: app.auth
	  };
	})(HeaderLinks);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HeaderLinks.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 698 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.signOutStart = signOutStart;
	exports.signOutComplete = signOutComplete;
	exports.signOut = signOut;
	
	var _sessionStorage = __webpack_require__(400);
	
	var _entities = __webpack_require__(409);
	
	var _configure = __webpack_require__(387);
	
	var _handleFetchResponse = __webpack_require__(407);
	
	var _fetch = __webpack_require__(404);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	var _root = __webpack_require__(402);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by andrew on 11/03/16.
	 */
	function signOutStart() {
	  return { type: _ACTION_TYPES2.default.AUTH.SIGN_OUT_START };
	}
	
	function signOutComplete() {
	  return { type: _ACTION_TYPES2.default.AUTH.SIGN_OUT_COMPLETE };
	}
	
	function signOut() {
	  return function (dispatch) {
	
	    dispatch(signOutStart());
	
	    (0, _sessionStorage.destroySession)();
	
	    dispatch(signOutComplete());
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signOut.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 699 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/MyAccounts.js"; /**
	                                                                                                                     * Created by andrew on 17/02/16.
	                                                                                                                     */
	
	//import * as DefaultTheme from "redux-auth";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRouter = __webpack_require__(210);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactSelect = __webpack_require__(700);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _modals = __webpack_require__(706);
	
	var Modals = _interopRequireWildcard(_modals);
	
	var _IndexPanel = __webpack_require__(715);
	
	var _IndexPanel2 = _interopRequireDefault(_IndexPanel);
	
	var _entities = __webpack_require__(409);
	
	var A = _interopRequireWildcard(_entities);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _Money = __webpack_require__(716);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var resetModals = {
	  showAccountModal: false,
	  show3rdPartyAccountModal: false,
	  showDeleteAccountModal: false
	};
	
	var MyAccounts = function (_React$Component) {
	  (0, _inherits3.default)(MyAccounts, _React$Component);
	
	  function MyAccounts() {
	    var _Object$getPrototypeO;
	
	    (0, _classCallCheck3.default)(this, MyAccounts);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(MyAccounts)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	    _this.state = (0, _extends3.default)({}, resetModals);
	    return _this;
	  }
	
	  (0, _createClass3.default)(MyAccounts, [{
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
	        }, 1000);
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
	
	
	      this.props.dispatch(A.accountRefCreate(customerId, payload)).then(function () {
	        _this3.close();
	        return new _promise2.default(function (rs, rj) {
	          setTimeout(function () {
	            _this3.props.dispatch(A.fetchOwnAccounts(customerId)).then(rs, rj);
	          }, 1000);
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
	    value: function remove3rdPartyAccountModalConfirmed(accountId) {
	      var _this4 = this;
	
	      var customerId = this.props.customerId;
	
	      this.props.dispatch(A.deleteAccount(customerId, accountId)).then(function () {
	        _this4.close();
	      }, function (err) {
	        _this4.props.dispatch(A.errorMessageTimedOut(err && err.message || err));
	        _this4.close();
	      });
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.setState((0, _extends3.default)({}, resetModals));
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
	      var address = user.address;
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
	        { bsStyle: "danger", __source: {
	            fileName: _jsxFileName,
	            lineNumber: 154
	          }
	        },
	        _react2.default.createElement(
	          "strong",
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 154
	            }
	          },
	          error
	        )
	      ) : [];
	
	      var ownAccountsData = this.props.app.accounts.own || [];
	
	      //accountId: "000001537c2cf075-a250093f26850000"
	      //balance: 0
	      //description: null
	      //title: "Sample"
	
	      var ownAccounts = ownAccountsData.map(function (_ref, idx) {
	        var accountId = _ref.accountId;
	        var balance = _ref.balance;
	        var _ref$description = _ref.description;
	        var description = _ref$description === undefined ? '' : _ref$description;
	        var title = _ref.title;
	        return _react2.default.createElement(
	          "tr",
	          { key: "own_" + idx, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 166
	            }
	          },
	          _react2.default.createElement(
	            "td",
	            { key: 0, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 167
	              }
	            },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: "/account/" + accountId, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 167
	                }
	              },
	              title
	            ),
	            description ? [_react2.default.createElement("br", {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 169
	              }
	            }), _react2.default.createElement(
	              "span",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 170
	                }
	              },
	              description
	            )] : null
	          ),
	          _react2.default.createElement(
	            "td",
	            { key: 1, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 173
	              }
	            },
	            _react2.default.createElement(_Money.Money, { amount: balance, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 173
	              }
	            })
	          ),
	          _react2.default.createElement(
	            "td",
	            { key: 2, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 174
	              }
	            },
	            _react2.default.createElement(
	              BS.Button,
	              { bsStyle: "link", onClick: _this5.remove3rdPartyAccountModal.bind(_this5, accountId), __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 174
	                }
	              },
	              _react2.default.createElement(BS.Glyphicon, { glyph: "remove", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 174
	                }
	              })
	            )
	          )
	        );
	      });
	
	      var refAccountsData = this.props.app.accounts.other || [];
	      var refAccounts = refAccountsData.map(function (_ref2, idx) {
	        var title = _ref2.title;
	        var _ref2$description = _ref2.description;
	        var description = _ref2$description === undefined ? '' : _ref2$description;
	        var id = _ref2.id;
	        return _react2.default.createElement(
	          "tr",
	          { key: "ref_" + idx, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 184
	            }
	          },
	          _react2.default.createElement(
	            "td",
	            { key: 0, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 185
	              }
	            },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: "/account/" + id, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 185
	                }
	              },
	              title
	            ),
	            description ? [_react2.default.createElement("br", {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 187
	              }
	            }), _react2.default.createElement(
	              "span",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 188
	                }
	              },
	              description
	            )] : null
	          ),
	          _react2.default.createElement("td", { key: 1, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 192
	            }
	          }),
	          _react2.default.createElement(
	            "td",
	            { key: 2, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 193
	              }
	            },
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { pullRight: true, bsStyle: "link", onClick: _this5.remove3rdPartyAccountModal.bind(_this5, id), __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 193
	                }
	              },
	              _react2.default.createElement(BS.Glyphicon, { glyph: "remove", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 193
	                }
	              })
	            )
	          )
	        );
	      });
	
	      var accounts = !!(ownAccounts.length + refAccounts.length) ? [].concat(ownAccounts, refAccounts) : _react2.default.createElement(
	        "tr",
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 198
	          }
	        },
	        _react2.default.createElement(
	          "td",
	          { colSpan: 3, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 199
	            }
	          },
	          "No account exists: ",
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: "link", onClick: this.createAccountModal.bind(this), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 199
	              }
	            },
	            "create a new one"
	          ),
	          " or ",
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: "link", onClick: this.create3rdPartyAccountModal.bind(this), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 199
	              }
	            },
	            "add a recipient"
	          )
	        )
	      );
	
	      return _react2.default.createElement(
	        "div",
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 203
	          }
	        },
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 204
	            }
	          },
	          "My Accounts",
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            { pullRight: true, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 206
	              }
	            },
	            _react2.default.createElement(
	              _reactBootstrap.ButtonGroup,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 207
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: "link", onClick: this.createAccountModal.bind(this), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 208
	                  }
	                },
	                "Create Account"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: "link", onClick: this.create3rdPartyAccountModal.bind(this), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 209
	                  }
	                },
	                "Add 3rd Party Recipients"
	              )
	            )
	          )
	        ),
	        errorLine,
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 216
	            }
	          },
	          _react2.default.createElement(
	            _IndexPanel2.default,
	            { header: "Personal Info:", __source: {
	                fileName: _jsxFileName,
	                lineNumber: 217
	              }
	            },
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 219
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 220
	                  }
	                },
	                "Customer:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 221
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 221
	                    }
	                  },
	                  firstName + " " + lastName
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 224
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 225
	                  }
	                },
	                "Email:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 226
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 226
	                    }
	                  },
	                  email
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 229
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 230
	                  }
	                },
	                "Phone:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 231
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 231
	                    }
	                  },
	                  phoneNumber
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 234
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 235
	                  }
	                },
	                "SSN:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 236
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 236
	                    }
	                  },
	                  ssn
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Table,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 244
	            }
	          },
	          _react2.default.createElement(
	            "thead",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 245
	              }
	            },
	            _react2.default.createElement(
	              "tr",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 246
	                }
	              },
	              _react2.default.createElement(
	                "th",
	                {
	                  __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 247
	                  }
	                },
	                "Account Title"
	              ),
	              _react2.default.createElement(
	                "th",
	                {
	                  __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 248
	                  }
	                },
	                "Balance"
	              ),
	              _react2.default.createElement("th", {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 249
	                }
	              })
	            )
	          ),
	          _react2.default.createElement(
	            "tbody",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 252
	              }
	            },
	            accounts
	          )
	        ),
	        _react2.default.createElement(Modals.NewAccountModal, { show: showAccountModal,
	          action: this.createAccountModalConfirmed.bind(this),
	          account: this.props.app.accounts.create,
	          onHide: this.close.bind(this),
	          key: 0, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 258
	          }
	        }),
	        _react2.default.createElement(Modals.Add3rdPartyAccountModal, { show: show3rdPartyAccountModal,
	          action: this.create3rdPartyAccountModalConfirmed.bind(this),
	          onHide: this.close.bind(this),
	          key: 1, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 264
	          }
	        }),
	        _react2.default.createElement(Modals.RemoveAccountBookmarkModal, { show: showDeleteAccountModal,
	          account: accountToRemove,
	          action: this.remove3rdPartyAccountModalConfirmed.bind(this),
	          onHide: this.close.bind(this),
	          key: 2, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 269
	          }
	        })
	      );
	    }
	  }]);
	  return MyAccounts;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref3) {
	  var app = _ref3.app;
	
	  return {
	    auth: app.auth,
	    app: app.data,
	    customerId: (0, _readProp2.default)(app, 'auth.user.isSignedIn', false) ? (0, _readProp2.default)(app, 'auth.user.attributes.id', null) : null,
	    error: app.ui.error
	  };
	})(MyAccounts);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MyAccounts.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Add3rdPartyAccountModal = __webpack_require__(707);
	
	Object.defineProperty(exports, 'Add3rdPartyAccountModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Add3rdPartyAccountModal).default;
	  }
	});
	
	var _NewAccountModal = __webpack_require__(713);
	
	Object.defineProperty(exports, 'NewAccountModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NewAccountModal).default;
	  }
	});
	
	var _RemoveAccountModal = __webpack_require__(714);
	
	Object.defineProperty(exports, 'RemoveAccountBookmarkModal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RemoveAccountModal).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 707 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Add3rdPartyAccountModal = undefined;
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/modals/Add3rdPartyAccountModal.js"; /**
	                                                                                                                                         * Created by andrew on 20/02/16.
	                                                                                                                                         */
	
	// import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _ButtonLoader = __webpack_require__(708);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _Input = __webpack_require__(711);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _AuxErrorLabel = __webpack_require__(712);
	
	var _AuxErrorLabel2 = _interopRequireDefault(_AuxErrorLabel);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactRouter = __webpack_require__(210);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactSelect = __webpack_require__(700);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _entities = __webpack_require__(409);
	
	var A = _interopRequireWildcard(_entities);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  (0, _inherits3.default)(Add3rdPartyAccountModal, _React$Component);
	
	  function Add3rdPartyAccountModal() {
	    (0, _classCallCheck3.default)(this, Add3rdPartyAccountModal);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Add3rdPartyAccountModal).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Add3rdPartyAccountModal, [{
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
	
	      var payload = (0, _extends3.default)({}, this.props.data.form);
	
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
	        return _promise2.default.resolve({ options: [] });
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
	        { show: this.props.show, onHide: this.onHide.bind(this), key: 1, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 100
	          }
	        },
	        _react2.default.createElement(
	          BS.Modal.Header,
	          { closeButton: true, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 101
	            }
	          },
	          _react2.default.createElement(
	            BS.Modal.Title,
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 102
	              }
	            },
	            "Add 3rd Party Account"
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Body,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 104
	            }
	          },
	          _react2.default.createElement(
	            "form",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 105
	              }
	            },
	            _react2.default.createElement(
	              "div",
	              { className: "form-group", style: {
	                  display: formErrors ? 'block' : 'none'
	                }, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 106
	                }
	              },
	              _react2.default.createElement(_AuxErrorLabel2.default, {
	                label: "Form:",
	                errors: formErrors.length ? [formErrors] : [],
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 109
	                }
	              })
	            ),
	            _react2.default.createElement(
	              "label",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 115
	                }
	              },
	              "Owner:"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "form-group", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 116
	                }
	              },
	              _react2.default.createElement(_reactSelect2.default, {
	                name: "owner",
	                onBlurResetsInput: false,
	                asyncOptions: this.getOwnersOptions.bind(this),
	                matchProp: "label",
	                onChange: this.handleInput.bind(this, 'owner'),
	                value: (0, _readProp2.default)(this.props.data, 'form.owner', ''),
	                disabled: disabled,
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 117
	                }
	              }),
	              _react2.default.createElement(_AuxErrorLabel2.default, {
	                label: "Owner:",
	                errors: (0, _readProp2.default)(this.props.data, 'errors.owner', []),
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 126
	                }
	              })
	            ),
	            _react2.default.createElement(
	              "label",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 132
	                }
	              },
	              "Account:"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "form-group", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 133
	                }
	              },
	              _react2.default.createElement(_reactSelect2.default, {
	                name: "account",
	                value: (0, _readProp2.default)(this.props.data, 'form.account', ''),
	                disabled: ownersLoading || disabled,
	                clearable: false,
	                searchable: false,
	                options: (0, _readProp2.default)(this.props.data, 'accountsLookup.options', []),
	                onChange: this.handleInput.bind(this, 'account'), __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 134
	                }
	              }),
	              _react2.default.createElement(_AuxErrorLabel2.default, {
	                label: "Owner:",
	                errors: (0, _readProp2.default)(this.props.data, 'errors.account', []),
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 142
	                }
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
	              onChange: this.handleInput.bind(this, 'title'), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 148
	              }
	            }),
	            _react2.default.createElement(_Input2.default, { type: "textarea",
	              className: "account-create-description",
	              label: "Description:",
	              placeholder: "Description",
	              name: "description",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.data, 'form.description', ''),
	              errors: (0, _readProp2.default)(this.props.data, 'errors.description', []),
	              onChange: this.handleInput.bind(this, 'description'), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 158
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Footer,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 169
	            }
	          },
	          _react2.default.createElement(
	            BS.Button,
	            { onClick: this.onHide.bind(this), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 170
	              }
	            },
	            "Cancel"
	          ),
	          _react2.default.createElement(
	            _ButtonLoader2.default,
	            { loading: (0, _readProp2.default)(this.props.data, 'loading', false),
	              type: "submit",
	              bsStyle: "primary",
	              icon: _react2.default.createElement(BS.Glyphicon, { glyph: "plus", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 174
	                }
	              }),
	              disabled: disabled,
	              onClick: this.handleSubmit.bind(this), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 171
	              }
	            },
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
/* 708 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/controls/bootstrap/ButtonLoader.js"; /**
	                                                                                                                                    * Created by andrew on 15/02/16.
	                                                                                                                                    */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var _reactLoader = __webpack_require__(709);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ButtonLoader = function (_React$Component) {
	  (0, _inherits3.default)(ButtonLoader, _React$Component);
	
	  function ButtonLoader() {
	    (0, _classCallCheck3.default)(this, ButtonLoader);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonLoader).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ButtonLoader, [{
	    key: "renderIcon",
	    value: function renderIcon() {
	      var icon = undefined;
	
	      if (this.props.loading) {
	        var spinColor = !this.props.bsStyle || this.props.bsStyle === "default" ? this.props.spinColorDark : this.props.spinColorLight;
	
	        icon = _react2.default.createElement(_reactLoader2.default, (0, _extends3.default)({}, this.props.spinConfig, { color: spinColor, loaded: false, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 43
	          }
	        }));
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
	          }, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 49
	          }
	        },
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
	          bsSize: this.props.bsSize, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 64
	          }
	        },
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
	  icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "heart", __source: {
	      fileName: _jsxFileName,
	      lineNumber: 21
	    }
	  }),
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
	    {
	      __source: {
	        fileName: _jsxFileName,
	        lineNumber: 31
	      }
	    },
	    "Submit"
	  ),
	  style: {}
	};
	exports.default = ButtonLoader;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ButtonLoader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 709 */,
/* 710 */,
/* 711 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/controls/bootstrap/Input.js"; /**
	                                                                                                                             * Created by andrew on 15/02/16.
	                                                                                                                             */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AuthInput = function (_React$Component) {
	  (0, _inherits3.default)(AuthInput, _React$Component);
	
	  function AuthInput() {
	    (0, _classCallCheck3.default)(this, AuthInput);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AuthInput).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(AuthInput, [{
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
	          { className: "auth-error-message has-error", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 28
	            }
	          },
	          this.props.errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              { className: "control-label inline-error-item",
	                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
	                key: i, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 31
	                }
	              },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  top: 2
	                },
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 35
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
	        return _react2.default.createElement("span", {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 48
	          }
	        });
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 54
	          }
	        },
	        _react2.default.createElement(_reactBootstrap.Input, (0, _extends3.default)({}, this.props, {
	          bsStyle: this.props.errors.length ? "error" : null,
	          onChange: this.handleInput.bind(this), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 55
	          }
	        })),
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Input.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 712 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/controls/bootstrap/AuxErrorLabel.js"; /**
	                                                                                                                                     * Created by andrew on 15/02/16.
	                                                                                                                                     */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AuxErrorLabel = function (_React$Component) {
	  (0, _inherits3.default)(AuxErrorLabel, _React$Component);
	
	  function AuxErrorLabel() {
	    (0, _classCallCheck3.default)(this, AuxErrorLabel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AuxErrorLabel).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(AuxErrorLabel, [{
	    key: "render",
	
	
	    //        <Input {...this.props}
	    //   bsStyle={(this.props.errors.length) ? "error" : null}
	    // onChange={this.handleInput.bind(this)} />
	    value: function render() {
	      var _this2 = this;
	
	      var errors = this.props.errors;
	
	
	      if (errors.length) {
	        return _react2.default.createElement(
	          "div",
	          { className: "has-error", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 28
	            }
	          },
	          errors.map(function (err, i) {
	            return _react2.default.createElement(
	              "p",
	              { className: "control-label inline-error-item",
	                style: { paddingLeft: "20px", position: "relative", marginBottom: "28px" },
	                key: i, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 31
	                }
	              },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "exclamation-sign",
	                style: {
	                  position: "absolute",
	                  left: 0,
	                  top: 2
	                },
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 35
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
	        return _react2.default.createElement("span", {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 48
	          }
	        });
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AuxErrorLabel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 713 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NewAccountModal = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/modals/NewAccountModal.js"; /**
	                                                                                                                                 * Created by andrew on 20/02/16.
	                                                                                                                                 */
	
	//import { PageHeader, OverlayTrigger, Modal, Tooltip, Grid, Col, Row, Nav, NavItem, ButtonGroup, Button, Table } from "react-bootstrap";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _Input = __webpack_require__(711);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonLoader = __webpack_require__(708);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _reactRouter = __webpack_require__(210);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _entities = __webpack_require__(409);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  (0, _inherits3.default)(NewAccountModal, _React$Component);
	
	  function NewAccountModal() {
	    (0, _classCallCheck3.default)(this, NewAccountModal);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NewAccountModal).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(NewAccountModal, [{
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      var payload = (0, _extends3.default)({}, this.props.account.form);
	
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
	        { show: this.props.show, onHide: this.props.onHide, key: 0, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 87
	          }
	        },
	        _react2.default.createElement(
	          BS.Modal.Header,
	          { closeButton: true, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 88
	            }
	          },
	          _react2.default.createElement(
	            BS.Modal.Title,
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 89
	              }
	            },
	            "New Account"
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Body,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 91
	            }
	          },
	          _react2.default.createElement(
	            "form",
	            { className: "account-create-form clearfix",
	              onSubmit: this.handleSubmit.bind(this), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 92
	              }
	            },
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "account-create-title",
	              label: "Title",
	              placeholder: "Title",
	              name: "title",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.account, 'form.title', ''),
	              errors: (0, _readProp2.default)(this.props.account, 'errors.title', []),
	              onChange: this.handleInput.bind(this, "title"),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 95
	              }
	            }),
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "account-create-balance",
	              label: "Balance",
	              placeholder: "Balance",
	              name: "balance",
	              addonBefore: _react2.default.createElement(BS.Glyphicon, { glyph: "usd", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 112
	                }
	              }),
	              addonAfter: ".00",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.account, 'form.balance', ''),
	              errors: (0, _readProp2.default)(this.props.account, 'errors.balance', []),
	              onChange: this.handleInput.bind(this, 'balance'),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 106
	              }
	            }),
	            _react2.default.createElement(_Input2.default, { type: "textarea",
	              className: "account-create-description",
	              label: "Description",
	              placeholder: "Description",
	              name: "description",
	              disabled: disabled,
	              value: (0, _readProp2.default)(this.props.account, 'form.description', '') || '',
	              errors: (0, _readProp2.default)(this.props.account, 'errors.description', []),
	              onChange: this.handleInput.bind(this, 'description'),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 121
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          BS.Modal.Footer,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 136
	            }
	          },
	          _react2.default.createElement(
	            BS.Button,
	            { onClick: this.props.onHide, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 137
	              }
	            },
	            "Cancel"
	          ),
	          _react2.default.createElement(
	            _ButtonLoader2.default,
	            { loading: (0, _readProp2.default)(this.props.account, 'loading', false),
	              type: "submit",
	              bsStyle: "primary",
	              icon: _react2.default.createElement(BS.Glyphicon, { glyph: "plus", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 141
	                }
	              }),
	              disabled: disabled,
	              onClick: this.handleSubmit.bind(this),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 138
	              }
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
/* 714 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RemoveAccountBookmarkModal = undefined;
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/modals/RemoveAccountModal.js"; /**
	                                                                                                                                    * Created by andrew on 20/02/16.
	                                                                                                                                    */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRouter = __webpack_require__(210);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactSelect = __webpack_require__(700);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RemoveAccountBookmarkModal = exports.RemoveAccountBookmarkModal = function (_React$Component) {
	  (0, _inherits3.default)(RemoveAccountBookmarkModal, _React$Component);
	
	  function RemoveAccountBookmarkModal() {
	    (0, _classCallCheck3.default)(this, RemoveAccountBookmarkModal);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RemoveAccountBookmarkModal).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RemoveAccountBookmarkModal, [{
	    key: "handleAction",
	    value: function handleAction(evt) {
	      evt.preventDefault();
	      var action = this.props.action;
	      var account = this.props.account;
	
	      var _ref = account || {};
	
	      var id = _ref.id;
	      var accountId = _ref.accountId;
	
	
	      if (action) {
	        action(id || accountId);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var account = this.props.account;
	
	      var _ref2 = account || {};
	
	      var titleRaw = _ref2.title;
	      var descriptionRaw = _ref2.description;
	      var balanceRaw = _ref2.balance;
	      var id = _ref2.id;
	      var accountId = _ref2.accountId;
	
	
	      var entityId = id || accountId;
	
	      var title = titleRaw || '[No title]';
	      var balance = (balanceRaw > 0 && balanceRaw < 1 ? '$0' : '$') + Number(balanceRaw).toFixed(2);
	      var description = descriptionRaw || '[No description]';
	
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        { show: this.props.show, onHide: this.props.onHide, key: 0, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 47
	          }
	        },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 48
	            }
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 49
	              }
	            },
	            "Remove Account Bookmark"
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 51
	            }
	          },
	          _react2.default.createElement(
	            "form",
	            { className: "form-horizontal", __source: {
	                fileName: _jsxFileName,
	                lineNumber: 53
	              }
	            },
	            _react2.default.createElement(
	              BS.FormControls.Static,
	              { label: "Title", labelClassName: "col-xs-2", wrapperClassName: "col-xs-10", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 54
	                }
	              },
	              title
	            ),
	            _react2.default.createElement(
	              BS.FormControls.Static,
	              { label: "Balance", labelClassName: "col-xs-2", wrapperClassName: "col-xs-10", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 55
	                }
	              },
	              balance
	            ),
	            _react2.default.createElement(
	              BS.FormControls.Static,
	              { label: "Description", labelClassName: "col-xs-2", wrapperClassName: "col-xs-10", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 56
	                }
	              },
	              description
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 60
	            }
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: this.props.onHide, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 61
	              }
	            },
	            "Cancel"
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: "danger", eventKey: entityId, onClick: this.handleAction.bind(this), __source: {
	                fileName: _jsxFileName,
	                lineNumber: 62
	              }
	            },
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
/* 715 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/partials/IndexPanel.js"; /**
	                                                                                                                                   * Created by andrew on 17/02/16.
	                                                                                                                                   */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IndexPanel = function (_React$Component) {
	  (0, _inherits3.default)(IndexPanel, _React$Component);
	
	  function IndexPanel() {
	    (0, _classCallCheck3.default)(this, IndexPanel);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(IndexPanel).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(IndexPanel, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Col,
	        { sm: 6, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 21
	          }
	        },
	        _react2.default.createElement(_reactBootstrap.Panel, (0, _extends3.default)({}, this.props, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 22
	          }
	        }))
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
	  children: _react2.default.createElement("span", {
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 16
	    }
	  })
	};
	exports.default = IndexPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "IndexPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 716 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Money = exports.moneyText = undefined;
	
	var _isNan = __webpack_require__(717);
	
	var _isNan2 = _interopRequireDefault(_isNan);
	
	var _jsxFileName = '/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/Money.js'; /**
	                                                                                                                     * Created by andrew on 3/22/16.
	                                                                                                                     */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moneyText = exports.moneyText = function moneyText(amount) {
	
	  if ((0, _isNan2.default)(Number(amount))) {
	    return '';
	  }
	  var absNum = Math.abs(Number(amount) / 100);
	  if (absNum < 0) {
	    return '$(' + absNum.toFixed(2) + ')';
	  }
	  return '$' + absNum.toFixed(2);
	};
	
	var Money = exports.Money = function Money(_ref) {
	  var amount = _ref.amount;
	
	
	  if ((0, _isNan2.default)(Number(amount))) {
	    return _react2.default.createElement('span', {
	      __source: {
	        fileName: _jsxFileName,
	        lineNumber: 21
	      }
	    });
	  }
	  var absNum = Math.abs(Number(amount) / 100);
	  if (absNum < 0) {
	    return _react2.default.createElement(
	      'span',
	      { className: 'text-danger', __source: {
	          fileName: _jsxFileName,
	          lineNumber: 25
	        }
	      },
	      '($$',
	      absNum.toFixed(2),
	      ')'
	    );
	  }
	  return _react2.default.createElement(
	    'span',
	    {
	      __source: {
	        fileName: _jsxFileName,
	        lineNumber: 27
	      }
	    },
	    '$',
	    absNum.toFixed(2)
	  );
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Money.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 717 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(718), __esModule: true };

/***/ },
/* 718 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(719);
	module.exports = __webpack_require__(168).Number.isNaN;

/***/ },
/* 719 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(166);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 720 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Account = undefined;
	
	var _promise = __webpack_require__(390);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/Account.js"; /**
	                                                                                                                  * Created by andrew on 12/02/16.
	                                                                                                                  */
	
	//import { PageHeader } from "react-bootstrap";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactLoader = __webpack_require__(709);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	var _reactSelect = __webpack_require__(700);
	
	var _reactSelect2 = _interopRequireDefault(_reactSelect);
	
	var _Input = __webpack_require__(711);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Money = __webpack_require__(716);
	
	var _TransfersTable = __webpack_require__(721);
	
	var _reactRouter = __webpack_require__(210);
	
	var _IndexPanel = __webpack_require__(715);
	
	var _IndexPanel2 = _interopRequireDefault(_IndexPanel);
	
	var _modals = __webpack_require__(706);
	
	var Modals = _interopRequireWildcard(_modals);
	
	var _entities = __webpack_require__(409);
	
	var A = _interopRequireWildcard(_entities);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _blockedExecution = __webpack_require__(724);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var resetModals = {
	  showAccountModal: false,
	  unsaved: false
	};
	
	var Account = exports.Account = function (_React$Component) {
	  (0, _inherits3.default)(Account, _React$Component);
	
	  function Account() {
	    var _Object$getPrototypeO;
	
	    (0, _classCallCheck3.default)(this, Account);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Account)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	
	    _this.state = (0, _extends3.default)({}, resetModals);
	
	    var ensureTransfers = _this.ensureTransfers.bind(_this);
	    var ensureAccounts = _this.ensureAccounts.bind(_this);
	
	    _this.ensureTransfers = (0, _blockedExecution.blocked)(ensureTransfers, true);
	    _this.ensureAccounts = (0, _blockedExecution.blocked)(ensureAccounts, true);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Account, [{
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
	
	
	      _promise2.default.all([dispatch(A.fetchOwnAccounts(customerId)), dispatch(A.fetchAccount(accountId))]).then(cb, cb);
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
	    key: "createAccountModal",
	    value: function createAccountModal() {
	      this.setState({
	        showAccountModal: true
	      });
	    }
	  }, {
	    key: "createAccountModalConfirmed",
	    value: function createAccountModalConfirmed() {
	      // debugger;
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.setState((0, _extends3.default)({}, resetModals));
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
	        return new _promise2.default(function (rs) {
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
	        { key: "0", __source: {
	            fileName: _jsxFileName,
	            lineNumber: 157
	          }
	        },
	        "Loading.."
	      );
	
	      if (loading) {
	        return spinnerResult;
	      }
	
	      if (!account) {
	        if (errors.length) {
	          return _react2.default.createElement(
	            "h2",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 165
	              }
	            },
	            "Error loading specified account"
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
	        { key: accountId, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 200
	          }
	        },
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 201
	            }
	          },
	          "Account",
	          _react2.default.createElement(
	            _reactBootstrap.Nav,
	            { pullRight: true, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 203
	              }
	            },
	            _react2.default.createElement(
	              _reactBootstrap.ButtonGroup,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 204
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Button,
	                { bsStyle: "link", onClick: this.createAccountModal.bind(this), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 205
	                  }
	                },
	                "Edit"
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 210
	            }
	          },
	          _react2.default.createElement(
	            _IndexPanel2.default,
	            { header: "Account Info:", __source: {
	                fileName: _jsxFileName,
	                lineNumber: 211
	              }
	            },
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 213
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 214
	                  }
	                },
	                "Title:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 215
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 215
	                    }
	                  },
	                  title
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 218
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 219
	                  }
	                },
	                "Balance:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 220
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 220
	                    }
	                  },
	                  _react2.default.createElement(_Money.Money, { amount: balance, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 220
	                    }
	                  })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Row,
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 223
	                }
	              },
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 4, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 224
	                  }
	                },
	                "Description:"
	              ),
	              _react2.default.createElement(
	                _reactBootstrap.Col,
	                { xs: 8, __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 225
	                  }
	                },
	                _react2.default.createElement(
	                  "strong",
	                  {
	                    __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 225
	                    }
	                  },
	                  description
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 231
	            }
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 232
	              }
	            },
	            _react2.default.createElement(
	              "h3",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 233
	                }
	              },
	              "You can transfer money to accounts:"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 236
	            }
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 4, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 237
	              }
	            },
	            _react2.default.createElement(
	              "label",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 238
	                }
	              },
	              "Transfer To:"
	            ),
	            _react2.default.createElement(_reactSelect2.default, {
	              value: (0, _readProp2.default)(this.props.transfer, 'form.account', ''),
	              clearable: true,
	              options: transferTo,
	              disabled: transferDisabled,
	              onChange: this.handleInput.bind(this, 'account'),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 239
	              }
	            })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 3, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 247
	              }
	            },
	            _react2.default.createElement(_Input2.default, { type: "text",
	              className: "",
	              label: "Amount:",
	              placeholder: "Amount",
	              name: "amount",
	              addonBefore: _react2.default.createElement(BS.Glyphicon, { glyph: "usd", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 254
	                }
	              }),
	              addonAfter: ".00",
	              disabled: transferDisabled,
	              value: (0, _readProp2.default)(this.props.transfer, 'form.amount', ''),
	              errors: (0, _readProp2.default)(this.props.transfer, 'errors.amount', []) || [],
	              onChange: this.handleInput.bind(this, 'amount'),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 248
	              }
	            })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 3, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 263
	              }
	            },
	            _react2.default.createElement(_Input2.default, { type: "textarea",
	              className: "",
	              label: "Description:",
	              placeholder: "Description",
	              name: "description",
	              disabled: transferDisabled,
	              value: (0, _readProp2.default)(this.props.transfer, 'form.description', '') || '',
	              errors: (0, _readProp2.default)(this.props.transfer, 'errors.description', []) || [],
	              onChange: this.handleInput.bind(this, 'description'),
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 264
	              }
	            })
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { sm: 2, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 275
	              }
	            },
	            _react2.default.createElement("br", {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 276
	              }
	            }),
	            _react2.default.createElement(
	              _reactBootstrap.Button,
	              { bsStyle: "primary",
	                onClick: this.initiateTransfer.bind(this), __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 277
	                }
	              },
	              "Transfer"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Row,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 282
	            }
	          },
	          _react2.default.createElement(
	            _reactBootstrap.Col,
	            { xs: 12, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 283
	              }
	            },
	            _react2.default.createElement(
	              "h3",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 284
	                }
	              },
	              "Transfer History:"
	            )
	          )
	        ),
	        _react2.default.createElement(_TransfersTable.TransfersTable, { forAccount: accountId, transfers: this.props.transfers[accountId], __source: {
	            fileName: _jsxFileName,
	            lineNumber: 288
	          }
	        }),
	        _react2.default.createElement(Modals.NewAccountModal, { show: showAccountModal,
	          action: this.createAccountModalConfirmed.bind(this),
	          account: { loading: true },
	          onHide: this.close.bind(this),
	          key: 0, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 290
	          }
	        })
	      );
	    }
	  }]);
	  return Account;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var app = _ref.app;
	  var router = _ref.router;
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
/* 721 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TransfersTable = undefined;
	
	var _keys = __webpack_require__(376);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/TransfersTable.js"; /**
	                                                                                                                              * Created by andrew on 3/22/16.
	                                                                                                                              */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLoader = __webpack_require__(709);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactTimeago = __webpack_require__(722);
	
	var _reactTimeago2 = _interopRequireDefault(_reactTimeago);
	
	var _Money = __webpack_require__(716);
	
	var _AccountInfo = __webpack_require__(723);
	
	var _AccountInfo2 = _interopRequireDefault(_AccountInfo);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TransfersTable = exports.TransfersTable = function (_React$Component) {
	  (0, _inherits3.default)(TransfersTable, _React$Component);
	
	  function TransfersTable() {
	    (0, _classCallCheck3.default)(this, TransfersTable);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TransfersTable).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(TransfersTable, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var transfers = _props.transfers;
	      var forAccount = _props.forAccount;
	
	      var _ref = transfers || {};
	
	      var loading = _ref.loading;
	      var data = _ref.data;
	      var errors = _ref.errors;
	
	
	      if (!transfers || loading) {
	        return _react2.default.createElement(
	          "h2",
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 18
	            }
	          },
	          _react2.default.createElement(_reactLoader2.default, { loaded: false, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 18
	            }
	          }),
	          " Loading.."
	        );
	      }
	
	      if ((0, _keys2.default)(errors).length) {
	        return _react2.default.createElement(
	          "div",
	          { className: "text-danger", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 22
	            }
	          },
	          "Errors.."
	        );
	      }
	
	      var currentAccountId = forAccount;
	      var transfersMarkup = data.length ? data.filter(function (_ref2) {
	        var toAccountId = _ref2.toAccountId;
	        var fromAccountId = _ref2.fromAccountId;
	        return fromAccountId === currentAccountId || toAccountId === currentAccountId;
	      }).sort(function (a, b) {
	        return -(a.date - b.date);
	      }).map(function (_ref3) {
	        var amount = _ref3.amount;
	        var fromAccountId = _ref3.fromAccountId;
	        var toAccountId = _ref3.toAccountId;
	        var transactionId = _ref3.transactionId;
	        var _ref3$description = _ref3.description;
	        var description = _ref3$description === undefined ? '' : _ref3$description;
	        var _ref3$date = _ref3.date;
	        var date = _ref3$date === undefined ? null : _ref3$date;
	        var _ref3$status = _ref3.status;
	        var status = _ref3$status === undefined ? '' : _ref3$status;
	
	
	        var isOriginating = fromAccountId == currentAccountId;
	        var directionMarkup = isOriginating ? 'Debit' : 'Credit';
	        var counterAccountMarkup = isOriginating ? _react2.default.createElement(_AccountInfo2.default, { accountId: toAccountId, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 43
	          }
	        }) : _react2.default.createElement(_AccountInfo2.default, { accountId: fromAccountId, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 44
	          }
	        });
	
	        var transferTimestamp = new Date(date);
	        var timeAgoTitle = transferTimestamp.toLocaleDateString() + ' ' + transferTimestamp.toLocaleTimeString();
	
	        return _react2.default.createElement(
	          "tr",
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 49
	            }
	          },
	          _react2.default.createElement(
	            "td",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 50
	              }
	            },
	            _react2.default.createElement(_reactTimeago2.default, { date: date, title: timeAgoTitle, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 50
	              }
	            })
	          ),
	          _react2.default.createElement(
	            "td",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 51
	              }
	            },
	            directionMarkup
	          ),
	          _react2.default.createElement(
	            "td",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 52
	              }
	            },
	            counterAccountMarkup
	          ),
	          _react2.default.createElement(
	            "td",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 53
	              }
	            },
	            _react2.default.createElement(_Money.Money, { amount: amount, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 53
	              }
	            })
	          ),
	          _react2.default.createElement(
	            "td",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 54
	              }
	            },
	            description || '—'
	          ),
	          _react2.default.createElement(
	            "td",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 55
	              }
	            },
	            status || '—'
	          )
	        );
	      }) : _react2.default.createElement(
	        "tr",
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 57
	          }
	        },
	        _react2.default.createElement(
	          "td",
	          { colSpan: 6, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 58
	            }
	          },
	          "No transfers for this account just yet."
	        )
	      );
	
	      return _react2.default.createElement(
	        BS.Table,
	        { striped: true, bordered: true, condensed: true, hover: true, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 62
	          }
	        },
	        _react2.default.createElement(
	          "thead",
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 63
	            }
	          },
	          _react2.default.createElement(
	            "tr",
	            {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 64
	              }
	            },
	            _react2.default.createElement(
	              "th",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 65
	                }
	              },
	              "Date"
	            ),
	            _react2.default.createElement(
	              "th",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 66
	                }
	              },
	              "Type"
	            ),
	            _react2.default.createElement(
	              "th",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 67
	                }
	              },
	              "Other Account"
	            ),
	            _react2.default.createElement(
	              "th",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 68
	                }
	              },
	              "Amount"
	            ),
	            _react2.default.createElement(
	              "th",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 69
	                }
	              },
	              "Description"
	            ),
	            _react2.default.createElement(
	              "th",
	              {
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 70
	                }
	              },
	              "Status"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "tbody",
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 73
	            }
	          },
	          transfersMarkup
	        )
	      );
	    }
	  }]);
	  return TransfersTable;
	}(_react2.default.Component);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TransfersTable.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 722 */,
/* 723 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AccountInfo = undefined;
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/components/AccountInfo.js"; /**
	                                                                                                                           * Created by andrew on 3/22/16.
	                                                                                                                           */
	
	// import * as BS  from "react-bootstrap";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reactLoader = __webpack_require__(709);
	
	var _reactLoader2 = _interopRequireDefault(_reactLoader);
	
	var _entities = __webpack_require__(409);
	
	var A = _interopRequireWildcard(_entities);
	
	var _reactRouter = __webpack_require__(210);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { Money } from '../components/Money';
	
	var AccountInfo = exports.AccountInfo = function (_React$Component) {
	  (0, _inherits3.default)(AccountInfo, _React$Component);
	
	  function AccountInfo() {
	    (0, _classCallCheck3.default)(this, AccountInfo);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AccountInfo).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(AccountInfo, [{
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
	
	
	      var account = entities[accountId];
	
	      if (!account) {
	        return _react2.default.createElement(
	          _reactRouter.Link,
	          { to: "/account/" + accountId, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 36
	            }
	          },
	          accountId,
	          " ",
	          _react2.default.createElement(_reactLoader2.default, { loaded: false, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 36
	            }
	          })
	        );
	      }
	
	      var title = account.title;
	
	
	      return _react2.default.createElement(
	        _reactRouter.Link,
	        { to: "/account/" + accountId, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 41
	          }
	        },
	        title
	      );
	    }
	  }]);
	  return AccountInfo;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref2) {
	  var app = _ref2.app;
	  return {
	    entities: app.data.entities
	  };
	})(AccountInfo);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AccountInfo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 724 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.blocked = undefined;
	
	var _toConsumableArray2 = __webpack_require__(361);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	    var result = useCb ? fn.apply(undefined, (0, _toConsumableArray3.default)(args.concat([cb]))) : fn.apply(undefined, args);
	    if (!useCb) {
	      cb();
	    }
	    return result;
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "blockedExecution.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 725 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignIn = undefined;
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/SignIn.js"; /**
	                                                                                                                 * Created by andrew on 12/02/16.
	                                                                                                                 */
	
	
	//import ButtonLoader from "./ButtonLoader";
	
	//import ButtonLoader from "../controls/bootstrap/ButtonLoader";
	
	//export {bootstrap, materialUi} from "./views";
	
	// bootstrap theme
	//import { EmailSignInForm } from "redux-auth/bootstrap-theme";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reduxRouter = __webpack_require__(273);
	
	var _EmailSignInForm = __webpack_require__(726);
	
	var _EmailSignInForm2 = _interopRequireDefault(_EmailSignInForm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SignIn = exports.SignIn = function (_React$Component) {
	  (0, _inherits3.default)(SignIn, _React$Component);
	
	  function SignIn() {
	    (0, _classCallCheck3.default)(this, SignIn);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SignIn).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(SignIn, [{
	    key: "checkRedirect",
	    value: function checkRedirect(props) {
	      if (props.auth.user.isSignedIn) {
	        props.dispatch((0, _reduxRouter.pushState)(null, props.location.query.next));
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
	      var signInProps = {
	        inputProps: {
	          password: {
	            className: 'hide hidden',
	            style: { display: 'none' },
	            value: null,
	            disabled: true
	          }
	        }
	      };
	
	      return _react2.default.createElement(
	        BS.Well,
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 55
	          }
	        },
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 56
	            }
	          },
	          "Sign In"
	        ),
	        _react2.default.createElement(_EmailSignInForm2.default, (0, _extends3.default)({}, this.props, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 57
	          }
	        }))
	      );
	    }
	  }]);
	  return SignIn;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var
	  //dispatch,
	  routes = _ref.routes;
	  var app = _ref.app;
	  return {
	    //dispatch,
	    routes: routes,
	    auth: app.auth
	  };
	})(SignIn);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SignIn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 726 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/controls/bootstrap/EmailSignInForm.js"; /**
	                                                                                                                                       * Created by andrew on 15/02/16.
	                                                                                                                                       */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _Input = __webpack_require__(711);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonLoader = __webpack_require__(708);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _AuxErrorLabel = __webpack_require__(712);
	
	var _AuxErrorLabel2 = _interopRequireDefault(_AuxErrorLabel);
	
	var _signIn = __webpack_require__(727);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 <Input type="password"
	 label="Password"
	 className="email-sign-in-password"
	 placeholder="Password"
	 disabled={disabled}
	 value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"])}
	 errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"])}
	 onChange={this.handleInput.bind(this, "password")}
	 {...this.props.inputProps.password} />
	  */
	
	var EmailSignInForm = function (_React$Component) {
	  (0, _inherits3.default)(EmailSignInForm, _React$Component);
	
	  function EmailSignInForm() {
	    (0, _classCallCheck3.default)(this, EmailSignInForm);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EmailSignInForm).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(EmailSignInForm, [{
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _signIn.emailSignInFormUpdate)(key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	      var formData = (0, _extends3.default)({}, this.props.auth.signIn.form);
	      this.props.dispatch((0, _signIn.emailSignIn)(formData));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      try {
	        var disabled = this.props.auth.user.isSignedIn || this.props.auth.signIn.loading;
	
	        //const error = read(this.props.auth, 'signIn.errors.email', null);
	        //debugger;
	        var formErrors = (0, _readProp2.default)(this.props.auth, 'signIn.errors.errors', '');
	
	        return _react2.default.createElement(
	          "form",
	          { className: "redux-auth email-sign-in-form clearfix",
	            onSubmit: this.handleSubmit.bind(this), __source: {
	              fileName: _jsxFileName,
	              lineNumber: 70
	            }
	          },
	          _react2.default.createElement(
	            "div",
	            { className: "form-group", style: {
	                display: formErrors ? 'block' : 'none'
	              }, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 73
	              }
	            },
	            _react2.default.createElement(_AuxErrorLabel2.default, {
	              label: "Form:",
	              errors: formErrors.length ? [formErrors] : [],
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 76
	              }
	            })
	          ),
	          _react2.default.createElement(_Input2.default, (0, _extends3.default)({ type: "text",
	            className: "email-sign-in-email",
	            label: "Email",
	            placeholder: "Email",
	            name: "email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signIn.form.email', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signIn.errors.email', []),
	            onChange: this.handleInput.bind(this, "email")
	          }, this.props.inputProps.email, {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 82
	            }
	          })),
	          _react2.default.createElement(
	            _ButtonLoader2.default,
	            (0, _extends3.default)({ loading: (0, _readProp2.default)(this.props.auth, 'signIn.loading', false),
	              type: "submit",
	              icon: _react2.default.createElement(BS.Glyphicon, { glyph: "log-in", __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 95
	                }
	              }),
	              className: "email-sign-in-submit pull-right",
	              disabled: disabled,
	              onClick: this.handleSubmit.bind(this)
	            }, this.props.inputProps.submit, {
	              __source: {
	                fileName: _jsxFileName,
	                lineNumber: 93
	              }
	            }),
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
	exports.default = (0, _reactRedux.connect)(function (_ref) {
	  var app = _ref.app;
	  return { auth: app.auth };
	})(EmailSignInForm);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "EmailSignInForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 727 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emailSignInError = exports.emailSignInComplete = exports.emailSignInStart = exports.emailSignInFormUpdate = undefined;
	exports.emailSignIn = emailSignIn;
	
	var _sessionStorage = __webpack_require__(400);
	
	var _entities = __webpack_require__(409);
	
	var _configure = __webpack_require__(387);
	
	var _api = __webpack_require__(403);
	
	var _actions = __webpack_require__(410);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import root from '../utils/root';
	
	/**
	 * Created by andrew on 26/02/16.
	 */
	var emailSignInFormUpdate = exports.emailSignInFormUpdate = (0, _actions.makeActionCreator)(_ACTION_TYPES2.default.AUTH.SIGN_IN_FORM_UPDATE, 'key', 'value');
	//import { parseResponse } from "../utils/handleFetchResponse";
	//import fetch from "../utils/fetch";
	
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
/* 728 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignUp = undefined;
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/views/SignUp.js"; /**
	                                                                                                                 * Created by andrew on 12/02/16.
	                                                                                                                 */
	
	//import { PageHeader } from "react-bootstrap";
	
	
	//import { EmailSignUpForm } from "redux-auth/bootstrap-theme"
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(197);
	
	var _reduxRouter = __webpack_require__(273);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var BS = _interopRequireWildcard(_reactBootstrap);
	
	var _reactRouter = __webpack_require__(210);
	
	var _EmailSignUpForm = __webpack_require__(729);
	
	var _EmailSignUpForm2 = _interopRequireDefault(_EmailSignUpForm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SignUp = exports.SignUp = function (_React$Component) {
	  (0, _inherits3.default)(SignUp, _React$Component);
	
	  function SignUp() {
	    (0, _classCallCheck3.default)(this, SignUp);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SignUp).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(SignUp, [{
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
	        "div",
	        {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 37
	          }
	        },
	        _react2.default.createElement(
	          _reactBootstrap.PageHeader,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 38
	            }
	          },
	          "Register"
	        ),
	        _react2.default.createElement(
	          BS.Well,
	          {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 41
	            }
	          },
	          _react2.default.createElement(_EmailSignUpForm2.default, {
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 42
	            }
	          })
	        )
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
/* 729 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(292);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(160);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(172);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(173);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(177);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(178);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _jsxFileName = "/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/src/controls/bootstrap/EmailSignUpForm.js"; /**
	                                                                                                                                       * Created by andrew on 15/02/16.
	                                                                                                                                       */
	
	//import auth from "redux-auth";
	
	//import { emailSignUpFormUpdate, emailSignUp } from "redux-auth";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Input = __webpack_require__(711);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ButtonLoader = __webpack_require__(708);
	
	var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);
	
	var _IndexPanel = __webpack_require__(715);
	
	var _IndexPanel2 = _interopRequireDefault(_IndexPanel);
	
	var _formToPayloadMappers = __webpack_require__(730);
	
	var _readProp = __webpack_require__(448);
	
	var _readProp2 = _interopRequireDefault(_readProp);
	
	var _reactBootstrap = __webpack_require__(451);
	
	var _reactRedux = __webpack_require__(197);
	
	var _signUp = __webpack_require__(731);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmailSignUpForm = function (_React$Component) {
	  (0, _inherits3.default)(EmailSignUpForm, _React$Component);
	
	  function EmailSignUpForm() {
	    (0, _classCallCheck3.default)(this, EmailSignUpForm);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EmailSignUpForm).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(EmailSignUpForm, [{
	    key: "getEndpoint",
	    value: function getEndpoint() {
	      return this.props.endpoint || this.props.auth.getIn(["configure", "currentEndpointKey"]) || this.props.auth.getIn(["configure", "defaultEndpointKey"]);
	    }
	  }, {
	    key: "handleInput",
	    value: function handleInput(key, val) {
	      this.props.dispatch((0, _signUp.emailSignUpFormUpdate)(key, val));
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      var formData = (0, _extends3.default)({}, this.props.auth.signUp.form);
	      this.props.dispatch((0, _signUp.emailSignUp)((0, _formToPayloadMappers.customerInfoMap)(formData)));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      var disabled = this.props.auth.user.isSignedIn || this.props.auth.signUp.loading;
	
	      return _react2.default.createElement(
	        "form",
	        { className: "redux-auth email-sign-up-form clearfix",
	          onSubmit: this.handleSubmit.bind(this), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 49
	          }
	        },
	        _react2.default.createElement(
	          _IndexPanel2.default,
	          { header: "basic", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 52
	            }
	          },
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "First name",
	            placeholder: "First name",
	            className: "email-sign-up-email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.fname', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.fname', []),
	            onChange: this.handleInput.bind(this, "fname"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 54
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Last name",
	            placeholder: "Last name",
	            className: "email-sign-up-email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.lname', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.lname', []),
	            onChange: this.handleInput.bind(this, "lname"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 64
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Email",
	            placeholder: "Email",
	            className: "email-sign-up-email",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.email', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.email', []),
	            onChange: this.handleInput.bind(this, "email"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 74
	            }
	          })
	        ),
	        _react2.default.createElement(
	          _IndexPanel2.default,
	          { header: "advanced", __source: {
	              fileName: _jsxFileName,
	              lineNumber: 87
	            }
	          },
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "SSN",
	            placeholder: "SSN",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.ssn', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.ssn', []),
	            onChange: this.handleInput.bind(this, "ssn"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 88
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Phone",
	            placeholder: "Phone",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.phoneNumber', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.phoneNumber', []),
	            onChange: this.handleInput.bind(this, "phoneNumber"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 99
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Address 1",
	            placeholder: "Address 1",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.address1', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.address1', []),
	            onChange: this.handleInput.bind(this, "address1"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 110
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "Address 2",
	            placeholder: "Address 2",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.address2', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.address2', []),
	            onChange: this.handleInput.bind(this, "address2"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 121
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "City",
	            placeholder: "City",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.city', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.city', {}),
	            onChange: this.handleInput.bind(this, "city"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 132
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "State",
	            placeholder: "State",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.state', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.state', []),
	            onChange: this.handleInput.bind(this, "state"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 143
	            }
	          }),
	          _react2.default.createElement(_Input2.default, { type: "text",
	            label: "ZIP",
	            placeholder: "ZIP",
	            className: "email-sign-up-email",
	            bsSize: "small",
	            disabled: disabled,
	            value: (0, _readProp2.default)(this.props.auth, 'signUp.form.zip', ''),
	            errors: (0, _readProp2.default)(this.props.auth, 'signUp.errors.zip', []),
	            onChange: this.handleInput.bind(this, "zip"),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 154
	            }
	          })
	        ),
	        _react2.default.createElement(
	          _ButtonLoader2.default,
	          { loading: (0, _readProp2.default)(this.props.auth, 'signUp.loading', false),
	            type: "submit",
	            className: "email-sign-up-submit pull-right",
	            icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "send", __source: {
	                fileName: _jsxFileName,
	                lineNumber: 172
	              }
	            }),
	            disabled: disabled,
	            onClick: this.handleSubmit.bind(this),
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 169
	            }
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "EmailSignUpForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 730 */
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
	  var address1 = _ref.address1;
	  var address2 = _ref.address2;
	  var city = _ref.city;
	  var //: "Moscow"
	  email = _ref.email;
	  var //: "arevinsky@gmail.com"
	  fname = _ref.fname;
	  var //: "Andrew"
	  lname = _ref.lname;
	  var //: "Revinsky"
	  phoneNumber = _ref.phoneNumber;
	  var //: "+79031570864"
	  state = _ref.state;
	  var //: "Kentucky"
	  zip //: "125315"
	  = _ref.zip;
	  return {
	    "name": {
	      "firstName": fname,
	      "lastName": lname
	    },
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
/* 731 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emailSignUpFormUpdate = emailSignUpFormUpdate;
	exports.emailSignUpStart = emailSignUpStart;
	exports.emailSignUpComplete = emailSignUpComplete;
	exports.emailSignUpError = emailSignUpError;
	exports.emailSignUp = emailSignUp;
	
	var _sessionStorage = __webpack_require__(400);
	
	var _entities = __webpack_require__(409);
	
	var _configure = __webpack_require__(387);
	
	var _api = __webpack_require__(403);
	
	var _signIn = __webpack_require__(727);
	
	var _reduxRouter = __webpack_require__(273);
	
	var _ACTION_TYPES = __webpack_require__(299);
	
	var _ACTION_TYPES2 = _interopRequireDefault(_ACTION_TYPES);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import { parseResponse } from "../utils/handleFetchResponse";
	function emailSignUpFormUpdate(key, value) {
	  return { type: _ACTION_TYPES2.default.AUTH.SIGN_UP_FORM_UPDATE, key: key, value: value };
	} /**
	   * Created by andrew on 11/03/16.
	   */
	
	
	function emailSignUpStart() {
	  return { type: _ACTION_TYPES2.default.AUTH.SIGN_UP_START };
	}
	
	function emailSignUpComplete(user) {
	  return { type: _ACTION_TYPES2.default.AUTH.SIGN_UP_COMPLETE, user: user };
	}
	
	function emailSignUpError(errors) {
	  return { type: _ACTION_TYPES2.default.AUTH.SIGN_UP_ERROR, errors: errors };
	}
	
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
	      return dispatch(emailSignUpError(errors));
	    });
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/andrew/dev/clients/ES/code/event-sourcing-examples/js-frontend/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "signUp.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }
]);
//# sourceMappingURL=app.0161ddc3379424602da9.js.map