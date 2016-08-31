/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';
import createFormReducer from '../createFormReducer';

export const signInReducer = createFormReducer([
  T.AUTH.SIGN_IN_START,
  T.AUTH.SIGN_IN_COMPLETE,
  T.AUTH.SIGN_IN_ERROR,
  T.AUTH.SIGN_IN_FORM_UPDATE
]);
