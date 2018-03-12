import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../static/icon-24.png'

const Footer = () => (
  <Container>
    <Row>
      <Col>
        <img src={logo} alt="Logo" />Built for a better code reading experience
        online. <a href="#">See more</a>
      </Col>
      <Col>Got feedback? Or want to join us? Reach out at team@karigari.io</Col>
    </Row>
  </Container>
)

export default Footer
