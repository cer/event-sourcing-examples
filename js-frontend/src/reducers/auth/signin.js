/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';


const signInInitialState = {
  loading: false,
  errors: null,
  form: {}
};
export const signInReducer = (state = { ...signInInitialState, form: {...signInInitialState.form }}, action) => {
  switch(action.type) {
    case T.AUTH.SIGN_IN_START:
      return {
        ...state,
        loading: true
      };
    case T.AUTH.SIGN_IN_COMPLETE:
      return {
        ...signInInitialState,
        form: { ...signInInitialState.form }
      };
    case T.AUTH.SIGN_IN_ERROR:
      const { errors } = action;
      return {
        ...state,
        loading: false,
        errors
      };
    case T.AUTH.SIGN_IN_FORM_UPDATE:
      const { key, value } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        }
      };
    default: return state;
  }
};