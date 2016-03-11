/**
 * Created by andrew on 26/02/16.
 */
import * as C from "../utils/constants";
import {
  authenticateStart,
  authenticateComplete,
  authenticateError
} from "./authenticate";

import {
  retrieveData,
} from "../utils/sessionStorage";


import {applyConfig} from "../utils/clientSettings";

//import {
//  showFirstTimeLoginSuccessModal,
//  showFirstTimeLoginErrorModal,
//  showPasswordResetSuccessModal,
//  showPasswordResetErrorModal
//} from "./ui";

import {destroySession} from "../utils/sessionStorage";
import getRedirectInfo from "../utils/parseUrl";
import {pushState} from "redux-router";
import root from '../utils/root';

export const SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";
export const STORE_CURRENT_ENDPOINT_KEY = "STORE_CURRENT_ENDPOINT_KEY";

export function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
  return { type: SET_ENDPOINT_KEYS, endpoints, currentEndpointKey, defaultEndpointKey };
}

export function storeCurrentEndpointKey(currentEndpointKey) {
  return { type: STORE_CURRENT_ENDPOINT_KEY, currentEndpointKey };
}

export function configure(endpoint={}, settings={}) {

  return dispatch => {

    // don't render anything for OAuth redirects
    if (settings.currentLocation && settings.currentLocation.match(/blank=true/)) {
      return Promise.resolve({blank: true});
    }

    dispatch(authenticateStart());

    let promise,
      firstTimeLogin,
      mustResetPassword,
      user,
      headers;

    //let { authRedirectPath, authRedirectHeaders} = getRedirectInfo(root.location);

    // TODO: FiX!
    //if (authRedirectPath) {
    //  dispatch(pushState(null, authRedirectPath));
    //}

    const currentHeaders = retrieveData(C.SAVED_CREDS_KEY) || {};

    //if (authRedirectHeaders && authRedirectHeaders["access-token"]) {
    if (currentHeaders && currentHeaders["access-token"]) {

      //settings.initialCredentials = {
      //  ...(settings.initialCredentials || {}),
      //  ...authRedirectHeaders,
      //  ...currentHeaders
      //};
    } else {
      destroySession();
    }

    // if tokens were invalidated by server, make sure to clear browser
    // credentials
    //if (!settings.initialCredentials) {
    //  destroySession();
    //}

    promise = Promise.resolve(applyConfig({ dispatch, endpoint, settings }));

    return promise
      .then(user => {

        dispatch(authenticateComplete(user));

        return user;
      })
      .catch(({reason} = {}) => {

        dispatch(authenticateError([reason]));

        //if (firstTimeLogin) {
        //  dispatch(showFirstTimeLoginErrorModal());
        //}
        //
        //if (mustResetPassword) {
        //  dispatch(showPasswordResetErrorModal());
        //}

        return Promise.resolve({reason});
      });

  };
}