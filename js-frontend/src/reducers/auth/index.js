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

const authInitialState = {
  loading: false,
  valid: false,
  errors: null
};
export const authReducer = (state = {...authInitialState}, action) => {
  switch(action.type) {
    case T.AUTH.AUTHENTICATE_START: return {...state, loading: true };
    case T.AUTH.AUTHENTICATE_COMPLETE: return {...state, loading: false,
      errors: null,
      valid: true};
    case T.AUTH.AUTHENTICATE_ERROR: return {...state, loading: false,
      errors: "Invalid token",
      valid: false};

    default: return state;
  }
};

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

const userInitalState = {
  attributes: null,
  isSignedIn: false
};

export const userReducer = (state = {...userInitalState}, action) => {
  switch(action.type) {
    case T.AUTH.AUTHENTICATE_COMPLETE:
      const { user } = action;
      return {...state,
        attributes: user,
        isSignedIn: true
      };
    case T.AUTH.SIGN_IN_COMPLETE:
      const { user } = action;
      return {...state,
        attributes: user.data,
        isSignedIn: true
      };
    case T.AUTH.SIGN_OUT_COMPLETE:
    case T.AUTH.AUTHENTICATE_ERROR:
      return {
        ...userInitalState
      };
    default: return state;
  }
};
