import React from 'react';

const VideoRow = ({ poster, src }) => (
  <video autoPlay muted loop playsInline src={src} poster={poster} />
);

export default VideoRow;
