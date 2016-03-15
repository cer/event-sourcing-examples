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
export const accountsListReceived = makeActionCreator(T.ACCOUNTS.LIST_COMPLETE, 'data');
export const accountsListError = makeActionCreator(T.ACCOUNTS.LIST_ERROR, 'error');

//export const accountsRefListRequested = makeActionCreator(T.ACCOUNTS.LIST_REF_START, 'id');
export const accountsRefListReceived = makeActionCreator(T.ACCOUNTS.LIST_REF_COMPLETE, 'data');
//export const accountsRefListError = makeActionCreator(T.ACCOUNTS.LIST_REF_ERROR, 'id');

export const accountCreateStart = makeActionCreator(T.ACCOUNTS.CREATE_START);
export const accountCreateComplete = makeActionCreator(T.ACCOUNTS.CREATE_COMPLETE, 'accountId');
export const accountCreateError = makeActionCreator(T.ACCOUNTS.CREATE_ERROR, 'error');
export const accountCreateFormUpdate = makeActionCreator(T.ACCOUNTS.CREATE_FORM_UPDATE, 'key', 'value');

export const accountRefCreateStart = makeActionCreator(T.ACCOUNTS.CREATE_REF_START, 'data');
export const accountRefCreateComplete = makeActionCreator(T.ACCOUNTS.CREATE_REF_COMPLETE, 'data');
export const accountRefCreateError = makeActionCreator(T.ACCOUNTS.CREATE_REF_ERROR, 'error');
export const accountRefCreateFormUpdate = makeActionCreator(T.ACCOUNTS.CREATE_REF_FORM_UPDATE,  'key', 'value');


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
        return authenticate(true);
      })
      .catch(err => {
        dispatch(accountCreateError(err));
        return Promise.resolve({ error: err });

      })
  };
}