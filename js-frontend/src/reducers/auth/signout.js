/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';

const signOutInitialState = {
  loading: false,
  errors: null
};

export const signOutReducer = (state = {...signOutInitialState}, action) => {
  switch(action.type) {
    case T.AUTH.SIGN_OUT_START:
      return {
        ...state,
        loading: true
      };
    case T.AUTH.SIGN_OUT_COMPLETE:
      return {
        ...state,
        loading: false,
        errors: null
      };
    default: return state;
  }
};
