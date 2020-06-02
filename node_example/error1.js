setInterval(()=> {
	console.log('start');
	try {
		throw new Error('Error!!!!!!!!!!!');
	} catch (err) {
		console.error(err);
	}
}, 1000); //프로세스의 에러발생 여부를 알기 위해 setInterval 설정