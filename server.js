var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Raghava M\nApp (hellochris) is running on Node.JS ' + process.version);
}).listen(process.env['app_port'] || 3000);
