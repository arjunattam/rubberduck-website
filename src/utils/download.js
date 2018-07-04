export const startDownload = () => {
  const cacheBust = +new Date();
  const APPCAST_URL = `${window.location.origin}/appcast.xml?${cacheBust}`;
  getAjax(APPCAST_URL, response => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, 'text/xml');
    const items = xmlDoc.getElementsByTagName('item');
    let versionUrls = {};
    let versions = [];
    Array.from(items).forEach(item => {
      const enclosure = item.getElementsByTagName('enclosure')[0];
      const version = +enclosure.getAttribute('sparkle:version');
      const downloadUrl = enclosure.getAttribute('url');
      versions.push(version);
      versionUrls[version] = downloadUrl;
    });
    const latestVersion = versions.reduce(function(a, b) {
      return Math.max(a, b);
    });
    const latestUrl = versionUrls[latestVersion];
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
