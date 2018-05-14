import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CustomButton from '../CustomButton';
import RubberduckIcon from '../icon';
import './index.css';

const downloadLink =
  'https://chrome.google.com/webstore/detail/rubberduck/nopekhgebkpkbjoclackdlofmcpokgmc';

const triggerInstall = event => {
  if (chrome && chrome.webstore && chrome.webstore.install) {
    event.preventDefault();
    return chrome.webstore.install(
      null,
      response => {
        console.log('Installation success', response);
      },
      error => {
        console.log('Installation failure', error);
      }
    );
  }
};

export const InstallButton = () => (
  <CustomButton
    text={'Install in your browser'}
    href={downloadLink}
    onClick={e => triggerInstall(e)}
    icon={'devicon-chrome-plain'}
  />
);

const Navigation = () => (
  <ul>
    <li>
      <a href="#products">Pricing</a>
    </li>
    {/* <li>
      <a href="https://support.rubberduck.io/" target="_blank">
        Support
      </a>
    </li> */}
    <li>
      <a href="https://twitter.com/getrubberduck" target="_blank">
        Changelog
      </a>
    </li>
  </ul>
);

const Title = () => (
  <div className="title monospace">
    <Container>
      <Row className="title-row">
        <Col xs="12" sm="6" md="8">
          <RubberduckIcon size="24" />
          <h1>Rubberduck</h1>
        </Col>
        <Col xs="12" sm="6" md="4" className="navigation-col">
          <Navigation />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Title;
