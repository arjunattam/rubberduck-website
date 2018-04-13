/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import ReactGA from 'react-ga'
let id = 'GA-ID'

if (document.location.hostname.indexOf('rubberduck.io') !== -1) {
  id = 'UA-115538378-1'
}

ReactGA.initialize()

exports.onRouteUpdate = (state, page, pages) => {
  const { pathname } = state.location
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}
