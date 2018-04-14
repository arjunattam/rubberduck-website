import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import RubberduckIcon from '../icon'
import './index.css'

const twitter = 'https://twitter.com/getrubberduck'
const email = 'team@rubberduck.io'
const slack =
  'https://join.slack.com/t/karigarihq/shared_invite/enQtMzM5NzQxNjQxNTA1LTM0ZDFhNWQ3YmEyYmExZTY1ODJmM2U3NzExM2E0YmQxODcxYTgwYzczOTVkOGY5ODk2MWE0MzE2ODliNGU1ZDc'
const wiki = 'https://en.wikipedia.org/wiki/Rubber_duck_debugging'

const ContactSection = () => (
  <div className="contact-section">
    <div>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
    {'/'}
    <div>
      <a href={twitter} style={{ fontSize: 21 }}>
        <i className="devicon-twitter-plain" />
      </a>
    </div>
    {'/'}
    <div>
      <a href={slack} style={{ fontSize: 24 }}>
        <i className="devicon-slack-plain" />
      </a>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer main-section">
    <Container>
      <Row>
        <Col md="6" xs="12">
          <RubberduckIcon size="24" />
          <div>
            <a href={`mailto:${email}`}>Join the team</a> to build a better code
            reading experience on the web.
          </div>
          <div style={{ marginTop: 20 }}>
            Why <a href={wiki}>rubberduck</a>?
          </div>
        </Col>
        <Col md="6" xs="12">
          <ContactSection />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
