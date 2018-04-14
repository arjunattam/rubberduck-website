import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CustomButton from '../CustomButton'
import './index.css'

const ContactSection = () => (
  <div className="contact-container main-section">
    <Container>
      <Row>
        <Col md="8" xs="12">
          <h3>How can we help?</h3>
          <p>
            We are eager to listen to your feedback, feature requests, and
            understand your internal workflow — to{' '}
            <span className="underlined">
              help your team deliver quality outcomes
            </span>. Reach out to us!
          </p>
        </Col>
        <Col md="4" xs="12" className="contact-buttons">
          <p>
            <CustomButton text={'team@rubberduck.io'} width={200} />
          </p>
          <p>
            <CustomButton
              text={'@getrubberduck'}
              icon={'devicon-twitter-plain'}
              width={200}
            />
          </p>
          <p>
            <CustomButton
              text={'Join our Slack'}
              icon={'devicon-slack-plain'}
              width={200}
            />
          </p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ContactSection
