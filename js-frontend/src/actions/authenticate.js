/**
 * Created by andrew on 26/02/16.
 */
import T from '../constants/ACTION_TYPES';

export function authenticateStart() {
  return { type: T.AUTH.AUTHENTICATE_START };
}
export function authenticateComplete(user) {
  return { type: T.AUTH.AUTHENTICATE_COMPLETE, user };
}
export function authenticateError(errors) {
  return { type: T.AUTH.AUTHENTICATE_ERROR, errors };
}
