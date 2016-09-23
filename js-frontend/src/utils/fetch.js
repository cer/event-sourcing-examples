/**
 * Created by andrew on 26/02/16.
 */
import originalFetch from "isomorphic-fetch";
import * as C from "./constants";

import {
  retrieveData,
  persistData,
  getTokenFormat,
  isApiRequest
} from "./sessionStorage";


function getAuthHeaders(url) {
  if (isApiRequest(url)) {
    // fetch current auth headers from storage
    let currentHeaders = retrieveData(C.SAVED_CREDS_KEY) || {},
      nextHeaders = {};

    if (currentHeaders === 'undefined') {
      currentHeaders = {};
    }
    // bust IE cache
    nextHeaders["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";

    // set header for each key in `tokenFormat` config
    for (var key in getTokenFormat()) {
      if (key in currentHeaders) {
        nextHeaders[key] = currentHeaders[key];
      }
    }

    return nextHeaders;
  } else {
    return {};
  }
}

function updateAuthCredentials(resp) {

  // set header for each key in `tokenFormat` config
  const newHeaders = {};

  // set flag to ensure that we don't accidentally nuke the headers
  // if the response tokens aren't sent back from the API
  let blankHeaders = true;

  // set header key + val for each key in `tokenFormat` config
  for (let key in getTokenFormat()) {
    newHeaders[key] = resp.headers.get(key);

    if (newHeaders[key]) {
      blankHeaders = false;
    }
  }

  // persist headers for next request
  if (!blankHeaders) {
    persistData(C.SAVED_CREDS_KEY, newHeaders);
  }

  return resp;
}

export default function (url, options = {}) {

  if (!options.headers) {
    options.headers = {}
  }

  options.headers = {
    ...options.headers,
    ...getAuthHeaders(url)
  };

  //extend(options.headers, getAuthHeaders(url));
  return originalFetch(url, options)
    .then(resp => updateAuthCredentials(resp));
}