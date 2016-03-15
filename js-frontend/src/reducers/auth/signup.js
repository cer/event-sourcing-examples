/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';


const signUpInitialState = {
  loading: false,
  errors: null,
  form: {}
};

export const signUpReducer = (state = { ...signUpInitialState, form: {...signUpInitialState.form }}, action) => {
  switch(action.type) {
    case T.AUTH.SIGN_UP_START:
      return {
        ...state,
        loading: true
      };
    case T.AUTH.SIGN_UP_COMPLETE:
      return {
        ...signUpInitialState,
        form: { ...signUpInitialState.form }
      };
    case T.AUTH.SIGN_UP_ERROR:
      const { errors } = action;
      return {
        ...state,
        loading: false,
        errors
      };
    case T.AUTH.SIGN_UP_FORM_UPDATE:
      const { key, value } = action;
      return {
        ...state,
        errors: {
          ...(state.errors || {}),
          [key]: []
        },
        form: {
          ...state.form,
          [key]: value
        }
      };
    default: return state;
  }
};