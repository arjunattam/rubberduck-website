import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import './index.css'
import referencesImg from '../../static/features/feature-1-2x.png'
import definitionsImg from '../../static/features/feature-2-2x.png'
import filesImg from '../../static/features/feature-3-2x.png'
import FeatureImage from './Image'

const FeatureCard = props => (
  <Card className="features-card">
    <FeatureImage src={props.img} />
    <div className="feature-card-inner">
      <CardBody style={{ paddingBottom: '2px' }}>
        <CardTitle>{props.title}</CardTitle>
      </CardBody>
      <CardBody>
        <CardText>{props.text}</CardText>
      </CardBody>
    </div>
  </Card>
)

const sections = [
  {
    img: referencesImg,
    title: 'Speed up comprehension',
    text: (
      <span>
        Find symbols usages and definitions, across the repository with{' '}
        <span className="keyboard-shortcut">{'⌘ + click'}</span>.
      </span>
    ),
  },
  {
    img: definitionsImg,
    title: 'Avoid context switches',
    text: (
      <span>
        Glance inline documentation where you need it the most. Press{' '}
        <span className="keyboard-shortcut">{'⌘'}</span> to see more.
      </span>
    ),
  },
  {
    img: filesImg,
    title: 'Navigate in control',
    text: (
      <span>
        Use the diff files tree to get the hierarchical view, instead of scroll
        cluelessly on the flat diff.
      </span>
    ),
  },
]

const FeaturesSection = () => (
  <div className="features-section main-section blueprint">
    <Container>
      <Row>
        {sections.map(element => {
          return (
            <Col xs="12" md="4" sm="4" key={element.title}>
              <FeatureCard {...element} />
            </Col>
          )
        })}
      </Row>
    </Container>
  </div>
)

export default FeaturesSection
