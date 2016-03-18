/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 25/02/16.
 */
import { combineReducers } from 'redux';

import { accounts } from './accounts';
import { transfers } from './transfers';
import { entities } from './entities';

const dataReducer = combineReducers({
  transfers,
  entities,
  accounts
});

export default dataReducer;