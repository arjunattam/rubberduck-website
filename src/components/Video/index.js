import React from 'react'

const VideoRow = () => (
  <video
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
    }}
    className="video-section"
    autoPlay
    controls
    muted
    loop
    playsInline
  >
    <source src="out-8.mp4" type="video/mp4" />
  </video>
)

export default VideoRow
