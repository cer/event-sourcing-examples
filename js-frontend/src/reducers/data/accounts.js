/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';
import { combineReducers } from 'redux';
import createFormReducer from '../createFormReducer';

const ownAccountsReducer = (state = [], action ) => {
  switch (action.type) {
    case T.ACCOUNTS.LIST_COMPLETE: {
      const { payload = [] } = action;
      //const accounts = Object.keys(payload).map(key => payload[key]);
      return [
        ...payload
      ];
    }
    default: return state;
  }
};

const otherAccountsReducer = (state = [], action ) => {
  switch (action.type) {
    case T.AUTH.AUTHENTICATE_COMPLETE:
    case T.AUTH.SIGN_IN_COMPLETE: {
      const { user } = action;
      const { toAccounts = [] } = user;
      return otherAccountsReducer(state, {
        type: T.ACCOUNTS.LIST_REF_COMPLETE,
        payload: toAccounts
      });
    }

    case T.ACCOUNTS.LIST_REF_COMPLETE: {
      const { payload = {} } = action;
      const accounts = Object.keys(payload).map(key => payload[key]);
      return [
        ...accounts
      ];
    }

    default: return state;
  }
};


const createAccountReducer = createFormReducer([
  T.ACCOUNTS.CREATE_START,
  T.ACCOUNTS.CREATE_COMPLETE,
  T.ACCOUNTS.CREATE_ERROR,
  T.ACCOUNTS.CREATE_FORM_UPDATE
]);

const editAccountReducer = createFormReducer([
  T.ACCOUNTS.EDIT_START,
  T.ACCOUNTS.EDIT_COMPLETE,
  T.ACCOUNTS.EDIT_ERROR,
  T.ACCOUNTS.EDIT_FORM_UPDATE
]);

export const accounts = combineReducers({
  own: ownAccountsReducer,
  other: otherAccountsReducer,
  create: createAccountReducer,
  edit: editAccountReducer
});

