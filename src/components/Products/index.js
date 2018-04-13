import React from 'react'
import {
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
} from 'reactstrap'
import './index.css'

const ProductCard = props => (
  <Card className="product-card">
    <CardBody className="title-body">
      <CardTitle>{props.title}</CardTitle>
      <div className="tagline">{props.tagline}</div>
    </CardBody>
    <CardBody>
      <ul>{props.textList.map(element => <li key={element}>{element}</li>)}</ul>
    </CardBody>
    {props.hasHighlight ? (
      <div className="highlight">Available in May 2018</div>
    ) : null}
    <CardBody className="cta-body">
      <Button>{props.cta}</Button>
    </CardBody>
  </Card>
)

const OpenSourceCard = props => (
  <ProductCard
    title={'For open source'}
    tagline={'Hosted by us'}
    textList={[
      'Unlimited open source repositories',
      'Supports GitHub.com',
      'Free to use',
    ]}
    cta={'Install in your browser'}
  />
)

const price = (
  <span>
    {'Get early access at '}
    <span className="strikethrough">{'$119'}</span>
    {' $59/year'}
  </span>
)

const PrivateSourceCard = props => (
  <ProductCard
    title={'For private repositories'}
    tagline={'Runs on localhost'}
    textList={[
      'Unlimited private repositories',
      'Built for security, your code does not leave your machine',
      'Supports in GitHub Enterprise, Bitbucket, GitLab',
      '7 day free trial, and a year of updates included',
    ]}
    cta={price}
    hasHighlight={true}
  />
)

class ProductsSection extends React.Component {
  state = {
    isLoading: false,
    isSubmitted: false,
    inputValue: '',
  }

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  render() {
    return (
      <Row style={{ padding: '0 60px' }}>
        <Col xs="12" md="6" sm="6">
          <OpenSourceCard />
        </Col>
        <Col xs="12" md="6" sm="6">
          <PrivateSourceCard />
        </Col>
      </Row>
    )
  }
}

const ProductContainer = () => (
  <div className="product-section">
    <Container>
      <ProductsSection />
    </Container>
  </div>
)

export default ProductContainer
