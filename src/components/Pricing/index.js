import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { InstallButton, DownloadButton } from '../Buttons';
import { InfoList } from '../Products';
import './index.css';

// TODO(arjun): where does this go?
const price = (
  <span>
    {'Get early access at '}
    <span className="strikethrough">{'$119'}</span>
    {' $59'}
  </span>
);

const DemoImage = ({ imgSrc }) => <img className="demo-img" src={imgSrc} />;

const ExtensionDemo = () => (
  <div>
    <div className="demo-info">
      <strong>Browser extension</strong>. Point to self-hosted.
    </div>
    <DemoImage imgSrc="pricing/browser-ext.png" />
    <div className="demo-info">
      <InstallButton />
    </div>
  </div>
);

const ComingSoon = () => <span className="coming-soon">Coming soon</span>;

const MenuAppDemo = () => (
  <div>
    <div className="demo-info">
      <strong>Menu app</strong>. Start the server.
    </div>
    <DemoImage imgSrc="pricing/menu-app.png" />
    <div className="demo-info">
      <DownloadButton />
    </div>
  </div>
);

const DemoRow = () => (
  <Row>
    <Col md="6" xs="12">
      <MenuAppDemo />
    </Col>
    <Col md="6" xs="12">
      <ExtensionDemo />
    </Col>
  </Row>
);

const PricingInfo = () => (
  <Row>
    <Col md="6" xs="12">
      <InfoList
        textList={[
          'Security first. Everything runs on your machine.',
          'Single user license. Unlimited repositories.',
          <span>
            Year of free updates. Follow our <Link to="blog">changelog</Link>.
          </span>,
        ]}
      />
    </Col>
    <Col md="6" xs="12">
      <InfoList
        textList={[
          'Supports GitHub.com and Bitbucket Cloud.',
          <span>
            <ComingSoon /> Support for GitHub Enterprise, Bitbucket Server,
            Gitlab
          </span>,
        ]}
      />
    </Col>
  </Row>
);

const PricingRow = () => (
  <Row className="pricing-row">
    <Col>
      <strong>$99 per year</strong>.{' '}
      <a href="mailto:team@rubberduck.io">Buy a license</a>, or start your 14
      day free trial. ↓
    </Col>
  </Row>
);

export const PricingContainer = () => {
  return (
    <Container>
      <PricingInfo />
      <PricingRow />
      <DemoRow />
    </Container>
  );
};
