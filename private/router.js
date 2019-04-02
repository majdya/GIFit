var handlers = require("./handler.js");

const router = (req, res) => {
  var url = req.url;
  if (url === "/") {
    handlers.index(res);
  } else if (url === "/404.html") {
    handlers.assets(url, res);
  }
  {
    handlers.error(res);
  }
};

module.exports = router;
