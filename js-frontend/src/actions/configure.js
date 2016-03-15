/**
 * Created by andrew on 26/02/16.
 */
import * as C from "../utils/constants";
import {
  authenticate,
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

import getRedirectInfo from "../utils/parseUrl";
import { pushState } from "redux-router";
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


    return applyConfig({ dispatch, endpoint, settings })
      .then(() => {
        return dispatch(authenticate());
      });

  };
}