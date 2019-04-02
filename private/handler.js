var fs = require("fs");
var path = require("path");

var exType = {
  html: { "Content-Type": "text/html" },
  css: { "Content-Type": "text/css" },
  js: { "Content-Type": "application/javascript" },
  json: { "Content-Type": "application/json" }
};

const indexHandler = res => {
  var filePath = path.join(__dirname, "..", "Public", "index.html");
  fs.readFile(filePath, function(error, file) {
    if (error) {
      res.writeHead(500, exType.html);
      res.end("<h1>sorry, something went wrong</h1>");
    } else {
      res.writeHead(200, exType.html);
      res.write(file);
    }
    res.end();
  });
};

const assetsHandler = (url, res) => {
  var filePath = path.join(__dirname, "..", "Public", url);
  var extension = url.split(".")[1];
  console.log(url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      res.writeHead(500, exType.html);
      res.end("<h1>sorry, something wentff wrong</h1>");
    } else {
      res.writeHead(200, exType[extension]);
      res.end(file);
    }
  });
};

const errHandler = res => {
  let filePath = path.join(__dirname, "..", "Public", "404.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500);
      res.end("500 error");
    } else {
      res.writeHead(200, exType.html);
      res.end(file);
    }
  });
};

module.exports = {
  index: indexHandler,
  assets: assetsHandler,
  error: errHandler
};
