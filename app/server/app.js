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

app.get('/*',function(req,res){
    res.sendfile(path.resolve("../../build/index.html"));
});