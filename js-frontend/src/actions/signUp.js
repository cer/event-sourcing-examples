/**
 * Created by andrew on 11/03/16.
 */
import {
  getEmailSignUpUrl
} from "../utils/sessionStorage";


import { entityReceived } from './entities';
import { storeCurrentEndpointKey } from "./configure";
//import { parseResponse } from "../utils/handleFetchResponse";
import { apiSignUp } from "../utils/api";
import { emailSignIn } from './signIn';

import T from '../constants/ACTION_TYPES';

export function emailSignUpFormUpdate(key, value) {
  return { type: T.AUTH.SIGN_UP_FORM_UPDATE, key, value };
}

export function emailSignUpStart() {
  return { type: T.AUTH.SIGN_UP_START };
}

export function emailSignUpComplete(user) {
  return { type: T.AUTH.SIGN_UP_COMPLETE, user };
}

export function emailSignUpError(errors) {
  return { type: T.AUTH.SIGN_UP_ERROR, errors };
}

export function emailSignUp(body) {
  return dispatch => {
    dispatch(emailSignUpStart());

    return apiSignUp(body)
      .then(({data}) => {
        dispatch(emailSignUpComplete(data));
        const { email } = body;
        return dispatch(emailSignIn({ email }));
      })
      .catch(({errors}) => dispatch(emailSignUpError(errors)));

  };
}