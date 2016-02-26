/**
 * Created by andrew on 27/02/16.
 */
import T from '../constants/ACTION_TYPES';

export function entityReceived(id, entity) {
  return { type: T.ENTITIES.RECEIVED };
}