import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxMulti from 'redux-multi'
import { batchedSubscribe } from 'redux-batched-subscribe'

import * as navigation from './actions/navigation'
import actors from './actors'
import rootReducer from './reducers'


// Add middleware to allow our action creators to return functions and arrays
const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  reduxMulti,
)(createStore)

// Ensure our listeners are only called once, even when one of the above
// middleware call the underlying store's `dispatch` multiple times
const createStoreWithBatching = batchedSubscribe(
  fn => fn()
)(createStoreWithMiddleware)

// Create a store with our application reducer
const store = createStoreWithBatching(rootReducer)

// Handle changes to our store with a list of actor functions, but ensure
// that the actor sequence cannot be started by a dispatch from an actor
let acting = false
store.subscribe(function() {
  if (!acting) {
    acting = true

    for (let actor of actors) {
      actor(store.getState(), store.dispatch)
    }

    acting = false
  }
})

// Dispatch navigation events when the URL's hash changes, and when the
// application loads
function onHashChange() {
  store.dispatch(navigation.complete())
}
window.addEventListener('hashchange', onHashChange, false)
onHashChange()
