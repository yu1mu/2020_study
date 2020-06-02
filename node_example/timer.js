const timeout = setTimeout(()=> {
	console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(()=> {
	console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(()=> {
	console.log('실행되지 않음');
}, 3000);

setTimeout(()=> {
	clearTimeout(timeout2);
	clearInterval(interval);
}, 2500); // 2.5초가 지나면 timeout2와 interval 취소

const immediate = setImmediate(() => {
	console.log('즉시 실행');
});

const immediate2 = setImmediate(()=> {
	console.log('실행되지 않음');
});

clearImmediate(immediate2);