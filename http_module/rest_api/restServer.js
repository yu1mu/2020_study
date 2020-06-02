const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res) => {
	if (req.method === 'GET'){
		if (req.url === '/') {
			return fs.readFile('./restFront.html', (err, data) =>{
				if(err) {
					throw err;
				}
				res.end(data);
			});
		} else if (req.url === '/about'){// about 페이지 요청 -> html 파일 전송
			return fs.readFile('./about.html', (err, data) => {
				if (err){
					throw err;
				}
				res.end(data);
			});
		} else if (req.url === '/users') { //user 데이터 전송
			return res.end(JSON.stringify(users));
		}
		return fs.readFile(`.${req.url}`, (err,data) => {
			if (err) {
				res.writeHead(404, 'NOT FOUND');
				return res.end('NOT FOUND');
			}
			return res.end(data);
		});
	}  else if (req.method === 'POST') {
		if (req.url === '/users'){
			let body = '';
			req.on('data', (data)=> { // 클라이언트로부터 데이터 받음.
				body += data;
			});
			return req.on('end', () => {
				console.log('POST text(Body):', body);
				const { name } = JSON.parse(body);
				const id = Date.now();
				users[id] = name;
				res.writeHead(201);
				res.end('register success');
			});
		}
	} else if (req.method === 'PUT'){
		if (req.url.startsWith('/users/')){
			const key = req.url.split('/')[2];
			let body = '';
			req.on('data', (data) => {// 클라이언트로부터 데이터 받음.
				body += data;
			});
			return req.on('end', ()=> {
				console.log('PUT text(Body):', body);
				users[key] = JSON.parse(body).name;
				return res.end(JSON.stringify(users));
			});
		}
	} else if (req.method === 'DELETE'){
		if (req.url.startsWith('/users/')){
			const key = req.url.split('/')[2];
			delete users[key]; // 주소에 들어있는 키에 해당하는 사용자 제거
			return res.end(JSON.stringify(users));
		}
	}
	res.writeHead(404, 'NOT FOUND');
	return res.end('NOT FOUND');
})
.listen(8085, ()=> {
	console.log('Go to http://localhost:8085');
});