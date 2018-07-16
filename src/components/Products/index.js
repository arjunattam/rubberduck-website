import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { InstallButton, DownloadButton, BuyButton } from '../Buttons';
import './index.css';

export const InfoList = ({ textList }) => (
  <ul className="info-list">
    {textList.map(element => (
      <li key={element}>
        <span className="li-span">{element}</span>
      </li>
    ))}
  </ul>
);

const InfoColumn = props => (
  <Col className="info-col" md="8" xs="12">
    <h3>
      <span>{props.name}</span> {props.forWhat}
    </h3>
    <InfoList {...props} />
  </Col>
);

const CTAColumn = ({ isExtension }) => (
  <Col className="cta-col" md="4" xs="12">
    {isExtension ? <InstallButton /> : <DownloadButton />}
    {!isExtension ? <BuyButton /> : null}
  </Col>
);

const OpenSourceCard = () => (
  <Container>
    <Row>
      <InfoColumn
        name={'Basic'}
        forWhat={'for open source repositories'}
        textList={[
          'Free to use.',
          'Supports GitHub.com and Bitbucket Cloud.',
          'Auto-updates for features and language support.',
        ]}
      />
      <CTAColumn isExtension={true} />
    </Row>
  </Container>
);

// TODO(arjun)
// - not clear that you need the browser extension
// - not clear that you are downloading a trial version
const PrivateSourceCard = () => (
  <Container>
    <Row>
      <InfoColumn
        name={'Self-hosted'}
        forWhat={'for private repositories'}
        textList={[
          'Run the analyzer server in a menu bar app.',
          'Single user license. 14 day free trial.',
          <span>
            Built for security. <Link to="/selfhosted">Learn more →</Link>
          </span>,
        ]}
      />
      <CTAColumn isExtension={false} />
    </Row>
  </Container>
);

const ProductsSection = () => (
  <div>
    <div id="products" className="main-section product-main-section-1">
      <OpenSourceCard />
    </div>
    <div className="main-section product-main-section-2">
      <PrivateSourceCard />
    </div>
  </div>
);

export default ProductsSection;
