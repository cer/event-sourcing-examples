/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';
import createFormReducer from '../createFormReducer';

export const transfersMake = createFormReducer([
  T.TRANSFERS.MAKE_START,
  T.TRANSFERS.MAKE_COMPLETE,
  T.TRANSFERS.MAKE_ERROR,
  T.TRANSFERS.MAKE_FORM_UPDATE
]);
