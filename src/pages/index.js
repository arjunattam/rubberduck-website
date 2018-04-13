import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import Lead from '../components/Lead'
import LanguagesRow from '../components/LanguagesRow'
import FeaturesSection from '../components/FeaturesSection'
import CTASection from '../components/CTASection'
import ProductContainer from '../components/Products'

const VideoRow = () => (
  <video
    style={{
      width: '100%',
      height: 'auto',
    }}
    className="video-section"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="demo-video-5-hb-2.mp4" type="video/mp4" />
  </video>
)

const IndexPage = () => (
  <div>
    <div className="page-section-1">
      <div className="container video-container">
        <Lead />
        <VideoRow />
      </div>
    </div>
    <div className="page-section-2">
      <Container>
        <LanguagesRow />
        <FeaturesSection />
        <CTASection />
      </Container>
    </div>
    <ProductContainer />
  </div>
)

export default IndexPage
