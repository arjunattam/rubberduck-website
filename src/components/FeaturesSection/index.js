import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import FeatureImage from './Image';
import VideoRow from './Video';
import './index.css';

const FeatureCard = ({ isActive, onClick, title, text, img }) => (
  <Card className={`features-card ${isActive ? 'active' : ''}`} inverse={true}>
    <div className="feature-card-inner" onClick={onClick}>
      <CardBody>
        <h5>{title}</h5>
        <div>{text}</div>
      </CardBody>
      <div className="images">
        <FeatureImage src={img} />
      </div>
    </div>
  </Card>
);

const VIDEOS = [
  {
    img: 'features/feature-1.jpg',
    video: 'features/feature-1-cropped-hb.mp4',
  },
  {
    img: 'features/feature-2.jpg',
    video: 'features/feature-2-v4-cropped-hb.mp4',
  },
  {
    img: 'features/feature-3.jpg',
    video: 'features/feature-3-cropped-hb.mp4',
  },
  {
    img: 'features/feature-4.jpg',
    video: 'features/feature-4-v2-cropped-hb.mp4',
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
    return (
      <div className="main-section feature-main-section">
        <div className="top-half" />
        <Container className="video-container">
          <div className="video-container-inner">
            {this.renderVideo()}
            <Row className="features-row no-gutters">
              <Col>{this.renderCard(0)}</Col>
              <Col>{this.renderCard(1)}</Col>
            </Row>
            <Row className="features-row no-gutters">
              <Col>{this.renderCard(2)}</Col>
              <Col>{this.renderCard(3)}</Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
