import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RubberduckIcon from '../icon';
import './index.css';

const email = 'team@rubberduck.io';
const wiki = 'https://en.wikipedia.org/wiki/Rubber_duck_debugging';

const Footer = () => (
  <div className="footer main-section">
    <Container>
      <Row>
        <Col md="4" xs="12">
          <RubberduckIcon size="32" />
          {'team@rubberduck.io'}
        </Col>
        <Col md="4" xs="12">
          <ul>
            <li>link 1</li>
            <li>link 2</li>
          </ul>
        </Col>
        <Col md="4" xs="12">
          <ul>
            <li>link 1</li>
            <li>link 2</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
