const http = require("node:http");

const server = http.createServer((_request, response) => {
  response.end("ready");
});

server.listen(3000, "127.0.0.1");