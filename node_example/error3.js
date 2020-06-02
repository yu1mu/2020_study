process.on('uncaughtException', (err) => {
	console.error('Unexpected Error!!!', err);
}); //프로세스 객체에 이벤트 리스너 달면 처리하지 못한 에러가 발생했을 때 이벤트 리스너는 실행되고 프로세스가 유지

setInterval(()=> {
	throw new error('Hello i\'m error');
}, 1000); //실행 후 1초만에 에러 발생

setTimeout(()=> {
	console.log('executing...');
}, 2000); //이벤트 리스너가 연결되어있지 않으면 실행되지 않음.