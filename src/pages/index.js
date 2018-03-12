import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop>
      <source src="demo-video-1.mov" type="video/mp4" />
    </video>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
