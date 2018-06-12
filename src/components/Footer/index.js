import React from 'react';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';
import RubberduckIcon from '../icon';
import './index.css';

const email = 'team@rubberduck.io';
const mailto = `mailto:${email}`;
const github =
  'https://github.com/karigari/rubberduck-issues/issues/new/choose';
const twitter = 'https://twitter.com/getrubberduck';
const slack =
  'https://join.slack.com/t/karigarihq/shared_invite/enQtMzM5NzQxNjQxNTA1LTM0ZDFhNWQ3YmEyYmExZTY1ODJmM2U3NzExM2E0YmQxODcxYTgwYzczOTVkOGY5ODk2MWE0MzE2ODliNGU1ZDc';

const EmailButton = () => (
  <a className="btn email-btn" href={mailto}>
    {email}
  </a>
);

const Footer = () => (
  <div className="footer main-section dark">
    <Container>
      <Row>
        <Col md="6" xs="12">
          <RubberduckIcon size="32" />
          <EmailButton />
        </Col>
        <Col md="3" xs="6">
          <ul>
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="support">Support</Link>
            </li>
          </ul>
        </Col>
        <Col md="3" xs="6">
          <ul>
            <li>
              <a href={github}>Report an issue</a>
            </li>
            <li>
              <a href={twitter}>Follow us on Twitter</a>
            </li>
            <li>
              <a href={slack}>Join us on Slack</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
