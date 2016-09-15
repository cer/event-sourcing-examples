/**
 * Created by andrew on 12/03/16.
 */
import authedFetch from './fetch';
import {
  getEmailSignInUrl,
  getEmailSignUpUrl,
  getCurrentUserUrl,
  getAccountsUrl,
  getCustomersUrl,
  getTransfersUrl
} from "./sessionStorage";
import root from './root';
import { parseResponse } from "./handleFetchResponse";

const fetch = (...args) => authedFetch(...args).then(parseResponse);

function makeQuery(params) {
  return Object.keys(params).map(key => [encodeURIComponent(key), encodeURIComponent(params[key])].join('=')).join('&');
}

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

export const apiSignIn = (body) => fetch(getEmailSignInUrl(), {
  ...METHODS.POST,
  body: root.JSON.stringify(body)
});

export const apiSignUp = (body) => fetch(getEmailSignUpUrl(), {
  ...METHODS.POST,
  body: root.JSON.stringify(body)
});

export const apiGetCurrentUser = () => fetch(getCurrentUserUrl(), { ...METHODS.GET });

export const apiCreateAccount = (customerId, {
  title,
  balance: initialBalance,
  description }) => fetch(getAccountsUrl(), {
  ...METHODS.POST,
  body: root.JSON.stringify({
    customerId,
    title,
    initialBalance,
    description })
});

export const apiCreateRefAccount = (customerId, {
  owner, account: accountId, title, description }) => fetch(`${getCustomersUrl()}/${customerId}/toaccounts`, {
  ...METHODS.POST,
  body: root.JSON.stringify({
    owner,
    id: accountId,
    title,
    description })
});

export const apiMakeTransfer = (fromAccountId, {
  account, amount, description }) => fetch(getTransfersUrl(), {
  ...METHODS.POST,
  body: root.JSON.stringify({
    "amount": amount,
    "fromAccountId": fromAccountId,
    "toAccountId": account,
    description
  })
});

export const apiRetrieveAccounts = (customerId) => fetch(`${getCustomersUrl()}/${customerId}/accounts`, {
  ...METHODS.GET
});

export const apiRetrieveTransfers = (accountId) => fetch(`${getAccountsUrl()}/${accountId}/history`, {
  ...METHODS.GET
});

export const apiRetrieveAccount = (accountId) => fetch(`${getAccountsUrl()}/${accountId}`, {
  ...METHODS.GET
});

export const apiDeleteAccount = (customerId, accountId) => fetch(`${getCustomersUrl()}/${customerId}/accounts/${accountId}`, {
  ...METHODS.DELETE
});

export const apiRetrieveUsers = (email) => fetch(`${getCustomersUrl()}?${makeQuery({ email })}`, {
  ...METHODS.GET
});
