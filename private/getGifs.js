var request = require('request');


function getGifs(url, res) {
  request(url, function(error, response, body) {
    // console.log(url);
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  body = JSON.parse(body);
    // console.log('body:', body["data"]); // Print the HTML for the Google homepage.
    res.writeHead(200, {
      "Content-Type": "application/json"
    })

    res.end(JSON.stringify(body))
  });
}

module.exports = getGifs;
