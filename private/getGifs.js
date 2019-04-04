var request = require('request');

function getGifs(url, res) {
  request(url, function(error, response, body) {
    if (error) {
      res.writeHead(404);
      res.end("Error");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json"
      })
      res.end(JSON.stringify(body))
    }
  });
}
module.exports = getGifs;
