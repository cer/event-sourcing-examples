/**
 * Created by andrew on 8/17/16.
 */

export const blocked = (fn, useCb) => {
  let isBlocked = false;
  return (...args) => {
    if (isBlocked) {
      return;
    }
    //noinspection JSUnusedAssignment
    isBlocked = true;
    const cb = () => {
      isBlocked = false;
    };
    const result = useCb ? fn(...(args.concat([cb]))) : fn(...args);
    if (!useCb) {
      cb();
    }
    return result;
  };
};