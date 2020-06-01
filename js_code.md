#JS 문법
--
### const, let
* const : 한번 대입하면 다른 값을 대입할 수 없음. const에 다른 값을 대입하려고 하면 에러 발생, 초기화 시 값을 대입하지 않아도 에러 발생.
* let : 한 번 초기화했던 변수에 다른 값을 대입해야 할 때

> 일반적으로 js를 사용할 때 한번 초기화했던 변수에 다른 값을 대입하는 경우는 적기 때문에 기본적으로 변수 선언 시에는 const를 사용하고 다른 값을 대입해야 하는 상황이 생겼을 때 let 사용

### 문자열
```js
var string = num1 + '더하기' + num2 + '는 \'' + result + '\''; // num1 더하기 num2는 'num3'
```
> 작은따옴표의 이스케이프 때문에 코드가 지저분.

```js
const string = `${num1} 더하기 ${num2}는 '${num3}'`;
```
> 백틱 형식으로 고쳐 쓰는 게 나음.

### 화살표 함수
```js
function add1(x, y) {
	return x + y;
}

const add2 (x, y) => {
	return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);
```
> 모두 같은 기능을 하는 함수.

### promise
```js
const condition = true;
const promise = new Promise((resolve, reject) => {
	if (condition) {
		resolve('성공');}
	else {
		reject('실패');
		}
});

promise
	.then((message) => {
	console.log(message); // 성공(resolve)한 경우 실행
	})
	.catch((error) => {
	console.error(error); // 실패(reject)한 경우 실행
});
```
> 기본적인 promise 사용법. 프로미스 객체를 생성한 뒤 resolve와 reject를 매개변수로 갖는 콜백 함수를 넣어주면 then과 catch 메소드를 붙일 수 있음. 

```js
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
	.then((result) => {
	console.log(result);
	})
	.catch(error) => {
	console.error(error);
	});
```
> 프로미스가 여러 개 있을 때 `Promise.all`에 넣으면 모두 resolve될 때까지 기다렸다가 then으로 넘어감. 프로미스 중 하나라도 reject가 되면 catch로 넘어감.

### async/await
```js
function findAndSaveUser(Users) {
	Users.fineOne({})
		.then((user) => {
		user.name - 'yu1mu';
		return user.save();
		})
		.then((user) => {
		return Users.findOne({gender: 'f'});
		})
		.then((user) => {
		...//etc
		})
		.catch(err => {
		console.error(err);
		});
}
```
> 코드 길이가 너무 길고 단순 반복인데 복잡함

```js
async function findAndSaveUser(Users) {
	try {
		let user = await Users.findOne({});
		user.name = 'yu1mu';
		user = await user.save();
		user = await Users.findOne({gender : 'f'});
		//etc
	} catch (error) {
		console.error(error);
	}
}
```
>  함수 선언부를 `async funtion`으로 교체한 후 프로미스 앞에 `await`을 붙여주면 해당 프로미스가 resolve될 때까지 기다린 뒤 다음 로직으로 넘어감.