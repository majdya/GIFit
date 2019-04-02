const http = require("http");
const router = require("./routes");
const server = http.createServer(router);
const PORT = 5000;

server.listen(PORT, () => console.log("Server is listening on port %s", PORT));
