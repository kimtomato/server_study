const express = require("express");
//import express from "express" -> ES6에서 사용하지만 노드 단독으로는 사용불가 바벨옵션 필요
const app = express(); //여기서의 express가 백엔드 어플리케이션

// HTTP GET  : /부분은 url 적기  -> root 경로는 /하나만 적기, (req, res, next)파라미터 필요, 타입 명시 필요x
app.get("/", (req, res, next) => {
  //next의 역할은 가변인자를 받을 수 있는 역할을 한다
  res.send("hello"); //이경로에 들어왔을때 hello 반환
});

app.get("/users", (req, res) => {
  res.send("<h1>하위</h1>"); //여러가지 조각난 html 을 묶어서 하나의 html 로 만들어줌
}); //전체를 경로를 알려주는 라우터라고 생각하고 뒤에 있는 콜백함수 실행

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "api 성공",
  });
});
//:은 클라이언트가 넣어주는 인자값을 의미;
app.get("/param/:id", (req, res) => {
  // //   const params = req.params;
  //   console.log(params);
  const { id } = req.params; //구조분해 할당
  console.log(id);
  res.end(); //타임아웃 방지
});

app.get("/query", (res, req) => {
  //쿼리스트링은 뒤에다가 ? 적어주기
  //   const query = req.query;
  //   console.log(query);
  const { name } = req.query;
  console.log(name); //구조분해 할당
  res.end();
});

app.listen(9000, () => {
  console.log("server start");
}); //port 바인딩, 포트번호가 잘 할당되면(성공 시) callback 함수 실행
