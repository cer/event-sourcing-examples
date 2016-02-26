/**
 * Created by andrew on 25/02/16.
 */

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



