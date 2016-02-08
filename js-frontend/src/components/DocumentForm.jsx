import './DocumentForm.less'

import React, {PropTypes} from 'react'
import * as actions from '../actions/documentView'
import { pacomoTransformer } from '../utils/pacomo'


function updater(original, prop, fn) {
  return e => fn(Object.assign({}, original, {[prop]: e.target.value}))
}

function preventDefault(fn) {
  return e => {
    e.preventDefault()
    fn && fn(e)
  }
}

const errorMap = (error, i) => <li className='error' key={i}>{error}</li>

const DocumentForm = ({
  data,
  errors,
  onUpdate,
  onSubmit,
  onCancel,
}) =>
    <form
      onSubmit={preventDefault(onSubmit)}
      noValidate={true}
    >
      <ul className='errors'>
        {errors && Object.values(errors).map(errorMap)}
      </ul>
      <input
        type='text'
        className='title'
        placeholder='Title'
        onChange={updater(data, 'title', onUpdate)}
        value={data.title || ''}
        autoFocus
      />
      <textarea
        type='text'
        className='content'
        onChange={updater(data, 'content', onUpdate)}
        value={data.content || ''}
      />
      <footer className='buttons'>
        <button
          type='button'
          className='cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='submit'
          disabled={!onSubmit}
        >
          Save
        </button>
      </footer>
    </form>

DocumentForm.propTypes = {
  data: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
}

export default pacomoTransformer(DocumentForm)
