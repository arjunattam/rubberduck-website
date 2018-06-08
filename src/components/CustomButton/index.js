import React from 'react';
import { Button } from 'reactstrap';
import 'devicon/devicon.css';

const CustomButton = ({ href, onClick, width, icon, text }) => (
  <a
    className="btn btn-primary"
    href={href}
    onClick={onClick}
    style={{ width, color: 'white' }}
  >
    <i className={icon} /> {text}
  </a>
);

export default CustomButton;
