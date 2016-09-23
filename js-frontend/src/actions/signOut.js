/**
 * Created by andrew on 11/03/16.
 */
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';
import { destroySession } from "../utils/sessionStorage";

export const signOutStart = makeActionCreator(T.AUTH.SIGN_OUT_START);
export const signOutComplete = makeActionCreator(T.AUTH.SIGN_OUT_COMPLETE);

export const signOut = () =>
  dispatch => {
    dispatch(signOutStart());

    destroySession();

    dispatch(signOutComplete());
  };