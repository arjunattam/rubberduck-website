const leadUrl = 'https://www.codeview.io/api/v1/website_leads/'

const ipInfoUrl = 'https://ipinfo.io/json?token=737774ee26668f'

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

export const makeAPICalls = (emailInput, cb) => {
  getAjax(ipInfoUrl, response => {
    const data = {
      email: emailInput || '',
      ip_address: response.ip || '',
      city: response.city || '',
      country: response.country || '',
      region: response.region || '',
      org: response.org || '',
    }
    postAjax(leadUrl, data, cb(response))
  })
}
