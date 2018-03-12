/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import ReactGA from 'react-ga'
ReactGA.initialize('UA-115538378-1')

exports.onRouteUpdate = (state, page, pages) => {
  const { pathname } = state
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}
