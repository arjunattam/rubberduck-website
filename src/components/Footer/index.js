import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import RubberduckIcon from '../icon'
import './index.css'

const twitter = 'https://twitter.com/getrubberduck'
const email = 'team@karigari.io'

const ContactSection = () => (
  <div className="contact-section">
    <div>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
    {'/'}
    <div>
      <a href={twitter}>
        <i className="devicon-twitter-plain" />
      </a>
    </div>
  </div>
)

const Footer = () => (
  <Container>
    <Row className="footer-row">
      <Col className="footer-logo-section">
        <RubberduckIcon size="24" />
      </Col>
      <Col md="6" xs="10">
        <a href={`mailto:${email}`}>Join the team</a> to build a better code
        reading experience on the web.
      </Col>
      <Col />
      <Col md="3" xs="12">
        <ContactSection />
      </Col>
    </Row>
  </Container>
)

export default Footer
