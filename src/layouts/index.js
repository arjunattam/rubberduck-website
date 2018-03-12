import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from '../components/Footer'
import favicon from '../static/icon-16.png'
import { description } from '../components/Title'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rubberduck | Better code reviews on GitHub"
      meta={[
        {
          name: 'description',
          content: description,
        },
        { name: 'keywords', content: 'github, code, reviews, sidebar' },
      ]}
    >
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <div
      style={{
        margin: '30px auto',
        maxWidth: 960,
        padding: '0px 0.875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
