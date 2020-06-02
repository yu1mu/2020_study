const http = require('http');

const parseCookies = (cookie = '') =>
	cookie.split(';')
	.map(v => v.split('='))
	.map(([k, ... vs]) => [k, vs.join('=')])
	.reduce((acc, [k, v]) => {
		acc[k.trim()] = decodeURIComponent(v);
		return acc;
	}, {}); // 쿠키를 객체로 바꿈

	http.createServer((req, res) => {
		const cookies = parseCookies(req.headers.cookie);
		console.log(req.url, cookies);
		res.writeHead(200, {'Set-Cookie' : 'mycookie=test'}); // 응답 헤더에 쿠키 기록
		res.end('Hello Cookie');
	})
	.listen(8082, () => {
		console.log('Go to http://localhost:8082');
	});