/**
 * Created by andrew on 26/02/16.
 */
import { authenticate } from "./authenticate";
import { applyConfig } from "../utils/clientSettings";

export const SET_ENDPOINT_KEYS = "SET_ENDPOINT_KEYS";

export function setEndpointKeys(endpoints, currentEndpointKey, defaultEndpointKey) {
  return {
    type: SET_ENDPOINT_KEYS,
    endpoints,
    currentEndpointKey,
    defaultEndpointKey
  };
}

export function configure(endpoint={}, settings={}) {

  return dispatch => {

    return applyConfig({ dispatch, endpoint, settings })
      .then(() => {
        return dispatch(authenticate());
      });

  };
}