import React from 'react'

const VideoRow = props => (
  <video
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      border: '1px solid #ddd',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      boxShadow: '0 0 3px 0 #ecebf1',
    }}
    className="video-section"
    autoPlay
    muted
    loop
    playsInline
    src={props.src}
  />
)

export default VideoRow
