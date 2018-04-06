import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import LanguagesRow from '../components/LanguagesRow'
import FeaturesSection from '../components/FeaturesSection'
import CTASection from '../components/CTASection'
import ProductsSection from '../components/ProductsSection'
import Title from '../components/Title'

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
      <Container>
        <Title />
      </Container>
      <div className="container video-container">
        <VideoRow />
      </div>
    </div>
    <div className="page-section-2">
      <Container>
        <LanguagesRow />
        {/* <FeaturesSection /> */}
        {/* <CTASection /> */}
        <ProductsSection />
      </Container>
    </div>
  </div>
)

export default IndexPage
