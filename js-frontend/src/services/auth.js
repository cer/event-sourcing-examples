/**
 * Created by andrew on 25/02/16.
 */
//import * as A from "../actions/auth";
import T from '../constants/ACTION_TYPES';
import {
  authenticateStart,
  authenticateComplete,
  authenticateError
} from '../actions/auth';


export function configure(endpoint = {}, settings = {}) {
  return dispatch => {
    dispatch(authenticateStart());
  };
};