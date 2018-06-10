import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Container } from 'reactstrap';
import { InstallButton, DownloadButton, BuyButton } from '../Buttons';
import './index.css';

const InfoColumn = props => (
  <Col className="info-col" md="8" xs="12">
    <h3>
      <span>{props.name}</span> {props.forWhat}
    </h3>
    <ul>
      {props.textList.map(element => (
        <li key={element}>
          <span className="li-span">{element}</span>
        </li>
      ))}
    </ul>
  </Col>
);

const CTAColumn = ({ isExtension, subText }) => (
  <Col className="cta-col" md="4" xs="12">
    <div>
      {isExtension ? <InstallButton /> : <DownloadButton />}
      <div className="cta-sub" children={subText} />
      {!isExtension ? <BuyButton /> : null}
    </div>
  </Col>
);

const OpenSourceCard = () => (
  <Container>
    <Row>
      <InfoColumn
        name={'Basic'}
        forWhat={'for open source repositories'}
        textList={[
          'Free to use. No limits.',
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
          'Run the analyzer server on your machine.',
          'Single user license. Unlimited repositories.',
          <span>
            Built for security. <Link to="/pricing">Learn more →</Link>
          </span>,
        ]}
      />
      <CTAColumn isExtension={false} subText={'requires macOS 10.11+'} />
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
