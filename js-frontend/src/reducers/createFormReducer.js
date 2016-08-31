/**
 * Created by andrew on 3/22/16.
 */

const createFormReducer = ([KEY_REQUEST, KEY_SUCCESS, KEY_ERROR, KEY_UPDATE]) => {

  const initialState = {
    loading: false,
    form: {},
    errors: {}
  };

  return function formReducer(state = {...initialState}, action) {
    switch(action.type) {
      case KEY_REQUEST: {
        return {
          ...state,
          loading: true
        }
      }
      case KEY_ERROR: {
        const { error } = action;
        return {
          ...state,
          loading: false,
          errors: error
        }
      }
      case KEY_SUCCESS: {
        return {
          ...initialState
        }
      }
      case KEY_UPDATE: {
        const { key, value } = action;
        return {
          ...state,
          form: {
            ...state.form,
            [key]: value
          },
          errors: {
            ...state.errors,
            aggregate: null,
            [key]: null
          }
        }
      }

      default:
        return state;
    }
  };
};

export default createFormReducer;