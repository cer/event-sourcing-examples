/**
 * Created by andrew on 12/03/16.
 */
import fetch from './fetch';
import {
  getEmailSignInUrl,
  getEmailSignUpUrl
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