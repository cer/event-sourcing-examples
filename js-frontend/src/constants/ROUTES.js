import uniloc from 'uniloc'

export default uniloc({ 
  root:         'GET /',
  documentList: 'GET /documents',
  documentEdit: 'GET /documents/:id',
})
