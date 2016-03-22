/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';
import createFormReducer from '../createFormReducer';

export const signUpReducer = createFormReducer([
  T.AUTH.SIGN_UP_START,
  T.AUTH.SIGN_UP_COMPLETE,
  T.AUTH.SIGN_UP_ERROR,
  T.AUTH.SIGN_UP_FORM_UPDATE
]);
