/**
 * Created by andrew on 11/03/16.
 */
import { push } from 'redux-router';
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';
import { apiSignUp } from "../utils/api";
import { emailSignInFormUpdate } from './signIn';

export const emailSignUpFormUpdate = makeActionCreator(T.AUTH.SIGN_UP_FORM_UPDATE, 'key', 'value');
export const emailSignUpStart = makeActionCreator(T.AUTH.SIGN_UP_START);
export const emailSignUpComplete = makeActionCreator(T.AUTH.SIGN_UP_COMPLETE, 'user');
export const emailSignUpError = makeActionCreator(T.AUTH.SIGN_UP_ERROR, 'error');


export function emailSignUp(body) {
  return dispatch => {
    dispatch(emailSignUpStart());

    return apiSignUp(body)
      .then(({ data }) => {
        dispatch(emailSignUpComplete(data));
        const { email } = body;
        dispatch(emailSignInFormUpdate('email', email));
        dispatch(push('/signin'));
      })
      .catch(({ errors }) => {
        dispatch(emailSignUpError({
          errors
        }))
      });

  };
}