import React from 'react'
import mediumZoom from 'medium-zoom'

const attachZoom = image => {
  mediumZoom(image, {
    margin: 24,
    scrollOffset: 0,
    metaClick: false,
    // container: '#zoom-container',
    // template: '#zoom-template',
  })
}

const FeatureImage = props => <img className="features-image" src={props.src} />

export default FeatureImage
