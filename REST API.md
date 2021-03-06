REST API
--
### REST API (REpresentational State Tranfer)란?
* http 기반으로 필요한 자원에 접근하는 방식을 정해놓은 아키텍처
	* 자원 (문서, 그림, 데이터 등등...)을 이름으로 구분 -> 상태를 주고받는 모든 것.
		* 상태 : 일반적으로 JSON, XML 등을 이용해 데이터를 주고받음.
---
### REST API의 속성
1. 서버에 있는 모든 자원은 클라이언트가 바로 접근할 수 있는 고유 URI가 존재함.
2. 클라이언트가 요청할 시에만 정보를 제공하기 때문에 서버에서 세션 정보를 관리할 필요가 없음. 따라서 서비스의 자유도가 높음.
3. http method 사용. `GET, POST, PUT, DELETE`
	* GET : 조회
	* POST : 생성
	* PUT : 수정
	* DELETE : 삭제
4. 하나의 자원은 주변에 연관된 자원들과 연결되어 표현이 되어야 함.
---
### REST의 특징
1. Server-Client 구조
	* 자원을 가지고 있는 쪽은 서버, 자원을 요청하는 쪽은 클라이언트.
	* 서로간 의존성이 작음.
2. Stateless
	* http protocol이 stateless protocol이기 때문에 REST도 무상태성임.
	* 서버가 각각의 요청을 별개의 것으로 인식하고 처리함.
3. 캐시 처리 가능
	* http가 캐싱 기능을 적용할 수 있기 때문에 대량의 요청을 효율적으로 처리하기 위해 캐시를 이용함.
---
### REST API 설계 규칙
1. 자원의 이름
	* 동사보다는 명사로, 대문자보다는 소문자를 이용.
	* 도큐먼트 이름으로는 단수 명사 이용.
	* 컬렉션 이름으로는 복수명사 이용.
2. 자원에 대한 행위는 http method로 표현
	* URI에 http method가 포함될 수 없음.
	* CRUD 기능을 나타내는 것은 URI에 사용할 수 없음. `Create, Read, Update, Delete, HEAD`
3. 슬래시 (/)는 계층 관계를 나타냄.
4. URI 마지막 문자로 슬래시를 포함하지 않음.
5. 가독성을 위해 긴 경로는 하이픈 (-) 사용, 밑줄(_)은 사용하지 않음.
6. URI가 다른 것은 자원이 다른 것. 따라서 자원이 다르면 URI도 달라야 함.
7. 파일 확장자는 URI에 포함하지 않고 Accept header를 사용.
---
### 응답상태코드
* 200 : 클라이언트의 요청을 정상적으로 수행함.
* 201 : 클라이언트가 리소스 생성을 요청했고 성공적으로 생성됨. (POST를 통한 생성 작업)
* 400 : 클라이언트의 요청이 부적절함.
* 401 : 클라이언트가 인증되지 않은 상태에서 보호된 리소스를 요청함. (로그인하지 않은 유저가 로그인한 유저만 요청 가능한 리소스를 요청했을 때)
* 403 : 응답하고 싶지 않은 리소스를 클라이언트가 요청함. (리소스는 존재하지만 응답하고 싶지 않음을 의미하는 것으로, 리소스가 존재한다는 사실을 알리기 때문에 403보다는 400이나 404를 사용할 것을 권고)
* 405 : 클라이언트가 요청한 리소스에서는 사용 불가능한 method를 이용함.
* 301 : 클라이언트가 요청한 리소스에 대한 URI가 변경되었음. (응답시 Location header에 변경된 URI 명시)
* 500 : 서버에 문제가 있음.
