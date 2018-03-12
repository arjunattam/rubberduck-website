import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import LanguagesRow from '../components/LanguagesRow'
import CTASection from '../components/CTASection'
import Title from '../components/Title'

const VideoRow = () => (
  <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop>
    <source src="demo-video-1.mov" type="video/mp4" />
  </video>
)

const IndexPage = () => (
  <Container>
    <Title />
    <VideoRow />
    <LanguagesRow />
    <CTASection />
  </Container>
)

export default IndexPage
