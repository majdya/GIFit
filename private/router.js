var handler = require("./handler.js");

const router = (req, res) => {
  var url = req.url;
  console.log(url);
  if (url === "/") {
    handler.index(res);
  } else if (url.includes("style")) {
    handler.assets(url, res);
  } else if (url.includes("favicon")) {
    handler.favicon(url, res);
  } else if (url.includes("search?")) {
    handler.search(url, res);
  }else if (url.includes("fetch")) {
    handler.fetch(url, res);
  } else {
    handler.error(url, res);
  }
};

module.exports = router;
