/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';
import { combineReducers } from 'redux';

const initialState = {
  own: [],
  other: [],
  create: {
    form: {},
    loading: false,
    errors: {}
  }
};

const nodeInitialState = {
  loading: false,
  data: {}
};

const ownAccountsReducer = (state = [], action ) => {
  switch (action.type) {
    default: return state;
  }
};
const otherAccountsReducer = (state = [], action ) => {
  switch (action.type) {
    default: return state;
  }
};

const createAccountInitialState = {
  form: {},
  loading: false,
  errors: {}
};
const createAccountReducer = (state = { ...createAccountInitialState }, action ) => {
  switch(action.type) {
    case T.ACCOUNTS.CREATE_START: {
      return {
        ...state,
        loading: true
      };
    }
    case T.ACCOUNTS.CREATE_COMPLETE: {
      return {
        ...createAccountInitialState
      };
    }
    case T.ACCOUNTS.CREATE_ERROR: {
      const { error = {} } = action;
      return {
        ...state,
        loading: false,
        errors: {
          ...error
        }
      };

    }
    case T.ACCOUNTS.CREATE_FORM_UPDATE: {
      const { key, value } = action;
      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        },
        errors: {
          ...state.errors,
          [key]: []
        }
      };
    }
    default:
      return state;
  }
};

export const accounts = combineReducers({
  own: ownAccountsReducer,
  other: otherAccountsReducer,
  create: createAccountReducer
});


//export const accounts = (state = {...initialState}, action) => {
//  switch(action.type) {
//    case T.ACCOUNTS.LIST_START:
//    case T.ACCOUNTS.LIST_COMPLETE:
//    case T.ACCOUNTS.LIST_ERROR:
//
//    //case T.ACCOUNTS.LIST_REF_START:
//    case T.AUTH.AUTHENTICATE_COMPLETE:
//    case T.AUTH.SIGN_IN_COMPLETE: {
//      const { user } = action;
//      const { toAccounts = [] } = user;
//      return accounts(state, {
//        type: T.ACCOUNTS.LIST_REF_COMPLETE, data: toAccounts
//      });
//    }
//
//    case T.ACCOUNTS.LIST_REF_COMPLETE: {
//      const { data = [] } = action;
//      return {
//        ...state,
//        other: [
//          ...data
//        ]
//      };
//    }
//    //case T.ACCOUNTS.LIST_REF_ERROR:
//
//
//
//    case T.ACCOUNTS.CREATE_REF_START:
//    case T.ACCOUNTS.CREATE_REF_COMPLETE:
//    case T.ACCOUNTS.CREATE_REF_ERROR:
//    case T.ACCOUNTS.CREATE_REF_FORM_UPDATE:
//
//    default:
//      return state;
//  }
//};