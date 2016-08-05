/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';
import { combineReducers } from 'redux';


const initialState = {
  loading: false,
  errors: []
};

export const account = (state = { ...initialState }, action ) => {
  switch(action.type) {
    case T.ACCOUNT.SINGLE_START: {
      return {
        ...state,
        loading: true
      };
    }
    case T.ACCOUNT.SINGLE_COMPLETE: {
      return {
        ...initialState
      };
    }
    case T.ACCOUNT.SINGLE_ERROR: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        errors: [ error ]
      };

    }

    default:
      return state;
  }
};
