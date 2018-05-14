import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RubberduckIcon from '../icon';
import './index.css';

const email = 'team@rubberduck.io';
const wiki = 'https://en.wikipedia.org/wiki/Rubber_duck_debugging';

const Footer = () => (
  <div className="footer main-section monospace">
    <Container>
      <Row>
        <Col md="6" sm="6" xs="12">
          <RubberduckIcon size="32" />
          <div>
            Why <a href={wiki}>rubberduck</a>?
          </div>
          <div>
            We're hiring, <a href={`mailto:${email}`}>join the team</a>.
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
