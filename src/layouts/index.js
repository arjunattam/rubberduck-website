import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rubberduck"
      meta={[
        {
          name: 'description',
          content: 'IDE Sidebar for better code reviews in GitHub',
        },
        { name: 'keywords', content: 'github, code, reviews, sidebar' },
      ]}
    />
    <div
      style={{
        margin: '30px auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
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
