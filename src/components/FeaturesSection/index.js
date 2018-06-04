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
    <div className="feature-card-inner" onClick={props.onClick}>
      <CardBody>
        <h5>{props.title}</h5>
        <div>{props.text}</div>
      </CardBody>
      <div className="images">
        <FeatureImage src={props.img} />
      </div>
    </div>
  </Card>
);

const VIDEOS = [
  {
    img: 'feature-1.jpg',
    video: 'feature-1-cropped-hb.mp4',
  },
  {
    img: 'feature-2.jpg',
    video: 'feature-2-v4-cropped-hb.mp4',
  },
  {
    img: 'feature-3.jpg',
    video: 'feature-3-cropped-hb.mp4',
  },
  {
    img: 'feature-4.jpg',
    video: 'feature-4-v2-cropped-hb.mp4',
  },
];

const sections = [
  {
    title: 'Speed up comprehension',
    text: (
      <span>
        <span className="keyboard-shortcut">{'⌘ + click'}</span> on your symbols
        to find out where they are used and defined, across the repository.
      </span>
    ),
  },
  {
    title: 'Reduce context switches',
    text: (
      <span>
        Glance inline documentation without leaving the git diff. Hover on a
        symbol and then press <span className="keyboard-shortcut">{'⌘'}</span>.
      </span>
    ),
  },
  {
    title: 'Navigate in control',
    text: (
      <span>
        Instead of scrolling cluelessly, navigate the git diff with a
        hierarchical files view.
      </span>
    ),
  },
  {
    title: 'Stick to your workflow',
    text: (
      <span>
        Supports existing pull requests and code pages on Github and Bitbucket.
      </span>
    ),
  },
];

export class VideoContainer extends React.Component {
  state = {
    activeVideoIndex: 0,
  };

  componentDidMount() {
    document
      .querySelector('.video-container video')
      .addEventListener('ended', () => this.onVideoEnded());
  }

  onVideoEnded = () => {
    const newIndex = this.state.activeVideoIndex + 1;
    this.setState({ activeVideoIndex: newIndex % VIDEOS.length });
  };

  setActive = index => this.setState({ activeVideoIndex: index });

  renderCard = index => {
    const section = sections[index];
    const video = VIDEOS[index];
    return (
      <FeatureCard
        {...section}
        {...video}
        onClick={() => this.setActive(index)}
        isActive={this.state.activeVideoIndex === index}
      />
    );
  };

  renderVideo = () => {
    const { activeVideoIndex } = this.state;
    const { video, img } = VIDEOS[activeVideoIndex];
    return <VideoRow src={video} poster={img} />;
  };

  render() {
    const element = sections[0];
    return (
      <div className="main-section feature-main-section">
        <div className="top-half" />
        <Container className="video-container">
          <div className="video-container-inner">
            {this.renderVideo()}
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
