/**
 * Created by andrew on 27/02/16.
 */
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';
import * as api from '../utils/api';
import { authenticate } from './authenticate';

export const entityRequested = makeActionCreator(T.ENTITIES.REQUESTED, 'id');
export const entityReceived = makeActionCreator(T.ENTITIES.RECEIVED, 'id', 'entity');

export const accountsListRequested = makeActionCreator(T.ACCOUNTS.LIST_START);
export const accountsListReceived = makeActionCreator(T.ACCOUNTS.LIST_COMPLETE, 'payload');
export const accountsListError = makeActionCreator(T.ACCOUNTS.LIST_ERROR, 'error');

//export const accountsRefListRequested = makeActionCreator(T.ACCOUNTS.LIST_REF_START, 'id');
export const accountsRefListReceived = makeActionCreator(T.ACCOUNTS.LIST_REF_COMPLETE, 'payload');
//export const accountsRefListError = makeActionCreator(T.ACCOUNTS.LIST_REF_ERROR, 'id');

export const accountCreateStart = makeActionCreator(T.ACCOUNTS.CREATE_START);
export const accountCreateComplete = makeActionCreator(T.ACCOUNTS.CREATE_COMPLETE, 'accountId');
export const accountCreateError = makeActionCreator(T.ACCOUNTS.CREATE_ERROR, 'error');
export const accountCreateFormUpdate = makeActionCreator(T.ACCOUNTS.CREATE_FORM_UPDATE, 'key', 'value');

export const accountRefCreateStart = makeActionCreator(T.ACCOUNTS.CREATE_REF_START, 'data');
export const accountRefCreateComplete = makeActionCreator(T.ACCOUNTS.CREATE_REF_COMPLETE, 'data');
export const accountRefCreateError = makeActionCreator(T.ACCOUNTS.CREATE_REF_ERROR, 'error');
export const accountRefCreateFormUpdate = makeActionCreator(T.ACCOUNTS.CREATE_REF_FORM_UPDATE,  'key', 'value');

export const accountRequested = makeActionCreator(T.ACCOUNT.SINGLE_START);
export const accountComplete = makeActionCreator(T.ACCOUNT.SINGLE_COMPLETE, 'payload');
export const accountError = makeActionCreator(T.ACCOUNT.SINGLE_ERROR, 'error');


export function accountsList(userId) {
  return dispatch => {
    dispatch(accountsListRequested());
    return api.apiRetrieveAccounts(userId)
      .then(list => {
        dispatch(accountsListReceived(list));
      })
      .catch(err => {
        dispatch(accountsListError(err));
        return Promise.resolve({ error: err });
      })
  };
}

export function accountCreate(customerId, payload) {
  return dispatch => {
    dispatch(accountCreateStart());
    return api.apiCreateAccount(customerId, payload)
      .then(({ accountId }) => {
        dispatch(accountCreateComplete({
          id: accountId,
          ...payload
        }));
        dispatch(entityReceived(accountId, payload));
        return dispatch(authenticate(true));
      })
      .catch(err => {
        debugger;
        dispatch(accountCreateError(err));
        return Promise.resolve({ error: err });
      })
  };
}




export function fetchOwnAccounts(customerId) {
  return dispatch => {
    //dispatch(accountsListRequested());
    return api.apiRetrieveAccounts(customerId)
      .then(data => {
        dispatch(accountsListReceived(data));
      });
  };
}

export function fetchAccount(accountId) {
  return dispatch => {
    dispatch(accountRequested());
    return api.apiRetrieveAccount(accountId)
      .then(data => {
        dispatch(accountComplete(data));
      })
      .catch(err => {
        dispatch(accountError(err));
      });
  };
}

export const deleteAccountRequested = makeActionCreator(T.ACCOUNT.DELETE_START);
export const deleteAccountComplete = makeActionCreator(T.ACCOUNT.DELETE_COMPLETE);
export const deleteAccountError = makeActionCreator(T.ACCOUNT.DELETE_ERROR);

export function deleteAccount(customerId, accountId) {
  return dispatch => {
    dispatch(deleteAccountRequested());
    return api.apiDeleteAccount(accountId)
      .then(data => {
        //debugger;
        dispatch(deleteAccountComplete());
        return Promise.resolve('ok');
      })
      .catch(err => {
        dispatch(deleteAccountError());
        return Promise.reject(err);
      })
  };
}

export const errorMessageStart = makeActionCreator(T.ERROR.START, 'payload');
export const errorMessageStop = makeActionCreator(T.ERROR.STOP);

export function errorMessageTimedOut(error, timeout) {
  return dispatch => {
    dispatch(errorMessageStart(error));
    setTimeout(() => {
      dispatch(errorMessageStop());
    }, timeout || 5000);
  };
}

export const createRefOwnerLookupStart = makeActionCreator(T.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START, 'payload');
export const createRefOwnerLookupComplete = makeActionCreator(T.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE, 'payload');

export const createRefAccountLookupStart = makeActionCreator(T.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START, 'payload');
export const createRefAccountLookupComplete = makeActionCreator(T.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE, 'payload');

export const createRefOwnerLookup = lookup => {
  return dispatch => {
    dispatch(createRefOwnerLookupStart(lookup));
    return api.apiRetrieveUsers(lookup)
      .then(data => {

        const { customers = [] } = data || {};

        const arr = customers.map(c => {
          const { id, name, email } = c;
          const fullName = ([name.firstName, name.lastName]).filter(i => i).join(' ');
          const label = email ? `${ fullName } (${ email })` : fullName;
          return {
            value: id,
            label
          };
        });
        dispatch(createRefOwnerLookupComplete(arr));
        return { options: arr };
      })
      .catch(err => {
        dispatch(createRefOwnerLookupComplete(null));
        return { options: [] };
      });
  };
};

export const createRefAccountLookup = customerId => {
  return dispatch => {
    dispatch(createRefAccountLookupStart());
    return api.apiRetrieveUser(customerId)
      .then(data => {
        debugger;
        dispatch(createRefAccountLookupComplete([]));
      });
  };
};


export const makeTransferRequested = makeActionCreator(T.TRANSFERS.MAKE_START, 'payload');
export const makeTransferComplete = makeActionCreator(T.TRANSFERS.MAKE_COMPLETE, 'payload');
export const makeTransferError = makeActionCreator(T.TRANSFERS.MAKE_ERROR, 'error');
export const makeTransferFormUpdate = makeActionCreator(T.TRANSFERS.MAKE_FORM_UPDATE, 'key', 'value');

export const makeTransfer = (accountId, payload) => {
  return dispatch => {
    dispatch(makeTransferRequested());
    return api.apiMakeTransfer(accountId, payload)
      .then(data => {
        const { moneyTransferId } = data;
        dispatch(makeTransferComplete(data));
        return moneyTransferId;
      })
      .catch(err => {
        dispatch(makeTransferError(err));
        return err;
      });
  };
};

export const getTransfersRequested = makeActionCreator(T.TRANSFERS.LIST_START);
export const getTransfersComplete = makeActionCreator(T.TRANSFERS.LIST_COMPLETE, 'payload');
export const getTransfersError = makeActionCreator(T.TRANSFERS.LIST_ERROR, 'error');

export const getTransfers = (accountId) => {
  return dispatch => {
    dispatch(getTransfersRequested());
    return api.apiRetrieveTransfers(accountId)
      .then(data => {
        dispatch(getTransfersComplete(data));
        return data;
      })
      .catch(err => {
        dispatch(getTransfersError(err));
        return err;
      });
  };
};