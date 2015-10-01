var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write('This is before the end\n');
	response.end('Hello World\n');

}).listen(3000);

console.log('Server running at localhost');