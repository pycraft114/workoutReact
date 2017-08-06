/**
 * Created by chanwoopark on 2017. 6. 21..
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');
const cors = require('cors');

/*
//-------------
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
//-------------*/



//정적파일경로 지정 뭐하는거?? static File 들을 클라이언트에 보내주려면 사용해야한다 (?)
app.use(express.static('../../build'));
//bodyparser setting 없이는 post 요청 get요청 처리 안
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(3000,function(){
    console.log("sever start on port 3000")
});

router(app);

// router 쪽에서 던지는 err에 대한 handler가 이 밑에 필요함. router에서 에러가 아닐 경우는 바로 거기서 res.send나 res.json으로 응답을 주고, 에러나 예상하지 못한 결과인 에러를 next로 넘겨서 아래 최종 에러핸들러에서 어떻게 할지 판단해서 res를 보내주는게 좋아보임
// http://expressjs.com/en/guide/error-handling.html
// https://github.com/TryGhost/Ghost/blob/master/core/server/api/app.js#L267
// https://github.com/TryGhost/Ghost/blob/master/core/server/middleware/error-handler.js#L106
// https://github.com/TryGhost/Ghost/blob/master/core/server/errors.js
// app.use..


app.get('/*',function(req,res){
    res.sendfile(path.resolve("../../build/index.html"));
});
