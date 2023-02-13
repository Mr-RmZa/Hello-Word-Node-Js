console.log("Hello, World!");

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end("<html><body><h1>Hello, World!</h1></body></html>");
});

server.listen(3000);