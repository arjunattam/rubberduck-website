import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import LanguagesRow from '../components/LanguagesRow'
import FeaturesSection from '../components/FeaturesSection'
import CTASection from '../components/CTASection'
import Title from '../components/Title'

const VideoRow = () => (
  <video
    style={{
      width: '100%',
      height: 'auto',
      marginBottom: '10px',
      boxShadow: '0 0 0.75rem 5px rgba(0, 0, 0, 0.05)',
    }}
    className="video-section"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="demo-video-2.mp4" type="video/mp4" />
  </video>
)

const IndexPage = () => (
  <div>
    <Container>
      <Title />
    </Container>
    <VideoRow />
    <Container>
      <LanguagesRow />
      <FeaturesSection />
      <CTASection />
    </Container>
  </div>
)

export default IndexPage
