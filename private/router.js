var handler = require("./handler.js");

const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handler.index(res);
  } else if (url.includes("style")) {
    handler.assets(url, res);
  } else if (url.includes("fetch")) {
    handler.assets(url, res);
  } else if (url.includes("search?")) {
    handler.search(url,res);
  } else {
    console.log(url);
  }
};

module.exports = router;
