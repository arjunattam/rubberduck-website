import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import Lead from '../components/Lead'
import LanguagesRow from '../components/LanguagesRow'
import FeaturesSection from '../components/FeaturesSection'
import ProductContainer from '../components/Products'
import ContactSection from '../components/Contact'

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

    {/* <div className="page-section-2" /> */}
    <FeaturesSection />

    <Container>
      <LanguagesRow />
    </Container>

    <ProductContainer />
    <ContactSection />
  </div>
)

export default IndexPage
