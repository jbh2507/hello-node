let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'Application/json'});
    res.end('{status:OK}');
}).listen(80);