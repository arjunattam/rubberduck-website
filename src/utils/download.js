const APPCAST_URL = 'http://localhost:8000/appcast.xml';

export const startDownload = () => {
  getAjax(APPCAST_URL, response => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');
    const latestItem = xmlDoc.getElementsByTagName('item')[0];
    const enclosure = latestItem.getElementsByTagName('enclosure')[0];
    const downloadUrl = enclosure.getAttribute('url');
    return window.open(downloadUrl, '_self');
  });
};

function getAjax(url, success) {
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState > 3 && xhr.status == 200) success(xhr.responseText);
  };
  xhr.send();
  return xhr;
}
