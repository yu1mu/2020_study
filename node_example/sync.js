const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme.txt');
console.log('1', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3', data.toString());

console.log('끝'); // 요청이 많을 때 성능에 문제. 콜백에 다음 함수를 넣어주면 비동기식으로도 순서 유지 가능.