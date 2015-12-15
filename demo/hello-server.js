var http = require('http');

// Create a HTTP server
// - request comes from the client
// - response goes to the client
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World !');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');