import T from '../constants/ACTION_TYPES'


export function updateQuery(query) {
  return {
    type: T.DOCUMENT_LIST_VIEW.SET_QUERY,
    query,
  } 
}
