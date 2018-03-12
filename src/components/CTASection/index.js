import React from 'react'
import { Row, Col, Jumbotron, Button } from 'reactstrap'
import './index.css'

const CTASection = () => (
  <Jumbotron>
    {/* <h1 className="display-3">Hello, world!</h1> */}
    <p className="lead">
      Use Rubberduck for your private repositories -- on-prem
    </p>
    <hr className="my-2" />
    <p>
      It uses utility classes for typgraphy and spacing to space content out
      within the larger container.
    </p>
    <p className="lead">
      <Button color="primary">Learn More</Button>
    </p>
  </Jumbotron>
)

export default CTASection
