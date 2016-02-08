import pick from 'object-pick'
import typeReducers from '../../utils/typeReducers'
import compact from '../../utils/compact'
import ACTION_TYPES from '../../constants/ACTION_TYPES'


const defaultState = {
  unsavedChanges: {},
  saveErrors: {},
}


export default typeReducers(ACTION_TYPES.DOCUMENT_VIEW, defaultState, {
  // Update the current document data
  UPDATE_DATA: (state, {id, data}) => ({
    ...state,
    unsavedChanges: {
      ...state.unsavedChanges,
      [id]: { ...state.unsavedChanges[id], ...data },
    },
  }),

  // If there are fields marked as invalid which are now valid,
  // mark them as valid
  REMOVE_STALE_ERRORS: (state, {id, errors}) => ({
    ...state,
    saveErrors: {
      ...state.saveErrors,
      [id]: compact(pick(state.saveErrors[id], Object.keys(errors || {}))),
    },
  }),

  // Set the errors to the passed in object
  SET_ERRORS: (state, {id, errors}) => ({
    ...state,
    saveErrors: {
      ...state.saveErrors,
      [id]: errors
    },
  }),

  // Remove errors/data for an id
  CLEAR: (state, {id}) => ({
    unsavedChanges: {
      ...state.unsavedChanges,
      [id]: null,
    },
    saveErrors: {
      ...state.saveErrors,
      [id]: null,
    },
  }),
})
