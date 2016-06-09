var calc = require('./dist/calc');
var fs = require('fs');
var http = require('http');
var url = require('url');

var port = 3001;
var server = http.createServer(function (request, response) {
  console.log('Request on: ' + request.url);
  var urlObject = url.parse(request.url, true);

  var length = urlObject.query['length'];
  var width = urlObject.query['width'];
  var perimeter = calc.perimeter(length, width);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(perimeter + '');
  response.end();
});

console.log('Starting server on port: ' + port);
server.listen(3001);