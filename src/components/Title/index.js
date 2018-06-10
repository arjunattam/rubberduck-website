import React from 'react';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';
import RubberduckIcon from '../icon';
import './index.css';

const Navigation = () => (
  <ul>
    <li className="hide-mobile">
      <Link to="/pricing">Pricing</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li className="hide-mobile">
      <Link to="/support">Support</Link>
    </li>
  </ul>
);

const Title = () => (
  <div className="title title-section dark">
    <Container>
      <Row className="title-row">
        <Col xs="6" md="6">
          <Link to="/">
            <RubberduckIcon size="24" />
            <h1>Rubberduck</h1>
          </Link>
        </Col>
        <Col xs="6" md="6" className="navigation-col">
          <Navigation />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Title;
