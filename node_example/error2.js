const fs = require('fs');

setInterval(()=> {
	fs.unlink('./abc.js', (err) =>{
		if (err) {
			console.error(err);
		}
	});
}, 1000); // unlink로 없는 파일 지움 => 에러 발생하지만 프로세스를 멈추지는 않음.