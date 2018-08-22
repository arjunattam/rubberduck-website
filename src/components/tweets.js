import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import { Container, Row } from 'reactstrap';
import './tweets.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const TWEET_IDS = [
  '1031802679444615170',
  '1013691513904271361',
  '1030559793335988224',
  '1021807241714978816',
  '1012969871515226113',
];

class Tweets extends React.Component {
  render() {
    return (
      <div className="main-section">
        <Container
          style={{
            maxWidth: '100%',
            overflowX: 'hidden',
            padding: '15px',
          }}
        >
          <div className="tweets-scroll-container">
            {TWEET_IDS.map(id => {
              return (
                <TweetEmbed
                  id={id}
                  key={id}
                  options={{ cards: 'hidden' }}
                  className="embedded-tweet"
                />
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Tweets;
