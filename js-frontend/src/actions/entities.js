/**
 * Created by andrew on 27/02/16.
 */
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';
import * as api from '../utils/api';
import { authenticate } from './authenticate';
import root from '../utils/root';

export const entityRequested = makeActionCreator(T.ENTITIES.REQUESTED, 'id');
export const entityReceived = makeActionCreator(T.ENTITIES.RECEIVED, 'id', 'entity');

export const accountsListRequested = makeActionCreator(T.ACCOUNTS.LIST_START);
export const accountsListReceived = makeActionCreator(T.ACCOUNTS.LIST_COMPLETE, 'payload');
export const accountsListError = makeActionCreator(T.ACCOUNTS.LIST_ERROR, 'error');

export const accountsRefListReceived = makeActionCreator(T.ACCOUNTS.LIST_REF_COMPLETE, 'payload');

export const accountCreateStart = makeActionCreator(T.ACCOUNTS.CREATE_START);
export const accountCreateComplete = makeActionCreator(T.ACCOUNTS.CREATE_COMPLETE, 'payload');
export const accountCreateError = makeActionCreator(T.ACCOUNTS.CREATE_ERROR, 'error');
export const accountCreateFormUpdate = makeActionCreator(T.ACCOUNTS.CREATE_FORM_UPDATE, 'key', 'value');

export const accountRefCreateStart = makeActionCreator(T.ACCOUNTS.CREATE_REF_START);
export const accountRefCreateComplete = makeActionCreator(T.ACCOUNTS.CREATE_REF_COMPLETE, 'payload');
export const accountRefCreateError = makeActionCreator(T.ACCOUNTS.CREATE_REF_ERROR, 'error');
export const accountRefCreateFormUpdate = makeActionCreator(T.ACCOUNTS.CREATE_REF_FORM_UPDATE,  'key', 'value');

export const accountRequested = makeActionCreator(T.ACCOUNT.SINGLE_START, 'id');
export const accountComplete = makeActionCreator(T.ACCOUNT.SINGLE_COMPLETE, 'id', 'payload');
export const accountError = makeActionCreator(T.ACCOUNT.SINGLE_ERROR, 'id', 'error');


export function accountsList(customerId) {
  return dispatch => {
    dispatch(accountsListRequested());
    return api.apiRetrieveAccounts(customerId)
      .then(({ accounts = []}) => {
        dispatch(accountsListReceived(accounts));
      })
      .catch(err => {
        dispatch(accountsListError(err));
        return Promise.resolve({ error: err });
      })
  };
}

function readUntilChanged(initialData, promisedFn, leftCalls) {
  if (!leftCalls) {
    return Promise.reject('Data not changed')
  }
  const initialDataFlat = root['JSON'].stringify(initialData);
  return new Promise((rs, rj) => {
    setTimeout(() => {
      promisedFn()
        .then(data => {
          debugger;
          if (initialDataFlat == root['JSON'].stringify(data)) {
            return readUntilChanged.call(this, data, promisedFn, leftCalls - 1).then(rs, rj); // Promise
          }
          rs(data);
        })
        .catch(rj)
    }, 500 * Math.pow(2, 4 - leftCalls));
  })
}

export function accountCreate(customerId, payload) {
  return dispatch => {
    dispatch(accountCreateStart());
    return api.apiCreateAccount(customerId, payload)
      .then(data => {
        if (data.accountId) {
          const { accountId } = data;
          dispatch(accountCreateComplete({
            id: accountId,
            ...payload
          }));
          // dispatch(entityReceived(accountId, payload));
          dispatch(authenticate(true));
          return accountId;
        } else {
          return readUntilChanged(data, () => api.apiRetrieveAccounts(customerId), 4)
            .then(() => {
              debugger;
              dispatch(accountCreateComplete({
                id: ''
              }));
              dispatch(authenticate(true));
            });
        }
      })
      .catch(err => {
        debugger;
        dispatch(accountCreateError(err));
        // return Promise.resolve({ error: err });
      });
  };
}

export function accountRefCreate(customerId, payload) {
  return dispatch => {
    dispatch(accountRefCreateStart());
    return api.apiCreateRefAccount(customerId, payload)
      .then(({ id }) => {
        dispatch(accountRefCreateComplete({
          ...payload,
          id
        }));
        dispatch(entityReceived(id, payload));
        return dispatch(authenticate(true));
      })
      .catch(err => {
        debugger;
        dispatch(accountRefCreateError(err));
        return Promise.resolve({ error: err });
      })
  };
}




export function fetchOwnAccounts(customerId) {
  return dispatch => {
    //dispatch(accountsListRequested());
    return api.apiRetrieveAccounts(customerId)
      .then(data => {
        dispatch(accountsListReceived(data.accounts));
      });
  };
}

export function fetchAccount(accountId) {
  return dispatch => {
    dispatch(accountRequested(accountId));
    return api.apiRetrieveAccount(accountId)
      .then(data => {
        dispatch(accountComplete(accountId, data));
      })
      .catch(err => {
        dispatch(accountError(accountId, err));
      });
  };
}

export const deleteAccountRequested = makeActionCreator(T.ACCOUNT.DELETE_START);
export const deleteAccountComplete = makeActionCreator(T.ACCOUNT.DELETE_COMPLETE);
export const deleteAccountError = makeActionCreator(T.ACCOUNT.DELETE_ERROR);

export function deleteAccount(customerId, accountId, isRef) {
  return dispatch => {
    dispatch(deleteAccountRequested());

    const deleteApiAction = (isRef ?
      api.apiDeleteRefAccount(customerId, accountId) :
      api.apiDeleteAccount(customerId, accountId));

    return deleteApiAction
      .then(data => {
        dispatch(deleteAccountComplete(data));
        return Promise.resolve(data);
      })
      .catch(err => {
        dispatch(deleteAccountError(err));
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
        dispatch(createRefOwnerLookupComplete([]));
        return { options: [] };
      });
  };
};

export const createRefAccountLookup = customerId => {
  return dispatch => {
    dispatch(createRefAccountLookupStart(customerId));
    return api.apiRetrieveAccounts(customerId)
      .then(({ accounts }) => {
        const arr = accounts.map(({ accountId, title }) => ({
          value: accountId,
          label: title
        }));
        dispatch(createRefAccountLookupComplete(arr));
        return { options: arr };
      })
      .catch(err => {
        dispatch(createRefAccountLookupComplete([]));
        return { options: [] };
      });
  };
};


export const makeTransferRequested = makeActionCreator(T.TRANSFERS.MAKE_START);
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

export const getTransfersRequested = makeActionCreator(T.TRANSFERS.LIST_START, 'id');
export const getTransfersComplete = makeActionCreator(T.TRANSFERS.LIST_COMPLETE, 'id', 'payload');
export const getTransfersError = makeActionCreator(T.TRANSFERS.LIST_ERROR, 'id', 'error');

export const getTransfers = (accountId) => {
  return dispatch => {
    dispatch(getTransfersRequested(accountId));
    return api.apiRetrieveTransfers(accountId)
      .then(data => {
        dispatch(getTransfersComplete(accountId, data['transactionsHistory']));
        return data;
      })
      .catch(err => {
        dispatch(getTransfersError(accountId, err));
        return err;
      });
  };
};