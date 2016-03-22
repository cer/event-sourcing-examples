/**
 * Created by andrew on 18/03/16.
 */

import T from '../../constants/ACTION_TYPES';

export const error = (state = null, action ) => {
  switch (action.type) {
    case T.ERROR.STOP: {
      return null;
    }
    case T.ERROR.START:
      return action.payload;
    
    default:
      return state;
  }
};