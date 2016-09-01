/**
 * Created by andrew on 3/22/16.
 */

export const createByIdDataReducer = ([KEY_REQUEST, KEY_SUCCESS, KEY_ERROR], next) => (state = {}, action) => {
  switch (action.type) {
    case KEY_REQUEST:
    case KEY_SUCCESS:
    case KEY_ERROR: {
      if (!action.id) {
        debugger;
      }
      if (state.errors) {
        debugger;
      }
      return {
        ...state,
        [action.id]: next(state, action)
      };
    }
    default:
      return state;
  }
};

const createDataReducer = ([KEY_REQUEST, KEY_SUCCESS, KEY_ERROR], payloadActionNameProp = 'payload', payloadStateNameProp = 'data', payloadAssignFn = (k = []) => [...k]) => {

  const initialState = {
    loading: false,
    errors: {},
    [payloadStateNameProp]: payloadAssignFn()
  };

  return function formReducer(state = {...initialState}, action) {
    switch(action.type) {
      case KEY_REQUEST: {
        return {
          ...state,
          loading: true
        }
      }
      case KEY_SUCCESS: {
        const payload = action[payloadActionNameProp];
        return {
          ...initialState,
          [payloadStateNameProp]: payloadAssignFn(payload)
        };
      }
      case KEY_ERROR:
      {
        const {error} = action;
        return {
          ...state,
          loading: false,
          errors: Object.isSealed(error) ? {aggregate: error} : {...error}
        }
      }

      default:
        return state;
    }
  };
};

export default createDataReducer;