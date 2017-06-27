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

connection.connect(err => {
    if (err) {
        throw new Error('Mysql connect failed');
    }
    console.log('Mysql connected');
});



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
    var data = req.body;
    var date = data.date;

    var sql = {
        'date':date,
    };

    console.log(sql);

    var saveQuery = connection.query('INSERT INTO workoutList SET ?', sql, function (err, rows) {
        if (err) {
            throw err;
        }
        else {
            res.send("save success")
        }
    });

    //response문이 쿼리문 이전에 오면 통신 종결한 후에 다시 통신하려함 하지만 이미 response를 보냄으로써 통신이 끝난후임
    //cannot set header오류의 원인
    //밑에 처럼 이이후에 선언 해놓은다 해도 savequery함수는 비동기라 밑에라인이 실행 돼버리고난 후에 db에 저장하려함으로 위의 오류또한 등
    //res.send("called");

});

app.post("/savedateworkout",function(req,res){
    var data = req.body;
    var date = data.date;
    var selected_workout = JSON.stringify(data.selected_workout);

    var sql = {
        'selected_workout':selected_workout
    };

    console.log(sql);
    /*
     UPDATE workoutList
     SET selected_workout = value
     WHERE date = specific date;
     */

    var saveQuery = connection.query('UPDATE workoutList SET selected_workout = ? WHERE date = ?', [selected_workout, date], function (err, rows) {
        if (err) {
            throw err;
        }
        else {
            res.send("save success")
        }
    })


});

