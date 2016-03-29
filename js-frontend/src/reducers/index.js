/**
 * Created by andrew on 18/03/16.
 */
import { combineReducers } from 'redux';

import authStateReducer from './auth';
import appStateReducer from './data'
import uiReducer from './ui'

const mainReducer = combineReducers({
  auth:   authStateReducer,
  data:   appStateReducer,
  ui: uiReducer
});

export default mainReducer;