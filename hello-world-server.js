var http = require("http");
var cnt = 0;
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end("Hello World!\n");
	cnt++;
	console.log("Reqeusted! : " + cnt);
}).listen(1337, '127.0.0.1');
console.log("Server running at http://127.0.0.1:1337");