/**
 * Created by andrew on 26/02/16.
 */
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';
import { persistUserData } from "../utils/sessionStorage";
import { entityReceived } from './entities';
import { apiSignIn } from '../utils/api';

export const emailSignInFormUpdate = makeActionCreator(T.AUTH.SIGN_IN_FORM_UPDATE, 'key', 'value');
export const emailSignInStart = makeActionCreator(T.AUTH.SIGN_IN_START);
export const emailSignInComplete = makeActionCreator(T.AUTH.SIGN_IN_COMPLETE, 'user');
export const emailSignInError = makeActionCreator(T.AUTH.SIGN_IN_ERROR, 'error');

export function emailSignIn(body) {
  return dispatch => {

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