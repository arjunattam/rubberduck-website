import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import VideoRow from '../components/Video'
import Lead from '../components/Lead'
import LanguagesRow from '../components/LanguagesRow'
import FeaturesSection from '../components/FeaturesSection'
import ProductContainer from '../components/Products'
import ContactSection from '../components/Contact'

const IndexPage = () => (
  <div>
    <div className="page-section-1">
      <div className="container video-container">
        <Lead />
        <VideoRow />
      </div>
    </div>

    <FeaturesSection />
    <LanguagesRow />
    <ProductContainer />
    <ContactSection />
  </div>
)

export default IndexPage
