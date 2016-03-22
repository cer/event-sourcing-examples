/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';

const initialState = {
  loading: false,
  errors: {},
  data: []
};

export const transfers = (state = {...initialState}, action) => {
  switch(action.type) {
    
    case T.TRANSFERS.LIST_START: {
      return {
        ...state,
        loading: true
      };
    }
    case T.TRANSFERS.LIST_COMPLETE: {
      const { payload } = action;
      return {
        ...initialState,
        data: [...payload]
      };
    }
    case T.TRANSFERS.LIST_ERROR: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        errors: Object.isSealed(error) ? { message: error } : { ...error }
      };
    }
      
    default:
      return state;
  }
};