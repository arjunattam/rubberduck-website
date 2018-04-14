import React from 'react'
import mediumZoom from 'medium-zoom'

const attachZoom = image => {
  mediumZoom(image)
}

const FeatureImage = props => (
  <img
    className="features-image"
    src={props.src}
    data-zoom-target="image-hd.jpg"
    ref={attachZoom}
  />
)

export default FeatureImage
