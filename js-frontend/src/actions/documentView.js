import uuid from '../utils/uuid'
import documentValidator from '../validators/documentValidator'
import T from '../constants/ACTION_TYPES'
import * as navigation from './navigation'


export function updateChanges(id, data) {
  return [
    {
      type: T.DOCUMENT_VIEW.UPDATE_DATA,
      id,
      data,
    },
    {
      type: T.DOCUMENT_VIEW.REMOVE_STALE_ERRORS,
      id,
      errors: documentValidator(data),
    },
  ]
}

export function clearChanges(id) {
  return {
    type: T.DOCUMENT_VIEW.CLEAR,
    id,
  }
}

export function cancelChanges(id) {
  return [
    clearChanges(id),
    navigation.start('documentList'),
  ]
}

export function submitChanges(id) {
  return (dispatch, getState) => {
    const { view } = getState()
    const data = view.document.unsavedChanges[id]
    const errors = documentValidator(data)

    if (errors) {
      dispatch({
        type: T.DOCUMENT_VIEW.SET_ERRORS,
        id,
        errors,
      })
    }
    else {
      const newId = id == 'new' ? uuid() : id
      dispatch(navigation.start('documentEdit', {id: newId}))
      dispatch(clearChanges(id))
      dispatch({
        type: T.DOCUMENT_DATA.UPDATE,
        id: newId,
        data,
      })
    }
  }
}
