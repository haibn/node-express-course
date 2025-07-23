const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hey!! welcome to my website!")
    }
    if (req.url == "/about") {
        res.end("hi im ivan and this is an website for my nodejs class")
    }
})

server.listen(3000);