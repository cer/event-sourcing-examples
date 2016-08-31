/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 25/02/16.
 */
import { combineReducers } from 'redux';

import { account } from './account';
import { error } from './errors';
import { bookmarkAccount } from './bookmarkAccount';
import { transfersMake } from './transfersMake';


const uiReducer = combineReducers({
  account,
  error,
  bookmarkAccount,
  transfersMake
});

export default uiReducer;