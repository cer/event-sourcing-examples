/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';
import createListReducer from '../createDataReducer';

export const transfers = createListReducer([
  T.TRANSFERS.LIST_START,
  T.TRANSFERS.LIST_COMPLETE,
  T.TRANSFERS.LIST_ERROR
]);
