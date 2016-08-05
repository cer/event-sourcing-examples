/**
 * Created by andrew on 11/03/16.
 */
import {
  getEmailSignInUrl,
  setCurrentEndpointKey,
  getCurrentEndpointKey
} from "../utils/sessionStorage";

import {destroySession} from "../utils/sessionStorage";


import { entityReceived } from './entities';
import { storeCurrentEndpointKey } from "./configure";
import { parseResponse } from "../utils/handleFetchResponse";
import fetch from "../utils/fetch";

import T from '../constants/ACTION_TYPES';

import root from '../utils/root';

export function signOutStart() {
  return { type: T.AUTH.SIGN_OUT_START };
}

export function signOutComplete() {
  return { type: T.AUTH.SIGN_OUT_COMPLETE };
}

export function signOut() {
  return dispatch => {

    dispatch(signOutStart());

    destroySession();

    dispatch(signOutComplete());

  };
}