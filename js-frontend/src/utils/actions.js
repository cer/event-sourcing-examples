/**
 * Created by andrew on 15/03/16.
 */
export function makeActionCreator(type, ...argNames) {
  return function(...args) {
    return argNames.reduce((action, arg, index) => {
      action[arg] = args[index];
      return action;
    }, { type });
  };
}
