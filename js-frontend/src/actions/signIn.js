/**
 * Created by andrew on 26/02/16.
 */
import {
  setCurrentEndpointKey,
  getCurrentEndpointKey,
  persistUserData
} from "../utils/sessionStorage";

import { entityReceived } from './entities';
import { storeCurrentEndpointKey } from "./configure";
//import { parseResponse } from "../utils/handleFetchResponse";
//import fetch from "../utils/fetch";

import { apiSignIn } from '../utils/api';

import T from '../constants/ACTION_TYPES';

//import root from '../utils/root';

export function emailSignInFormUpdate(key, value) {
  return { type: T.AUTH.SIGN_IN_FORM_UPDATE, key, value };
}

export function emailSignInStart() {
  return { type: T.AUTH.SIGN_IN_START };
}

export function emailSignInComplete(user) {
  return { type: T.AUTH.SIGN_IN_COMPLETE, user };
}

export function emailSignInError(errors) {
  return { type: T.AUTH.SIGN_IN_ERROR, errors };
}

export function emailSignIn(body) {
  return dispatch => {
    // save previous endpoint key in case of failure
    //var prevEndpointKey = getCurrentEndpointKey();
    
    // necessary for fetch to recognize the response as an api request
    //setCurrentEndpointKey(endpointKey);
    //var currentEndpointKey = getCurrentEndpointKey();
    //
    //dispatch(storeCurrentEndpointKey(currentEndpointKey));

    dispatch(emailSignInStart());

    return apiSignIn(body)
      .then(function(data = {}) {
        const { id } = data;
        if (id ) {
          dispatch(entityReceived(id, data));
        }
        return data;
      })
      .then((user) => {
        persistUserData(user);
        dispatch(emailSignInComplete(user));
      })
      .catch((errors) => {
        // revert endpoint key to what it was before failed request
        //setCurrentEndpointKey(prevEndpointKey);
        //dispatch(storeCurrentEndpointKey(prevEndpointKey));
        return dispatch(emailSignInError(errors));
      });
  };
}