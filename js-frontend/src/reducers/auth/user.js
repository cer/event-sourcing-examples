/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';

const initalState = {
  attributes: null,
  isSignedIn: false
};

export const userReducer = (state = {...initalState}, action) => {
  switch(action.type) {
    case T.AUTH.AUTHENTICATE_COMPLETE:
    case T.AUTH.SIGN_IN_COMPLETE: {
      const { user } = action;
      return {...state,
        attributes: user,
        isSignedIn: !!user
      };
    }
    case T.AUTH.SIGN_OUT_COMPLETE:
    case T.AUTH.AUTHENTICATE_ERROR:
      return {
        ...initalState
      };
    default: return state;
  }
};