const http = require("http");
const router = require("./router");
const server = http.createServer(router);
const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => console.log("Server is listening on port %s", PORT));
d;
