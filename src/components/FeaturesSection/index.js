import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './index.css';
import FeatureImage from './Image';
import VideoRow from './Video';
import hoverImg from '../../static/features/hover-small.png';
import usagesImg from '../../static/features/usages-small.png';
import treeImg from '../../static/features/tree-small.png';

const getClass = isActive =>
  isActive ? 'features-card active' : 'features-card';

const FeatureCard = props => (
  <Card className={getClass(props.isActive)} inverse={true}>
    <div className="feature-card-inner">
      <CardBody>
        <h5 className="monospace">{props.title}</h5>
        <div>{props.text}</div>
      </CardBody>
      <div className="images" onClick={props.onClick}>
        <FeatureImage src={props.img} />
      </div>
    </div>
  </Card>
);

const sections = [
  {
    img: 'feature-1.jpg',
    video: 'feature-1-cropped-hb.mp4',
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
    img: 'feature-2.jpg',
    video: 'feature-2-v4-cropped-hb.mp4',
    title: 'Reduce context switches',
    text: (
      <span>
        Glance inline documentation without leaving the git diff. Hover on a
        symbol and then press <span className="keyboard-shortcut">{'⌘'}</span>.
      </span>
    ),
  },
  {
    img: 'feature-3.jpg',
    video: 'feature-3-cropped-hb.mp4',
    title: 'Navigate in control',
    text: (
      <span>
        Instead of scrolling cluelessly, navigate the git diff with a
        hierarchical files view.
      </span>
    ),
  },
  {
    img: 'feature-4.jpg',
    video: 'feature-4-v2-cropped-hb.mp4',
    title: 'Stick to your workflow',
    text: (
      <span>
        Rubberduck works with your pull requests and code pages on GitHub and
        Bitbucket.
      </span>
    ),
  },
];

export class VideoContainer extends React.Component {
  state = {
    activeVideoSrc: 'feature-1-cropped-hb.mp4',
    activeVideoPoster: usagesImg,
  };

  setActive = (src, poster) =>
    this.setState({ activeVideoSrc: src, activeVideoPoster: poster });

  renderCard = index => {
    const current = sections[index];
    return (
      <FeatureCard
        {...current}
        onClick={() => this.setActive(current.video, current.img)}
        isActive={this.state.activeVideoSrc === current.video}
      />
    );
  };

  render() {
    const element = sections[0];
    return (
      <div className="main-section blueprint">
        <div className="top-half" />
        <Container className="video-container">
          <div className="video-container-inner">
            <VideoRow
              src={this.state.activeVideoSrc}
              poster={this.state.activeVideoPoster}
            />

            <Row className="features-row">
              <Col>{this.renderCard(0)}</Col>
              <Col>{this.renderCard(1)}</Col>
            </Row>
            <Row className="features-row">
              <Col>{this.renderCard(2)}</Col>
              <Col>{this.renderCard(3)}</Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
