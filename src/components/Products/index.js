import React from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Col,
  Container,
} from 'reactstrap';
import { makeAPICalls } from './utils';
import { InstallButton } from '../Title';
import './index.css';
import { startDownload } from '../../utils/download';

class CTA extends React.Component {
  state = {
    isLoading: false,
    isSubmitted: false,
    inputValue: '',
  };

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  sendRequest = evt => {
    evt.preventDefault();
    this.setState({
      isLoading: true,
    });

    makeAPICalls(this.state.inputValue, response => {
      this.setState({
        isLoading: false,
        isSubmitted: true,
      });
    });
  };

  render() {
    const { hasInput, text, subText } = this.props;
    return (
      <div>
        <Button onClick={startDownload}>Start download</Button>

        {hasInput ? (
          <div className="cta-vertical-group">
            <form onSubmit={e => this.sendRequest(e)}>
              <Input
                placeholder="Your email"
                value={this.state.inputValue}
                onChange={evt => this.updateInputValue(evt)}
                required
                className="cta-input"
              />
              {this.state.isLoading ? (
                <Button className="btn btn-primary" disabled>
                  Saving...
                </Button>
              ) : this.state.isSubmitted ? (
                <Button className="btn btn-primary">Done!</Button>
              ) : (
                <Button className="btn btn-primary" type="submit">
                  {text}
                </Button>
              )}
            </form>
          </div>
        ) : (
          <InstallButton />
        )}

        <div className="cta-sub" children={subText} />
      </div>
    );
  }
}

const InfoColumn = props => (
  <Col className="info-col" md="8" xs="12">
    <h3>
      <span>{props.name}</span> {props.forWhat}
    </h3>
    <ul>{props.textList.map(element => <li key={element}>{element}</li>)}</ul>
  </Col>
);

const CTAColumn = props => (
  <Col className="cta-col" md="4" xs="12">
    <CTA {...props} />
  </Col>
);

const OpenSourceCard = props => (
  <Container>
    <Row>
      <InfoColumn
        name={'Basic'}
        forWhat={'for open source'}
        tagline={'Browser extension + analyzer engine hosted by us.'}
        textList={[
          'Free to use. Unlimited public repositories.',
          'Supports GitHub.com and Bitbucket Cloud.',
          'Auto-updates for features and language support.',
        ]}
      />
      <CTAColumn text={'Install in your browser'} />
    </Row>
  </Container>
);

const price = (
  <span>
    {'Get early access at '}
    <span className="strikethrough">{'$119'}</span>
    {' $59'}
  </span>
);

const PrivateSourceCard = props => (
  <Container>
    <Row>
      <InfoColumn
        name={'Self-hosted'}
        forWhat={'for private repositories'}
        tagline={
          <span>
            Browser extension + analyzer engine in a menu bar app.{' '}
            <span className="highlight">Available June 10.</span>
          </span>
        }
        textList={[
          'Single user license. Unlimited repositories.',
          'Supports GitHub.com and Enterprise.',
          'Supports Bitbucket Cloud and Server',
          <span>
            <span className="highlight">Built for security</span>: your code
            does not leave your machine.
          </span>,
        ]}
      />
      <CTAColumn
        text={price}
        subText={'For OS X El Capitan or later'}
        hasInput={true}
      />
    </Row>
  </Container>
);

class ProductsSection extends React.Component {
  state = {
    isLoading: false,
    isSubmitted: false,
    inputValue: '',
  };

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  render() {
    return (
      <div>
        <div id="products" className="main-section product-main-section-1">
          <OpenSourceCard />
        </div>
        <div className="main-section product-main-section-2">
          <PrivateSourceCard />
        </div>
      </div>
    );
  }
}

export default ProductsSection;
