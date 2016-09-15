/**
 * Created by andrew on 26/02/16.
 */
import T from '../constants/ACTION_TYPES';
import { makeActionCreator } from '../utils/actions';

export const visitLocation = makeActionCreator(T.LOCATION.ENTER, 'location');
