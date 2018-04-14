import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import Title from '../components/Title'
import Footer from '../components/Footer'
import favicon from '../static/icon-16.png'

const description = 'Faster code reviews in the browser'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Rubberduck | Faster code reviews on GitHub"
      meta={[
        {
          name: 'description',
          content: description,
        },
        { name: 'keywords', content: 'github, code, reviews, sidebar' },
      ]}
    >
      <link rel="icon" href={favicon} type="image/x-icon" />
      <link
        rel="chrome-webstore-item"
        href="https://chrome.google.com/webstore/detail/nopekhgebkpkbjoclackdlofmcpokgmc"
      />
    </Helmet>
    <div>
      <Title />
      {children()}
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
