import React from 'react';

const VideoRow = ({ poster, src }) => (
  <video autoPlay muted playsInline src={src} poster={poster} />
);

export default VideoRow;
