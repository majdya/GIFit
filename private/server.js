const http = require("http");
const router = require("./router");
const gifit = require("./gifit");

const server = http.createServer(router);
const PORT = 5001 || process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port %s", PORT));
