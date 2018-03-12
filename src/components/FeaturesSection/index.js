import React from 'react'
import { Row, Col } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import './index.css'
import referencesImg from '../../static/features/feature-1.png'
import definitionsImg from '../../static/features/feature-2.png'
import filesImg from '../../static/features/feature-3.png'

const FeatureCard = props => (
  <Card className="features-card">
    <CardBody style={{ paddingBottom: '2px' }}>
      <CardTitle>{props.title}</CardTitle>
    </CardBody>
    <img className="features-image" src={props.img} />
    <CardBody>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
)

const sections = [
  {
    img: referencesImg,
    title: 'Find usages',
    text: 'Find where your symbols are used, without searching for them.',
  },
  {
    img: definitionsImg,
    title: 'Open definitions',
    text: 'Glance method and class definitions in the sidebar.',
  },
  {
    img: filesImg,
    title: 'Diff navigation',
    text:
      'Stop scrolling the diff view cluelessly; navigate the diff with the files tree.',
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
