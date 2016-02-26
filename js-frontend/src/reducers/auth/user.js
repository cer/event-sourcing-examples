/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';

const userInitalState = {
  attributes: null,
  isSignedIn: false
};

export const userReducer = (state = {...userInitalState}, action) => {
  switch(action.type) {
    case T.AUTH.AUTHENTICATE_COMPLETE: {
      const { user } = action;
      return {...state,
        attributes: user,
        isSignedIn: true
      };
    }

    case T.AUTH.SIGN_IN_COMPLETE: {

      const { user } = action;
      return {...state,
        attributes: user.data,
        isSignedIn: true
      };
    }
    case T.AUTH.SIGN_OUT_COMPLETE:
    case T.AUTH.AUTHENTICATE_ERROR:
      return {
        ...userInitalState
      };
    default: return state;
  }
};