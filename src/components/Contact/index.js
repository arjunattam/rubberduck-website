import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import MailIcon from '../mail';
import CustomButton from '../CustomButton';

import './index.css';

const twitter = 'https://twitter.com/getrubberduck';
const email = 'team@rubberduck.io';
const triggerChat = () => $crisp.push(['do', 'chat:open']);
const slack =
  'https://join.slack.com/t/karigarihq/shared_invite/enQtMzM5NzQxNjQxNTA1LTM0ZDFhNWQ3YmEyYmExZTY1ODJmM2U3NzExM2E0YmQxODcxYTgwYzczOTVkOGY5ODk2MWE0MzE2ODliNGU1ZDc';

const ContactList = () => (
  <ul>
    <li>
      <a title={email} href={`mailto:${email}`}>
        team@rubberduck.io
      </a>
    </li>
    <li>
      <a href={twitter}>@getrubberduck</a>
    </li>
    <li>
      <a href={slack}>Slack</a>
    </li>
  </ul>
);

const ContactButtons = () => (
  <div className="contact-buttons">
    <CustomButton onClick={triggerChat} text={'Chat with us now'} />
    <div className="strike">
      <span>or</span>
    </div>
    <ContactList />
  </div>
);

const ContactSection = () => (
  <div className="contact-container main-section">
    <Container>
      <h5>Did we miss what you need?</h5>
      <Row>
        <Col md="6" sm="12" xs="12">
          <p>
            We want to get your feedback, feature requests, and understand your
            workflow better — to help your team{' '}
            <span className="highlight">get better at reviews</span>.
          </p>
        </Col>
        <Col md="6" sm="12" xs="12">
          <ContactButtons />
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactSection;
