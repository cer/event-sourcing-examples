/**
 * Created by andrew on 26/02/16.
 */
import T from '../constants/ACTION_TYPES';

import {
  getCurrentSettings,
  setCurrentSettings,
  getInitialEndpointKey,
  setDefaultEndpointKey,
  setCurrentEndpoint,
  setCurrentEndpointKey,
  retrieveData,
  persistData,
  destroySession,
  persistUserData,
  retrieveUserData,
  retrieveHeaders
} from "../utils/sessionStorage";

import {
  apiGetCurrentUser
} from '../utils/api';

import {entityReceived } from './entities';

export function authenticateStart() {
  return { type: T.AUTH.AUTHENTICATE_START };
}
export function authenticateComplete(user) {
  return { type: T.AUTH.AUTHENTICATE_COMPLETE, user };
}
export function authenticateError(errors) {
  return { type: T.AUTH.AUTHENTICATE_ERROR, errors };
}


export function authenticate() {
  return dispatch => {

    dispatch(authenticateStart());

    const savedUserPromise = new Promise((rs, rj) => {

      const currentHeaders = retrieveHeaders();
      const accessToken = currentHeaders["access-token"];

      if (!accessToken) {
        return rj({ reason: 'no token'});
      }

      const savedUser = retrieveUserData();

      if (savedUser) {
        return rs(savedUser);
      }

      return apiGetCurrentUser().then((userData) => {
        persistUserData(userData);
        dispatch(entityReceived(userData.id, userData));
        rs(userData);
      }, (err) => {
        debugger;
        rj(err);
      });

    });


    return savedUserPromise
      .then(user => {

        dispatch(authenticateComplete(user));

        return user;
      })
      .catch(({reason} = {}) => {

        dispatch(authenticateError([reason]));

        return Promise.resolve({reason});
      });


  };
}