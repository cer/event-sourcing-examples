import typeReducers from '../../utils/typeReducers'
import ACTION_TYPES from '../../constants/ACTION_TYPES'


const defaultState = {}


export default typeReducers(ACTION_TYPES.DOCUMENT_DATA, defaultState, {
  UPDATE: (state, {id, data}) => ({
    ...state,
    [id]: { ...state[id], ...data },
  })
})
