import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './index.css'
import logo from '../../static/icon-24.png'

const gitterIcon = (
  <a href="https://gitter.im/rubberduckio/Lobby" target="_blank">
    <img src="https://badges.gitter.im/gitterHQ/gitter.png" />
  </a>
)

const Footer = () => (
  <Container>
    <Row className="footer-row">
      <Col className="footer-logo-section">
        <img src={logo} alt="Logo" />
      </Col>
      <Col md="4" xs="10">
        Built towards a better code reading experience on the web.{' '}
        <a href="mailto:team@karigari.io">Join us</a>.
      </Col>
      <Col />
      <Col md="5" xs="12" className="contact-section">
        <p>{gitterIcon}</p>
        <p>team@karigari.io</p>
      </Col>
    </Row>
  </Container>
)

export default Footer
