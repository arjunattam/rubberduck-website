import React from 'react'
import Link from 'gatsby-link'

import { Container, Row, Col, Button } from 'reactstrap'
import LanguagesRow from '../components/LanguagesRow'
import CTA from '../components/CTA'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../logo-128.png'

class Title extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <img src={logo} alt="Logo" />
        </Col>
        <Col>
          <h1>Rubberduck</h1>
          <p>IDE sidebar for Github for better Code Reviews</p>
        </Col>
        <Col>
          <Button>Install from Chrome</Button>
        </Col>
      </Row>
    )
  }
}

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
    <CTA />
  </Container>
)

export default IndexPage
