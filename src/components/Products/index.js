import React from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from 'reactstrap';
import { makeAPICalls } from './utils';
import { InstallButton } from '../Title';
import './index.css';

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
        {hasInput ? (
          <form onSubmit={e => this.sendRequest(e)}>
            <div className="cta-vertical-group">
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
            </div>
          </form>
        ) : (
          <InstallButton />
        )}

        <div className="cta-sub" children={subText} />
      </div>
    );
  }
}

const ProductCard = props => (
  <Card className="product-card">
    <CardBody className="product-title monospace">
      <CardTitle>{props.title}</CardTitle>
      <div className="tagline">{props.tagline}</div>
    </CardBody>

    <CardBody>
      <ul>{props.textList.map(element => <li key={element}>{element}</li>)}</ul>
    </CardBody>

    <CardBody className="cta-body">
      <CTA
        text={props.ctaText}
        subText={props.ctaSubtext}
        hasInput={props.hasInput}
      />
    </CardBody>
  </Card>
);

const OpenSourceCard = props => (
  <ProductCard
    title={'For open source'}
    tagline={'Browser extension + analyzer engine hosted by us.'}
    textList={[
      'Free to use. Unlimited public repositories.',
      'Supports GitHub.com and Bitbucket Cloud.',
      'Auto-updates for features and language support.',
    ]}
    ctaText={'Install in your browser'}
  />
);

const price = (
  <span>
    {'Get early access at '}
    <span className="strikethrough">{'$119'}</span>
    {' $59'}
  </span>
);

const PrivateSourceCard = props => (
  <ProductCard
    title={'For private repositories'}
    tagline={
      <span>
        Browser extension + analyzer engine in a menu bar app.{' '}
        <span className="highlight">Available in June.</span>
      </span>
    }
    textList={[
      'Single user license. Unlimited repositories.',
      'Supports GitHub.com and Enterprise.',
      'Supports Bitbucket Cloud and Server',
      <span>
        <span className="highlight">Built for security</span>: your code does
        not leave your machine.
      </span>,
    ]}
    ctaText={price}
    ctaSubtext={'Includes a year of updates and 7 day free trial'}
    hasInput={true}
  />
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
      <Row>
        <Col xs="12" md="6" sm="6">
          <OpenSourceCard />
        </Col>
        <Col xs="12" md="6" sm="6">
          <PrivateSourceCard />
        </Col>
      </Row>
    );
  }
}

const ProductContainer = () => (
  <div id="products" className="product-section dark-blueprint main-section">
    <Container>
      <ProductsSection />
    </Container>
  </div>
);

export default ProductContainer;
