var request = require('request');

function getGifs(url, res) {
  request(url, function(error, response, body) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.end(JSON.stringify(body))
  });
}

module.exports = getGifs;
