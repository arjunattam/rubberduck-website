import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import 'devicon/devicon.css'
import './index.css'

const LanguagesRow = () => (
  <div className="languages-container main-section">
    <Container>
      <div>Supported languages</div>
      <Row className="languages-row">
        <i className="devicon-javascript-plain" />
        <i className="devicon-typescript-plain" />
        <i className="devicon-go-plain" />
        <i className="devicon-python-plain" />
        <i className="devicon-java-plain" />
        <i className="devicon-android-plain" />
      </Row>
    </Container>
  </div>
)

export default LanguagesRow
