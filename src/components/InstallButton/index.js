import React from 'react'
import { Button } from 'reactstrap'
import 'devicon/devicon.css'
import './index.css'

const downloadLink =
  'https://chrome.google.com/webstore/detail/rubberduck/nopekhgebkpkbjoclackdlofmcpokgmc'

const triggerInstall = event => {
  if (chrome && chrome.webstore && chrome.webstore.install) {
    event.preventDefault()
    return chrome.webstore.install(
      null,
      response => {
        console.log('Installation success', response)
      },
      error => {
        console.log('Installation failure', error)
      }
    )
  }
}

const InstallButton = () => (
  // Check for chrome etc? -- to modify the copy
  <a
    className="btn btn-primary install-button"
    href={downloadLink}
    onClick={e => triggerInstall(e)}
  >
    <i className="devicon-chrome-plain" /> Install in your browser
  </a>
)

export default InstallButton
