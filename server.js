const http = require('http');

function onRequest(request, response) {
  console.log('Request received.');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World');
  response.end();
}

http.createServer(onRequest).listen(4242);

console.log('Server has started.');
