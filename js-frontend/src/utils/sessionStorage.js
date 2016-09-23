/**
 * Created by andrew on 26/02/16.
 */
import Cookies from 'js-cookie';
import * as C from "./constants";
import root from './root';

// stateful variables that persist throughout session
const authState = {
  currentSettings:    {},
  currentEndpoint:    {},
  defaultEndpointKey: 'default'
};

const memoryStorage = {};

function clean(obj) {
  Object.keys(obj).forEach(k => {
    delete obj[k];
  });
  return obj;
}

export function setCurrentSettings (s) {
  authState.currentSettings = s;
}

export function setCurrentEndpoint (e) {
  authState.currentEndpoint = e;
}


/**
 * @deprecated
 * @param k
 */
export function setCurrentEndpointKey (k) {
  persistData(C.SAVED_CONFIG_KEY, k || getDefaultEndpointKey());
}

/**
 * @deprecated
 * @param k
 */
export function setDefaultEndpointKey (k) {
  persistData(C.DEFAULT_CONFIG_KEY, k);
}

export function getDefaultEndpointKey () {
  return retrieveData(C.DEFAULT_CONFIG_KEY);
}

// reset stateful variables
export function resetConfig () {
  clean(authState);
  authState.currentSettings    = {};
  authState.currentEndpoint    = {};
  destroySession();
}


export function destroySession () {

  ([
    C.SAVED_CREDS_KEY,
    C.SAVED_CONFIG_KEY,
    C.SAVED_USER_INFO
  ]).forEach(key => {
    // kill all local storage keys
    if (root.localStorage) {
      root.localStorage.removeItem(key);
    }

    // remove from base path in case config is not specified
    Cookies.remove(key, {
      path: authState.currentSettings.cookiePath || "/"
    });
  });

  clean(memoryStorage);
}

function unescapeQuotes (val) {
  return val && val.replace(/("|')/g, "");
}

export function getInitialEndpointKey () {
  return unescapeQuotes(
    Cookies.get(C.SAVED_CONFIG_KEY) ||
    (root.localStorage && root.localStorage.getItem(C.SAVED_CONFIG_KEY))
  );
}

export function isApiRequest(url) {
  return true;
}

export function getTokenFormat() {
  return authState.currentSettings.tokenFormat;
}

export const persistUserData = (user) => {
  memoryStorage[C.SAVED_USER_INFO] = user;
};

export const retrieveUserData = () =>{
  return memoryStorage[C.SAVED_USER_INFO];
};

export function retrieveHeaders() {
  return retrieveData(C.SAVED_CREDS_KEY) || {};
}

export function persistData (key, val) {
  val = root.JSON.stringify(val);

  switch (authState.currentSettings.storage) {
    case "localStorage":
      root.localStorage.setItem(key, val);
      break;

    default:
      Cookies.set(key, val, {
        expires: authState.currentSettings.cookieExpiry,
        path:    authState.currentSettings.cookiePath
      });
      break;
  }
}

export function retrieveData (key) {
  let val = null;

  switch (authState.currentSettings.storage) {

    case "localStorage":
      val = root.localStorage && root.localStorage.getItem(key);
      break;

    default:
      val = Cookies.get(key);
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
