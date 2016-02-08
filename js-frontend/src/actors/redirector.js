import * as navigation from '../actions/navigation'
import ROUTES from '../constants/ROUTES'


export default function redirector(state, dispatch) {
  const {name, options} = state.navigation.location || {}
  const currentURI = window.location.hash.substr(1)
  const canonicalURI = name && ROUTES.generate(name, options)

  if (canonicalURI && canonicalURI !== currentURI) {
    // If the URL entered includes extra `/` characters, or otherwise
    // differs from the canonical URL, navigate the user to the
    // canonical URL (which will result in `complete` being called again)
    dispatch(navigation.start(name, options))
  }
  else if (name == 'root') {
    // If we've hit the root location, redirect the user to the main page
    dispatch(navigation.start('documentList'))
  }
}
