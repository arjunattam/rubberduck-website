import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import Title from '../components/Title'
import Footer from '../components/Footer'
import { leadDescription } from '../components/Lead'
import favicon from '../static/icon-16.png'

const title = `Rubberduck | ${leadDescription}`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: leadDescription,
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
