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
    <p className="lead">Accelerate code reviews in your team</p>
    <hr className="my-2" />
    <p>
      We want to help your team deliver high-quality output, with better code
      reviews. Rubberduck can work with your private repositories, under your
      internal security requirements.
    </p>
    <p className="lead">
      <InputGroup className="cta-input-group">
        <Input placeholder="Your email" />
        <InputGroupAddon addonType="append">
          <Button color="primary">Learn more</Button>
        </InputGroupAddon>
      </InputGroup>
    </p>
  </Jumbotron>
)

export default CTASection
