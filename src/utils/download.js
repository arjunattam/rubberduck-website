export const startDownload = () => {
  const APPCAST_URL = `${window.location.origin}/appcast.xml`;
  getAjax(APPCAST_URL, response => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');
    const items = xmlDoc.getElementsByTagName('item');
    let versions = {};

    Array.from(items).forEach(item => {
      const enclosure = item.getElementsByTagName('enclosure')[0];
      const version = +enclosure.getAttribute('sparkle:version');
      const downloadUrl = enclosure.getAttribute('url');
      versions[version] = downloadUrl;
    });

    const latestUrl = Object.keys(versions).reduce(
      (a, b) => (a > b ? versions[a] : versions[b]),
      versions[0]
    );

    return window.open(latestUrl, '_self');
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
