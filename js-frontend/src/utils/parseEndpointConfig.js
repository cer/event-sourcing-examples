/**
 * Created by andrew on 26/02/16.
 */
import * as C from "./constants";

// base endpoint that other endpoints extend from
const defaultEndpoint = {
  apiUrl:                "/api",
  signOutPath:           "/auth/sign_out",
  emailSignInPath:       "/auth/sign_in",
  emailRegistrationPath: "/auth",
  accountUpdatePath:     "/auth",
  accountDeletePath:     "/auth",
  passwordResetPath:     "/auth/password",
  passwordUpdatePath:    "/auth/password",
  tokenValidationPath:   "/auth/validate_token",

  authProviderPaths: {
    github:    "/auth/github",
    facebook:  "/auth/facebook",
    google:    "/auth/google_oauth2"
  }
};

function getFirstObjectKey (obj) {
  for (var key in obj) {
    return key;
  }
}

export default function parseEndpointConfig(endpoint, defaultEndpointKey = null) {
  // normalize so opts is always an array of objects
  if (endpoint.constructor !== Array) {
    // single config will always be called 'default' unless set
    // by previous session
    defaultEndpointKey = C.INITIAL_CONFIG_KEY;

    // config should look like {default: {...}}
    var defaultConfig = {};
    defaultConfig[defaultEndpointKey] = endpoint;

    // endpoint should look like [{default: {...}}]
    endpoint = [defaultConfig];
  }

  let currentEndpoint = {};

  // iterate over config items, extend each from defaults
  for (var i = 0; i < endpoint.length; i++) {
    var configName = getFirstObjectKey(endpoint[i]);

    // set first as default config
    if (!defaultEndpointKey) {
      defaultEndpointKey = configName;
    }

    // save config to `configs` hash
    currentEndpoint[configName] = {
      ...defaultEndpoint,
      ...endpoint[i][configName]
    };
  }

  return { defaultEndpointKey, currentEndpoint };
}