const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
	console.log('event 1');
});

myEvent.on('event2', ()=> {
	console.log('event 2');
}); // on: 이벤트 이름과 이벤트 콜백 연결
myEvent.on('event2', ()=> {
	console.log('add event 2');
}); // 이벤트 하나에 이벤트 여러 개를 달아줄 수도 있음

myEvent.emit('event1'); //emit : 이벤트 호출
myEvent.emit('event2');

myEvent.once('event3', ()=> {
	console.log('event 3');
}) // once: 한번만 실행

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', ()=> {
	console.log('event 4');
});
myEvent.removeAllListeners('event4'); // 이벤트에 연결된 모든 이벤트 리스너 제거
myEvent.emit('event4'); // 리스너를 제거했기 때문에 콜백 호출 안됨

const listener = () => {
	console.log('event 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2')); // 리스너가 몇 개 연결되어 있는지 확인