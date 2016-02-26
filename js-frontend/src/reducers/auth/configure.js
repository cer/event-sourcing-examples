/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';

const configInitialState = {
  loading: true,
  errors: null,
  config: null
};

export const configReducer = (state = {...configInitialState}, action) => {
  switch(action.type) {
    case T.AUTH.CONFIGURE_START:
      return {
        ...state,
        loading: true
      };
    case T.AUTH.CONFIGURE_COMPLETE:
      const { config } = action;
      return {
        ...state,
        loading: false,
        errors: null,
        config
      };
    case T.AUTH.CONFIGURE_ERROR:
      const { errors } = action;
      return {
        ...state,
        loading: false,
        errors
      };
    default:
      return state;
  }
};