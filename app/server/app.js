/**
 * Created by chanwoopark on 2017. 6. 21..
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mysqlData = require('./mysqlData.json');
var mysql = require('mysql');
const port = process.env.PORT || 3000;



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


app.listen(port,function(){
    console.log("sever start on port 3000")
});

app.get('/*',function(req,res){
    res.sendfile(path.resolve("../../build/index.html"));
});

app.post("/getworkout",function(req,res){
    var data = req.body;
    console.log("getworkout post req", data);
    var date = data.date;


    var getWorkoutQuery = connection.query('SELECT selected_workout FROM workoutList WHERE date=?', date, function (err, result) {
        if (err) {
            throw err;
        }
        if(result.length) {
            res.send(result[0].selected_workout);
        }else{
            res.send([]);
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

    var query = "INSERT INTO workoutList (date,selected_workout) VALUES (?,?) ON DUPLICATE KEY UPDATE selected_workout = ?";
    var value = [date,selected_workout,selected_workout];
    query = mysql.format(query,value);

    var saveQuery = connection.query(query,
        function (err, rows) {
        if (err) {
            throw err;
        }
        else {
            res.send("save success")
        }
    })


});

app.post("/:date/:workout",function(req,res){
    //data structure : [{kg:??,rep:??} , {kg:??,rep:??} , {kg:??,rep:??}]
    console.log("post req called");
    var volumeList = JSON.stringify(req.body);
    var volumeList2 = req.body;
    var date_workout = req.params.date+"_"+req.params.workout;


    var query = "INSERT INTO volume (date_workout,kg_rep) VALUES (?,?) ON DUPLICATE KEY UPDATE kg_rep = ?";
    var value = [date_workout,volumeList,volumeList];
    query = mysql.format(query,value);

    var saveQuery = connection.query(query,function(err,rows){
        if(err){
            throw err;
        }else{
            console.log("kg rep saved success");
            res.send("bye");
        }
    })

});

