import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import RubberduckIcon from '../icon'
import './index.css'

const email = 'team@rubberduck.io'
const wiki = 'https://en.wikipedia.org/wiki/Rubber_duck_debugging'

const Footer = () => (
  <div className="footer main-section">
    <Container>
      <Row>
        <Col md="6" xs="12">
          <RubberduckIcon size="32" />
          <div>
            <a href={`mailto:${email}`}>Join the team</a> to build a better code
            reading experience on the web.
          </div>
        </Col>
        <Col md="6" xs="12" className="col-2">
          <div>
            Why <a href={wiki}>rubberduck</a>?
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
