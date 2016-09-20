/**
 * Created by andrew on 12/03/16.
 */
import authedFetch from './fetch';
import * as ENDPOINTS from './apiEndpoints';
import root from './root';
import { parseResponse } from "./handleFetchResponse";

const JSON_HEADERS = {
  headers: {
    "Accept": "application/json",
      "Content-Type": "application/json"
  }
};

const METHODS = {
  DELETE: {
    ...JSON_HEADERS,
    method: "delete"
  },
  GET: {
    ...JSON_HEADERS,
    method: "get"
  },
  POST: {
    ...JSON_HEADERS,
    method: "post"
  }
};

const fetch = (...args) => authedFetch(...args).then(parseResponse);

export const apiSignIn = (body) => fetch(ENDPOINTS.emailSignIn(), {
  ...METHODS.POST,
  body: root.JSON.stringify(body)
});

export const apiSignUp = (body) => fetch(ENDPOINTS.emailSignUp(), {
  ...METHODS.POST,
  body: root.JSON.stringify(body)
});

export const apiGetCurrentUser = () => fetch(ENDPOINTS.currentUser(), {
  ...METHODS.GET
});

export const apiCreateAccount = (customerId, {
  title,
  balance: initialBalance,
  description }) => fetch(ENDPOINTS.accountsPath(), {
  ...METHODS.POST,
  body: root.JSON.stringify({
    customerId,
    title,
    initialBalance,
    description })
});

export const apiCreateRefAccount = (customerId, {
  owner, account: accountId, title, description }) => fetch(ENDPOINTS.refAccounts(customerId), {
  ...METHODS.POST,
  body: root.JSON.stringify({
    owner,
    id: accountId,
    title,
    description })
});

export const apiMakeTransfer = (fromAccountId, {
  account, amount, description }) => fetch(ENDPOINTS.transfers(), {
  ...METHODS.POST,
  body: root.JSON.stringify({
    amount,
    fromAccountId,
    "toAccountId": account,
    description
  })
});

export const apiRetrieveAccounts = (customerId) => fetch(ENDPOINTS.customersAccounts(customerId), {
  ...METHODS.GET
});

export const apiRetrieveTransfers = (accountId) => fetch(ENDPOINTS.history(accountId), {
  ...METHODS.GET
});

export const apiRetrieveAccount = (accountId) => fetch(ENDPOINTS.account(accountId), {
  ...METHODS.GET
});

export const apiDeleteAccount = (customerId, accountId) => fetch(ENDPOINTS.account(accountId), {
  ...METHODS.DELETE
});

export const apiDeleteRefAccount = (customerId, accountId) => fetch(ENDPOINTS.refAccount(customerId, accountId), {
  ...METHODS.DELETE
});

export const apiRetrieveUsers = (email) => fetch(ENDPOINTS.customersLookup({ email }), {
  ...METHODS.GET
});
