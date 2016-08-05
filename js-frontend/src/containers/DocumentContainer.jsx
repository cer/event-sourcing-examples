import React, {PropTypes} from 'react'
import * as actions from '../actions/documentView'
import compose from '../utils/compose'
import partial from '../utils/partial'
import DocumentForm from '../components/DocumentForm'


export default function DocumentContainer({state, dispatch, id}) {
  const errors = state.view.document.saveErrors[id]
  const viewData = state.view.document.unsavedChanges[id]
  const data =
    viewData ||
    state.data.document[id] ||
    (id == 'new' && {})
  const props = {
    data, 
    errors,
    onUpdate: compose(dispatch, partial(actions.updateChanges, id)),
    onCancel: compose(dispatch, partial(actions.cancelChanges, id)),
    onSubmit:
      viewData && !errors
      ? compose(dispatch, partial(actions.submitChanges, id))
      : null,
  }

  return !data ? <div>Not Found</div> : <DocumentForm {...props} />
}
