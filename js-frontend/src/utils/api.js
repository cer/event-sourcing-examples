/**
 * Created by andrew on 12/03/16.
 */
import fetch from './fetch';
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

function makeQuery(params) {
  return Object.keys(params).map(key => [encodeURIComponent(key), encodeURIComponent(params[key])].join('=')).join('&');
}

export function apiSignIn(body) {
  return fetch(getEmailSignInUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: root.JSON.stringify(body)
  }).then(parseResponse);
}

export function apiSignUp(body) {
  return fetch(getEmailSignUpUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: root.JSON.stringify(body)
  }).then(parseResponse);
}

export function apiGetCurrentUser() {
  return fetch(getCurrentUserUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get"
  }).then(parseResponse);
}

export function apiCreateAccount(customerId, {
  title, balance: initialBalance, description }) {
  //{
  //"accountId": "0000015377cf131b-a250093f26850000"
//}

  return fetch(getAccountsUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: root.JSON.stringify({
      customerId,
      title,
      initialBalance,
      description })
  }).then(parseResponse);
}

export function apiCreateRefAccount(customerId, {
  owner, account: accountId, title, description }) {

  return fetch(`${getCustomersUrl()}/${customerId}/toaccounts`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: root.JSON.stringify({
      owner,
      id: accountId,
      title,
      description })
  }).then(parseResponse);
}

export function apiMakeTransfer(fromAccountId, {
  account, amount, description }) {

  return fetch(getTransfersUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: root.JSON.stringify({
      "amount": amount,
      "fromAccountId": fromAccountId,
      "toAccountId": account,
      description
    })
  }).then(parseResponse);
}

export function apiRetrieveAccounts(customerId) {

  return fetch(`${getCustomersUrl()}/${customerId}/accounts`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get"
  }).then(parseResponse);
}

export function apiRetrieveTransfers(accountId) {

  return fetch(`${getAccountsUrl()}/${accountId}/history`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get"
  }).then(parseResponse);
}

export function apiRetrieveAccount(accountId) {
  return fetch(`${getAccountsUrl()}/${accountId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get"
  }).then(parseResponse);
}

export function apiDeleteAccount(accountId) {
  return Promise.reject({
    message: '\'Delete Account\' is not implemented.'
  });

  return fetch(`${getAccountsUrl()}/${accountId}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "delete"
  }).then(parseResponse);
}

export function apiRetrieveUsers(email) {
  return fetch(`${getCustomersUrl()}?${makeQuery({ email })}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get"
  }).then(parseResponse);
}

export function apiRetrieveUser(customerId) {
  return fetch(`${getCustomersUrl()}/${ customerId }`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get"
  }).then(parseResponse);
}
