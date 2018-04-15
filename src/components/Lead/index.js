import React from 'react'
import { Container } from 'reactstrap'
import VideoRow from './Video'
import './index.css'

export const leadDescription = 'Faster code reviews with code-aware navigation'

const VIDEOS = {
  github: 'github-demo-scaled.mp4',
  bitbucket: 'bitbucket-demo-scaled.mp4',
}

class Lead extends React.Component {
  state = {
    activeVideo: 'github',
  }

  setActive = service => this.setState({ activeVideo: service })

  getSwitcherSpan = (intName, extName) => (
    <span onClick={() => this.setActive(intName)} className="video-switcher">
      {extName}
    </span>
  )

  getGithubSpan = () => this.getSwitcherSpan('github', 'GitHub')

  getBitbucketSpan = () => this.getSwitcherSpan('bitbucket', 'Bitbucket')

  render() {
    const videoSrc = VIDEOS[this.state.activeVideo]
    return (
      <div className="lead-container">
        <Container>
          <h2>{leadDescription}</h2>
          <h4>
            IDE sidebar for {this.getGithubSpan()} and {this.getBitbucketSpan()}
          </h4>
          <VideoRow src={videoSrc} />
        </Container>
      </div>
    )
  }
}
export default Lead
