import typeReducers from '../utils/typeReducers'
import ACTION_TYPES from '../constants/ACTION_TYPES'


const defaultState = {
  transitioning: true,
  location: null,
}

export default typeReducers(ACTION_TYPES.NAVIGATION, defaultState, {
  START: () => ({
    transitioning: true,
  }),

  COMPLETE: (state, {location}) => ({
    transitioning: false,
    location,
  }),
})
