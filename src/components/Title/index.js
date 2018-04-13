import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InstallButton from '../InstallButton'
import RubberduckIcon from '../icon'
import './index.css'

export const description =
  'Faster code reviews on GitHub with code-aware navigation'

const Title = () => (
  <div className="title">
    <Container>
      <Row className="title-row">
        <Col md="8" className="logo-col">
          <RubberduckIcon size="28" />
          <h1>Rubberduck</h1>
        </Col>
        <Col md="4" className="install-col">
          <InstallButton />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Title
