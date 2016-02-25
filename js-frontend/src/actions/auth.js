/**
 * Created by andrew on 25/02/16.
 */
import T from '../constants/ACTION_TYPES';

export function configureStart({...props} = {}) {
  return {
    ...props,
    type: T.AUTH.CONFIGURE_START
  };
}
export function configureComplete({config, ...props} = {}) {
  return {
    ...props,
    type: T.AUTH.CONFIGURE_COMPLETE,
    config
  };
}
export function configureError({errors, ...props} = {}) {
  return {
    ...props,
    type: T.AUTH.CONFIGURE_ERROR,
    errors
  };
}

export function authenticateStart() {
  return { type: T.AUTH.AUTHENTICATE_START };
}
export function authenticateComplete(user) {
  return { type: T.AUTH.AUTHENTICATE_COMPLETE, user };
}
export function authenticateError(errors) {
  return { type: T.AUTH.AUTHENTICATE_ERROR, errors };
}