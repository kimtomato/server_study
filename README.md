# appcenter_server_study

week2

## HTTP

- 

    비상태성을 가짐 → 이전 상태 기억 x

    HTTP Method : get, post, put, patch, delete 등등 

    쿼리로 보내면 빠르기때문에 검색은 보통 get방식 이용

    URL 형식

    http(protocol://—host(사이트 주소 )—:port number/ resource path + query

    -domain: 프로토콜, 호스트 , 포트까지 포함

    -resource path= URI= 파라미터 

    현재 사용하는 표준은 http/1.1

    상태코드 : 서버에서 설정해주는 응답정보

    - 200번대 : 성공(크게보면 성공이나 뒤의 숫자에 따라 의미가 약간씩 다름)
    - 300번대: 리다이렉션
    - 400번대 : 클라이언트 에러
    - 500번대 서버 에러

## Node.js

- 

    자바스크립트를 backend에서 이용할 수 있게 해줌

    **비동기 동작 (↔동기 동작: 순서대로 코드가 동작): 처리 완료 순서가 제각각 

    사용ex) 네트워크 입출력, 파일 입출력, 데이터베이스 입출력

    -싱글 스레드 기반 (하나의 스레드에 하나의 콜스택 존재)

    → 단일 호출 스택을 가짐  콜스택에 비동기 동작하는 것이 있다면 다른 스레드로 넘어감 , 비동기는 해당 스레드가 아닌 다른 스레드에서 동작 

    즉 현재 동작과 비동기는 별개의 스레드에서 동작함, 비동기 프로그램은 순서가 제각각이기 때문에 개발자는 비동기를 고려해서 프로그램을 짜야한다 

<따로 찾아볼 내용:컴파일언어와 인터프린트 언어(자바스크립트)의 차이>

 

## API

- 

    -프로그램을 위한 인터페이스

    인터페이스는 물건을 조작하기 위한 디자인

## RESTful API

- 

    REST는 소프트웨어 개발 아키텍처의 형식

    해석하면 자원의 대표에 의한 상태 전달(말이 잘이해가 안가므로 예시 찾아보기)

    여기서의 자원은 개발시 소프트웨어가 관리하는 것들..

    → 모든 리소스를 하나의 파일에 연결해서 관련된 내용만 관리하는것..

## CRUD(create,read,updata,delete)

- 

    -데이터의 생성 조회 수정 삭제가 가능함

    익스프레스도 일종의 프레임워크임

    더 세분화된 개념으로 7 standard actions가 있다

<터미널 사용 >

npm init- 이 파일이 node.js를 사용한다는 것을 알림

npm install express- 익스프레스 설치

touch app.js → app.js 폴더 생성

app.get → HTTP GET

res.render을 사용하려면 따로 뷰엔진을 설정해줘야한다

app.listen 을 통해 port binding
