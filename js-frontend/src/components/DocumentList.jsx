import './DocumentList.less'

import React, {PropTypes} from 'react'
import * as actions from '../actions/documentListView'
import { pacomoTransformer } from '../utils/pacomo'
import Link from './Link'


function mapValue(fn) {
  return e => fn(e.target.value)
}

const DocumentList = ({
  id: activeId,
  query,
  documents,
  onChangeQuery,
}) =>
    <div>
      <header className='header'>
        <input
          className='query'
          type="text"
          placeholder="Search..."
          value={query}
          onChange={mapValue(onChangeQuery)}
        />
      </header>
      <ul className='list'>
        {documents.map(([id, data]) =>
          <li
            key={id}
            className={{
              'document-item': true,
              'document-item-active': activeId == id,
            }}
          >
            <Link
              className='document-link'
              name='documentEdit'
              options={{id}}
            >
              {data.title}
            </Link>
          </li>
        )}
        <li 
          className={{
            'add-item': true,
            'add-item-active': activeId == 'new',
          }}
        >
          <Link
            className='add-link'
            name='documentEdit'
            options={{id: 'new'}}
          >
            Add Document
          </Link>
        </li>
      </ul>
    </div>

DocumentList.propTypes = {
  id: PropTypes.string,
  query: PropTypes.string,
  documents: PropTypes.array.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
}

export default pacomoTransformer(DocumentList)
