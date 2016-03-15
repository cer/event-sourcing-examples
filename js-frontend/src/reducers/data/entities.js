/**
 * Created by andrew on 15/03/16.
 */
import T from '../../constants/ACTION_TYPES';

const initialState = {
};

const nodeInitialState = {
  loading: false,
  data: {}
};

export const entities = (state = {...initialState}, action) => {
  switch(action.type) {
    case T.ENTITIES.REQUESTED: {
      const { id } = action;
      return {
        ...state,
        [id]: {
          ...nodeInitialState,
          loading: true
        }
      }
    }
    case T.ENTITIES.RECEIVED: {
      const { id, entity = {} } = action;
      return {
        ...state,
        [id]: {
          ...(state[id] || nodeInitialState),
          loading: false,
          data: {
            ...entity
          }
        }
      }
    }
    case T.ENTITIES.RECEIVED_LIST:
    default:
      return state;
  }
};