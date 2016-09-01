/**
 * Created by andrew on 26/02/16.
 */

import * as C from "./constants";
import root from './root';

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
  persistData,
  destroySession
} from "./sessionStorage";

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

  if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
    return Promise.resolve({blank: true});
  }

  let currentEndpointKey;

  if (reset) {
    resetConfig();
  }

  if (settings.initialCredentials) {
    currentEndpointKey = settings.initialCredentials.currentEndpointKey;
  }

  setCurrentSettings({ ...defaultSettings, ...settings });

  const currentHeaders = retrieveData(C.SAVED_CREDS_KEY) || {};

  const accessToken = currentHeaders["access-token"];

  //if (authRedirectHeaders && authRedirectHeaders["access-token"]) {
  if (!accessToken) {
    destroySession();
  }


  let { defaultEndpointKey, currentEndpoint } = parseEndpointConfig(
    endpoint, getInitialEndpointKey()
  );

  if (!currentEndpointKey) {
    currentEndpointKey = defaultEndpointKey;
  }

  // persist default config key with session storage
  setDefaultEndpointKey(defaultEndpointKey);
  setCurrentEndpoint(currentEndpoint);

  dispatch(setEndpointKeys(
    Object.keys(currentEndpoint),
    currentEndpointKey,
    defaultEndpointKey));

  setCurrentEndpointKey(currentEndpointKey);



  return Promise.resolve();

}