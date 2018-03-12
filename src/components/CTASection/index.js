import React from 'react'
import {
  Jumbotron,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap'
import './index.css'

const CTASection = () => (
  <Jumbotron className="cta-section">
    <p className="lead">Rubberduck for your team</p>
    <p>
      We want to help your team deliver quality output with faster code reviews.
      Rubberduck can work with your private repositories, under your internal
      security requirements. Can we reach out?
    </p>
    <div className="lead">
      <InputGroup className="cta-input-group">
        <Input placeholder="Your email" />
        <InputGroupAddon addonType="append">
          <Button color="primary">Get in touch</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  </Jumbotron>
)

export default CTASection
