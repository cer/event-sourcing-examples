/**
 * Created by andrew on 8/17/16.
 */

export const blocked = (fn) => {
  let isBlocked = false;
  return (...args) => {
    if (isBlocked) {
      return;
    }
    //noinspection JSUnusedAssignment
    isBlocked = true;
    const result = fn(...args);
    isBlocked = false;
    return result;
  };
};