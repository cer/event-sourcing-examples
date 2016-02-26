/**
 * Created by andrew on 26/02/16.
 */

import * as C from "./constants";
import fetch from "./fetch";

import parseEndpointConfig from "./parseEndpointConfig";
import { setEndpointKeys } from "../actions/configure";

import {
  getCurrentSettings,
  setCurrentSettings,
  getInitialEndpointKey,
  setDefaultEndpointKey,
  setCurrentEndpoint,
  setCurrentEndpointKey,
  retrieveData,
  persistData
} from "./sessionStorage";

// can't use "window" with node app
var root = Function("return this")() || (42, eval)("this");

const defaultSettings = {
  //proxyIf:            function() { return false; },
  //proxyUrl:           "/proxy",
  forceHardRedirect:  false,
  storage:            "cookies",
  cookieExpiry:       14,
  cookiePath:         "/",
  initialCredentials: null,

  passwordResetSuccessUrl: function() {
    return root.location.href;
  },

  confirmationSuccessUrl:  function() {
    return root.location.href;
  },

  tokenFormat: {
    "access-token": "{{ access-token }}"
    //"token-type":   "Bearer",
    //client:         "{{ client }}",
    //expiry:         "{{ expiry }}",
    //uid:            "{{ uid }}"
  },

  parseExpiry: function(headers){
    // convert from ruby time (seconds) to js time (millis)
    return (parseInt(headers["expiry"], 10) * 1000) || null;
  },

  handleLoginResponse: function(resp) {
    return resp.data;
  },

  handleAccountUpdateResponse: function(resp) {
    return resp.data;
  },

  handleTokenValidationResponse: function(resp) {
    return resp.data;
  }
};


// save session configuration
export function applyConfig({ dispatch, endpoint={}, settings={}, reset=false } = {}) {
  let currentEndpointKey;

  if (reset) {
    resetConfig();
  }

  if (settings.initialCredentials) {
    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
  }

  setCurrentSettings({ ...defaultSettings, ...settings });

  let { defaultEndpointKey, currentEndpoint } = parseEndpointConfig(
    endpoint, getInitialEndpointKey()
  );

  if (!currentEndpointKey) {
    currentEndpointKey = defaultEndpointKey;
  }

  // persist default config key with session storage
  setDefaultEndpointKey(defaultEndpointKey);
  setCurrentEndpoint(currentEndpoint);

  dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey));
  setCurrentEndpointKey(currentEndpointKey);


  if (getCurrentSettings().initialCredentials) {

    // skip initial headers check (i.e. check was already done server-side)
    let { user, headers, config } = getCurrentSettings().initialCredentials;
    persistData(C.SAVED_CREDS_KEY, headers);
    return Promise.resolve(user);
  }

  const savedCreds = retrieveData(C.SAVED_CREDS_KEY);

  if (savedCreds) {
    // verify session credentials with API
    debugger;
    return fetch(savedCreds)
  }

  return Promise.reject({ reason: "No credentials." })

}