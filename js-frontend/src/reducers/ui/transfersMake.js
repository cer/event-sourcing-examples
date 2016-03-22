/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';

const initialState = {
  loading: false,
  form: {},
  errors: {}
};

export const transfersMake = (state = {...initialState}, action) => {
  switch(action.type) {
    case T.TRANSFERS.MAKE_START: {
      return {
        ...state,
        loading: true
      }
    }
    case T.TRANSFERS.MAKE_ERROR: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        errors: Object.isSealed(error) ? { message: error } : { ...error }
      };
    }
    case T.TRANSFERS.MAKE_COMPLETE: {
      return {
        ...initialState
      }
    }
    case T.TRANSFERS.MAKE_FORM_UPDATE: {
      const { key, value } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        },
        errors: {
          ...state.errors,
          [key]: null
        }
      }
    }
      
    default:
      return state;
  }
};