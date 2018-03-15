import React from 'react'
import { Row, Col } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import './index.css'
import referencesImg from '../../static/features/feature-1.png'
import definitionsImg from '../../static/features/feature-2.png'
import filesImg from '../../static/features/feature-3.png'

const FeatureCard = props => (
  <Card className="features-card">
    <img className="features-image" src={props.img} />
    <CardBody style={{ paddingBottom: '2px' }}>
      <CardTitle>{props.title}</CardTitle>
    </CardBody>
    <CardBody>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
)

const sections = [
  {
    img: referencesImg,
    title: 'Find usages',
    text:
      'Find where your methods are called from, and where your classes are instantiated.',
  },
  {
    img: definitionsImg,
    title: 'Open definitions',
    text: 'Glance method and class code snippets right next to the diff view.',
  },
  {
    img: filesImg,
    title: 'Diff navigation',
    text:
      'Navigate the diff with a files tree, and avoid the clueless scrolling.',
  },
]

const FeaturesSection = () => (
  <Row className="features-section">
    {sections.map(element => {
      return (
        <Col xs="12" md="4" key={element.title}>
          <FeatureCard {...element} />
        </Col>
      )
    })}

    {/* <Col>
      <FeatureCard img={placeholder} title={'Find usages'} />
    </Col>
    <Col>
      <FeatureCard img={placeholder} title={'Find usages'} />
    </Col> */}
  </Row>
)

export default FeaturesSection
