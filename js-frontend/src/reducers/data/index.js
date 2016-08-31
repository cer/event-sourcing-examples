/**
 * Created by andrew on 15/03/16.
 */
import { combineReducers } from 'redux';

import { accounts } from './accounts';
import { transfers } from './transfers';
import { entities } from './entities';
import { bookmarkAccount } from './bookmarkAccount';

const dataReducer = combineReducers({
  transfers,
  entities,
  accounts,
  bookmarkAccount
});

export default dataReducer;