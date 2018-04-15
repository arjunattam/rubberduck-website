import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MailIcon from '../mail'
import 'devicon/devicon.css'
import './index.css'

const twitter = 'https://twitter.com/getrubberduck'
const email = 'team@rubberduck.io'
const slack =
  'https://join.slack.com/t/karigarihq/shared_invite/enQtMzM5NzQxNjQxNTA1LTM0ZDFhNWQ3YmEyYmExZTY1ODJmM2U3NzExM2E0YmQxODcxYTgwYzczOTVkOGY5ODk2MWE0MzE2ODliNGU1ZDc'

const ContactSection = () => (
  <div className="contact-container main-section">
    <Container>
      <Row>
        <Col sm="8" xs="12">
          <h3>How can we help?</h3>
          <p>
            We are eager to listen to your feedback, feature requests, and
            understand your internal workflow — to help your team{' '}
            <span className="highlight">deliver quality outcomes</span>. Reach
            out to us.
          </p>
        </Col>
        <Col sm="4" xs="12">
          <ul>
            <li>
              <div>
                <MailIcon size={24} />
              </div>
              <div>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </li>
            <li>
              <div>
                <i className="devicon-twitter-plain" style={{ fontSize: 20 }} />
              </div>
              <div>
                <a href={twitter}>{'@getrubberduck'}</a>
              </div>
            </li>
            <li>
              <div>
                <i className="devicon-slack-plain" style={{ fontSize: 24 }} />
              </div>
              <div>
                <a href={slack}>{'Join our Slack'}</a>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ContactSection
