import React from 'react'
import { Row, Col } from 'reactstrap'
import InstallButton from '../InstallButton'
import './index.css'
import logo from '../../static/icon-72.png'

export const description =
  'IDE capabilities in your browser, for better code reviews on GitHub'

class Title extends React.Component {
  render() {
    return (
      <Row className="title-row">
        <Col className="logo-section">
          <img src={logo} alt="Logo" />
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
