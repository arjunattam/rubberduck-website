import React from 'react'
import { Button } from 'reactstrap'
import 'devicon/devicon.css'
import './index.css'

const downloadLink =
  'https://chrome.google.com/webstore/detail/rubberduck/nopekhgebkpkbjoclackdlofmcpokgmc'

const InstallButton = () => (
  // Check for chrome etc?
  <a className="btn btn-primary install-button" href={downloadLink}>
    <i className="devicon-chrome-plain" /> Install in your browser
  </a>
)

export default InstallButton
