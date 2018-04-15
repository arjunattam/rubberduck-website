import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import './index.css'
import FeatureImage from './Image'
import hoverBigImg from '../../static/features/hover-big.png'
import hoverImg from '../../static/features/hover-small.png'
import usagesBigImg from '../../static/features/usages-big.png'
import usagesImg from '../../static/features/usages-small.png'
import treeBigImg from '../../static/features/tree-big.png'
import treeImg from '../../static/features/tree-small.png'

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
    img: usagesImg,
    bigImg: usagesBigImg,
    title: 'Speed up comprehension',
    text: (
      <span>
        <span className="keyboard-shortcut">{'⌘ + click'}</span> on your symbols
        to find out where they are used and defined — across the entire
        repository.
      </span>
    ),
  },
  {
    img: hoverImg,
    bigImg: hoverBigImg,
    title: 'Avoid context switches',
    text: (
      <span>
        Glance inline documentation without leaving the git diff. Hover on a
        symbol and then press <span className="keyboard-shortcut">{'⌘'}</span>.
      </span>
    ),
  },
  {
    img: treeImg,
    bigImg: treeBigImg,
    title: 'Navigate with control',
    text: (
      <span>
        Use the hierarchical diff files tree to get the big picture. Navigate
        with it instead of scrolling cluelessly.
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
