/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';
import createFormReducer from '../createFormReducer';

export const internalSignUpReducer = createFormReducer([
  T.AUTH.SIGN_UP_START,
  T.AUTH.SIGN_UP_COMPLETE,
  T.AUTH.SIGN_UP_ERROR,
  T.AUTH.SIGN_UP_FORM_UPDATE
]);


export const signUpReducer = (state, action) => {
  switch (action.type) {
    case T.LOCATION.ENTER: {
      const { location } = action;
      const { pathname } = location;
      if (pathname == '/register') {
        return internalSignUpReducer(state, {
          type: T.AUTH.SIGN_UP_ERROR,
          error: null
        });
      }
      return state;
    }

    default: {
      return internalSignUpReducer(state, action);
    }
  }
};
