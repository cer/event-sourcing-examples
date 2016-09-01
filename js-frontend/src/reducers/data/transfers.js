/**
 * Created by andrew on 15/03/16.
 */
/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';
import  createListReducer from '../createDataReducer';
import {createByIdDataReducer } from '../createDataReducer';

const selectedEvents = [
  T.TRANSFERS.LIST_START,
  T.TRANSFERS.LIST_COMPLETE,
  T.TRANSFERS.LIST_ERROR
];

export const transfers = createByIdDataReducer(selectedEvents, createListReducer(selectedEvents));
