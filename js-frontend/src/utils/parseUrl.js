/**
 * Created by andrew on 26/02/16.
 */
import querystring from "querystring";

export function normalizeTokenKeys (params) {
  // normalize keys
  if (params.token) {
    params["access-token"] = params.token;
    delete params.token;
  }
  if (params.auth_token) {
    params["access-token"] = params.auth_token;
    delete params.auth_token;
  }
  if (params.client_id) {
    params.client = params.client_id;
    delete params.client_id;
  }
  if (params.config) {
    params.endpointKey = params.config;
    delete params.config;
  }

  return params;
};

const getAnchorSearch = function(location) {
  const rawAnchor = location.hash || "",
        arr       = rawAnchor.split("?");
  return (arr.length > 1) ? arr[1] : null;
};

const getSearchQs = function(location) {
  const rawQs = location.search || "",
        qs    = rawQs.replace("?", ""),
        qsObj = (qs) ? querystring.parse(qs) : {};

  return qsObj;
};

const getAnchorQs = function(location) {
  const anchorQs    = getAnchorSearch(location),
        anchorQsObj = (anchorQs) ? querystring.parse(anchorQs) : {};

  return anchorQsObj;
};

const stripKeys = function(obj, keys) {
  for (var q in keys) {
    delete obj[keys[q]];
  }

  return obj;
};

export function getAllParams (location) {
  return {
    ...getAnchorQs(location),
    ...getSearchQs(location)
  };
};

const buildCredentials = function(location, keys) {
  const params = getAllParams(location);
  let authHeaders = {};

  for (var key of keys) {
    authHeaders[key] = params[key];
  }

  return normalizeTokenKeys(authHeaders);
};


// this method is tricky. we want to reconstruct the current URL with the
// following conditions:
// 1. search contains none of the supplied keys
// 2. anchor search (i.e. `#/?key=val`) contains none of the supplied keys
// 3. all of the keys NOT supplied are presevered in their original form
// 4. url protocol, host, and path are preserved
const getLocationWithoutParams = function(currentLocation, keys) {
  // strip all values from both actual and anchor search params
  let newSearch   = querystring.stringify(stripKeys(getSearchQs(currentLocation), keys)),
      newAnchorQs = querystring.stringify(stripKeys(getAnchorQs(currentLocation), keys)),
      newAnchor   = (currentLocation.hash || "").split("?")[0];

  if (newSearch) {
    newSearch = "?" + newSearch;
  }

  if (newAnchorQs) {
    newAnchor += "?" + newAnchorQs;
  }

  if (newAnchor && !newAnchor.match(/^#/)) {
    newAnchor = "#/" + newAnchor;
  }

  // reconstruct location with stripped auth keys
  const newLocation = currentLocation.pathname + newSearch + newAnchor;

  return newLocation;
};



export default function getRedirectInfo(currentLocation) {
  if (!currentLocation) {
    return {};
  } else {
    let authKeys = [
      "access-token",
      "token",
      "auth_token",
      "config",
      "client",
      "client_id",
      "expiry",
      "uid",
      "reset_password",
      "account_confirmation_success"
    ];

    var authRedirectHeaders = buildCredentials(currentLocation, authKeys);
    var authRedirectPath = getLocationWithoutParams(currentLocation, authKeys);

    if (authRedirectPath !== currentLocation) {
      return { authRedirectHeaders, authRedirectPath };
    } else {
      return {};
    }
  }
}