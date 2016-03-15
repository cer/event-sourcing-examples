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

export function apiCreateAccount(customerId, title, initialBalance) {
  //{
  //"accountId": "0000015377cf131b-a250093f26850000"
//}

  return fetch(getAccountsUrl(), {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: root.JSON.stringify({ customerId, title, initialBalance })
  }).then(parseResponse);
}

export function apiRetrieveAccount(accountId) {
  return fetch(`${getCurrentUserUrl()}/${accountId}`, {
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