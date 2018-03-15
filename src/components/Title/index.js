import React from 'react'
import { Row, Col } from 'reactstrap'
import InstallButton from '../InstallButton'
import RubberduckIcon from '../icon'
import './index.css'

export const description =
  'Faster code reviews on GitHub with code-aware navigation'

class Title extends React.Component {
  render() {
    return (
      <Row className="title-row">
        <Col className="logo-section">
          <RubberduckIcon size="72" />
        </Col>
        <Col md="6" xs="8">
          <h1>Rubberduck</h1>
          <p>{description}</p>
        </Col>
        <Col className="install-section">
          <InstallButton />
        </Col>
      </Row>
    )
  }
}

export default Title
