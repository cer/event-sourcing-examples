/**
 * Created by andrew on 26/02/16.
 */

import * as C from "./constants";
import parseEndpointConfig from "./parseEndpointConfig";
import { setEndpointKeys } from "../actions/configure";

import {
  setCurrentSettings,
  getInitialEndpointKey,
  setDefaultEndpointKey,
  setCurrentEndpoint,
  setCurrentEndpointKey,
  retrieveData,
  destroySession
} from "./sessionStorage";

const defaultSettings = {
  forceHardRedirect:  false,
  storage:            "cookies",
  cookieExpiry:       14,
  cookiePath:         "/",
  initialCredentials: null,

  tokenFormat: {
    "access-token": "{{ access-token }}"
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