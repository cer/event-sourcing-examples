import React, {PropTypes} from 'react'
import * as actions from '../actions/documentListView'
import compose from '../utils/compose'
import OneOrTwoColumnLayout from '../components/OneOrTwoColumnLayout'
import DocumentList from '../components/DocumentList'


function listPredicate(query) {
  return (
    !query
    ? () => true
    : ([id, data]) => data.title.replace(/\s+/g, '').indexOf(query) !== -1
  )
}


export default function DocumentListContainer({state, dispatch, children, id}) {
  const query = state.view.documentList
  const props = {
    id,
    query,
    documents: Object
      .entries(state.data.document)
      .filter(listPredicate(query)),
    onChangeQuery: compose(dispatch, actions.updateQuery),
  }

  return <OneOrTwoColumnLayout
    left={<DocumentList {...props} />}
    right={children}
  />
}
