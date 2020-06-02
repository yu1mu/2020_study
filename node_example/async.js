const fs = require('fs');

console.log('시작');

fs.readFile('./readme.txt', (err, data) => {
	if(err){
		throw err;
	}

	console.log('1', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
	if(err){
		throw err;
	}

	console.log('2', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
	if(err){
		throw err;
	}

	console.log('3', data.toString());
});

console.log('끝'); // 읽기 요청만 세 번을 보내고 이 문장을 실행. 나중에 읽기가 완료되었을 경우 백그라운드가 메인 스레드에 알림을 주어 콜백 함수 실행