/**
 * Created by andrew on 12/03/16.
 */
import fetch from './fetch';
import {
  getEmailSignInUrl,
  getEmailSignUpUrl,
  getCurrentUserUrl,
  getAccountsUrl
} from "./sessionStorage";
import root from './root';


import { parseResponse } from "./handleFetchResponse";

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

export function apiRetrieveAccounts(customerId) {

  const params = {customerId };
  const query = Object.keys(params).map(key => [encodeURIComponent(key), encodeURIComponent(params[key])].join('=')).join('&');


  return fetch(`${getAccountsUrl()}?${query}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get",
    body: {
      customerId
    }
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

export function apiRetrieveUsers(search) {
  return fetch(getCurrentUserUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "get",
    body: {
      email: search
    }
  }).then(parseResponse);
}

