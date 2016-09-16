/**
 * Created by andrew on 26/02/16.
 */
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';
import * as U from '../utils/sessionStorage';
import { apiGetCurrentUser } from '../utils/api';
import { entityReceived } from './entities';

export const authenticateStart = makeActionCreator(T.AUTH.AUTHENTICATE_START);
export const authenticateComplete = makeActionCreator(T.AUTH.AUTHENTICATE_COMPLETE, 'user');
export const authenticateError = makeActionCreator(T.AUTH.AUTHENTICATE_ERROR, 'errors');

export function authenticate(forceReread) {
  return (dispatch) => {

    dispatch(authenticateStart());

    const savedUserPromise = new Promise((rs, rj) => {

      const currentHeaders = U.retrieveHeaders();
      const accessToken = currentHeaders["access-token"];

      if (!accessToken) {
        return rj({ reason: 'no token'});
      }

      const savedUser = U.retrieveUserData();

      if (savedUser && !forceReread) {
        return rs(savedUser);
      }

      return apiGetCurrentUser().then((userData) => {
        U.persistUserData(userData);
        dispatch(entityReceived(userData.id, userData));
        rs(userData);
      }, (err) => {
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