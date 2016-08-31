import T from '../constants/ACTION_TYPES'
import ROUTES from '../constants/ROUTES'


// `navigate` is used to facilitate changing routes within another action
// without rendering any other changes first
export function start(name, options) {
  return dispatch => {
    const currentURI = window.location.hash.substr(1)
    const newURI = ROUTES.generate(name, options)

    if (currentURI != newURI) {
      dispatch({
        type: T.NAVIGATION.START,
      })

      window.location.replace(
        window.location.pathname + window.location.search + '#' + newURI
      )
    }
  }
}

export function complete() {
  return {
    type: T.NAVIGATION.COMPLETE,
    location: ROUTES.lookup(window.location.hash.substr(1)),
  }
}
