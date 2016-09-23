/**
 * Created by andrew on 25/02/16.
 */
import T from '../../constants/ACTION_TYPES';
import createDataReducer from '../createDataReducer';

export const configReducer = createDataReducer([
    T.AUTH.CONFIGURE_START,
    T.AUTH.CONFIGURE_COMPLETE,
    T.AUTH.CONFIGURE_ERROR
],
  'config',
  'config',
  (c = {}) => ({ ...c })
);
