const express = require('express');
const redis = require("redis");
//레디스 클라이언트 생성
const client =  redis.createClient({
    host: "redis-server",
    port: 6379
})

const app = express();
// 0부터 시작
client.set("number", 0);
//request, response 생성
app.get('/', (req,res) => {
    //에러 또는 숫자생성 처리
    client.get("number", (err, number) => {
        client.set("number", parseInt(number) + 1)
        res.send("숫자가 1씩 올라갑니다. 숫자: "+number);
    })
})

app.listen(8080);
console.log('Server is Running');

//App
// const app = express();
// app.get('/', (req, res) =>{
//     res.send("docker 연습!!")
// })

// app.listen(PORT);
// console.log("Server is Running");