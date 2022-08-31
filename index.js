console.log("node server up");

let http = require('http');

let port = process.env.PORT || '80'
console.log("node forward port: " + port);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'Application/json'});
    res.end('{"status":"OK"}');
}).listen(port);