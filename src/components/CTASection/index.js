import React from 'react'
import {
  Jumbotron,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap'
import './index.css'

function getAjax(url, success) {
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open('GET', url)
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200)
      success(JSON.parse(xhr.responseText))
  }
  xhr.send()
  return xhr
}

function postAjax(url, data, success) {
  var params =
    typeof data == 'string'
      ? data
      : Object.keys(data)
          .map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
          })
          .join('&')

  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open('POST', url)
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status >= 200) {
      success(JSON.parse(xhr.responseText))
    }
  }
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send(params)
  return xhr
}

const leadUrl = 'http://localhost:8000/api/v1/website_leads/'

const ipInfoUrl = 'https://ipinfo.io/json?token=737774ee26668f'

class CTASection extends React.Component {
  state = {
    isLoading: false,
    isSubmitted: false,
    inputValue: '',
  }

  sendRequest = evt => {
    evt.preventDefault()
    this.setState({
      isLoading: true,
    })

    getAjax(ipInfoUrl, response => {
      const data = {
        email: this.state.inputValue || '',
        ip_address: response.ip || '',
        city: response.city || '',
        country: response.country || '',
        region: response.region || '',
        org: response.org || '',
      }
      postAjax(leadUrl, data, response => {
        this.setState({
          isLoading: false,
          isSubmitted: true,
        })
      })
    })
  }

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  render() {
    const form = (
      <div>
        <p>We will get in touch to better understand your needs.</p>
        <form onSubmit={evt => this.sendRequest(evt)}>
          <InputGroup className="cta-input-group">
            <Input
              placeholder="Your email"
              value={this.state.inputValue}
              onChange={evt => this.updateInputValue(evt)}
              required
            />
            <InputGroupAddon addonType="append">
              {this.state.isLoading ? (
                <Button color="primary" disabled>
                  Saving...
                </Button>
              ) : (
                <Button color="primary" type="submit">
                  Submit
                </Button>
              )}
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    )

    const success = 'Thank you. We will get in touch with you shortly.'

    return (
      <Jumbotron className="cta-section">
        <p className="lead">Rubberduck for your team</p>
        <p>
          Deliver quality output with better code reviews. Rubberduck works with
          your private repositories, under your internal security requirements.
        </p>
        <div>{this.state.isSubmitted ? success : form}</div>
      </Jumbotron>
    )
  }
}

export default CTASection
