const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	fs.readFile('./server2.html', (err, data) => {
		if (err){
			throw err;
		}
		res.end(data);
	});
}).listen(8081, () => {
	console.log('Go to http://localhost:8081');
});