import React from 'react'
import { Button } from 'reactstrap'
import 'devicon/devicon.css'
import './index.css'

const CustomButton = props => (
  <a
    className="btn btn-primary install-button"
    href={props.href}
    onClick={props.onClick}
    style={{ width: props.width }}
  >
    <i className={props.icon} /> {props.text}
  </a>
)

export default CustomButton
