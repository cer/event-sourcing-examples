/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';

const initialState = {
  loading: false,
  valid: false,
  errors: null
};

export const authReducer = (state = {...initialState}, action) => {
  switch(action.type) {
    case T.AUTH.AUTHENTICATE_START:
      return {
        ...state,
        loading: true
      };

    case T.AUTH.AUTHENTICATE_COMPLETE:
      return {
        ...state,
        loading: false,
        errors: null,
        valid: true
      };

    case T.AUTH.AUTHENTICATE_ERROR:
      return {
        ...state,
        loading: false,
        errors: "Invalid token",
        valid: false
      };

    default: return state;
  }
};