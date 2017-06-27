/**
 * Created by chanwoopark on 2017. 6. 21..
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mysqlData = require('./mysqlData.json');
var mysql = require('mysql');



var connection = mysql.createConnection({
    host: mysqlData.host,
    port: mysqlData.port,
    user: mysqlData.user,
    password: mysqlData.password,
    database: mysqlData.database,
    multipleStatements: true
});

connection.connect();



//정적파일경로 지정 뭐하는거?? static File 들을 클라이언트에 보내주려면 사용해야한다 (?)
app.use(express.static('../../build'));
//bodyparser setting 없이는 post 요청 get요청 처리 안
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000,function(){
    console.log("sever start on port 3000")
});

app.get('/',function(req,res){
    res.sendfile(path.resolve("../../build/index.html"));
});

app.post("/savedate",function(req,res){
    console.log(req.body);
    res.send("called");
});

app.post("/savedateworkout",function(req,res){
    console.log(req.body);
    res.send("called");
});

