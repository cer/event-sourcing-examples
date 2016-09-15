/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';
import createFormReducer from '../createFormReducer';

const internalSignInReducer = createFormReducer([
  T.AUTH.SIGN_IN_START,
  T.AUTH.SIGN_IN_COMPLETE,
  T.AUTH.SIGN_IN_ERROR,
  T.AUTH.SIGN_IN_FORM_UPDATE
]);

export const signInReducer = (state, action) => {
  switch (action.type) {
    case T.LOCATION.ENTER: {
      const { location } = action;
      const { pathname } = location;
      if (pathname == '/signin') {
        return internalSignInReducer(state, {
          type: T.AUTH.SIGN_IN_ERROR,
          error: null
        });
      }
      return state;
    }

    default: {
      return internalSignInReducer(state, action);
    }
  }
};
