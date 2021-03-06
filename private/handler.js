const fs = require("fs");
const path = require("path");
var getGifs = require("./getGifs.js");

var domain = "https://api.giphy.com/v1/gifs/search?q=";
var search = "cat";
var apiKey = "QCbAV0VnE0UWZdureq8keOFGr1xBi0qy";

var exType = {
  html: {
    "Content-Type": "text/html"
  },
  css: {
    "Content-Type": "text/css"
  },
  js: {
    "Content-Type": "application/javascript"
  },
  json: {
    "Content-Type": "application/json"
  },
  ico: {
    "Content-Type": "image/vnd.microsoft.icon"
  }
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

const searchHandler = (url, res) => {
  var url1 = domain + url.split("?")[1] + "&api_key=" + apiKey;
  console.log(url.split("?")[1]);
  getGifs(url1, res);
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


const faviconHandler = (url, res) => {
  console.log("hERE");
  var filePath = path.join(__dirname, "..", "Public", url);
  console.log(filePath);
  var extension = url.split(".")[1];
  console.log(extension, "ttttt");
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

const fetchHandler = (url, res) => {
  console.log("hERE");
  var filePath = path.join(__dirname, "..", "Public", url);
  console.log(filePath);
  var extension = url.split(".")[1];
  console.log(extension, "ttttt");
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



const errHandler = (url, res) => {

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
  error: errHandler,
  search: searchHandler,
  favicon: faviconHandler,
  fetch: fetchHandler
};
