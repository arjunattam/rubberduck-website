import React from 'react'
import { Row, Col } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import './index.css'
import referencesImg from '../../static/features/feature-1-2x.png'
import definitionsImg from '../../static/features/feature-2-2x.png'
import filesImg from '../../static/features/feature-3-2x.png'

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
      'Find where your methods are called from, without leaving the diff view.',
  },
  {
    img: definitionsImg,
    title: 'Open definitions',
    text:
      'Glance method and class definition snippets right next to the git diff.',
  },
  {
    img: filesImg,
    title: 'Navigate faster',
    text: 'Navigate the diff with a files tree, to avoid scrolling cluelessly.',
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
  </Row>
)

export default FeaturesSection
