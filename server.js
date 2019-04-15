const http = require('http');
const url = require('url');

function start(route, handle) {

  function onRequest(request, response) {
    let postData = '';
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);
    
    request.setEncoding('utf8');
    
    request.addListener('data', chunk => {
      postData += chunk;
      console.log(`Received POST data chunk "${chunk}".`);
    });

    request.addListener('end', () => {
      route(handle, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(4242);
  console.log('Server has started.');
}

exports.start = start;
