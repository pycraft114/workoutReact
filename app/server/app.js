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

app.put("/:date",function(req,res){
    var date = req.params.date;
    var selected_workouts = JSON.stringify(req.body.selected_workouts);
    console.log(selected_workouts);


    var query = "INSERT INTO workoutList (date,selected_workouts) VALUES (?,?) ON DUPLICATE KEY UPDATE selected_workouts = ?";
    var value = [date,selected_workouts,selected_workouts];
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

/*app.post("/updateworkout",function(req,res){
    var data = req.body;

    var date = data.date;
    var selected_workouts = JSON.stringify(data.selected_workouts);

    var query = "INSERT INTO workoutList (date,selected_workouts) VALUES (?,?) ON DUPLICATE KEY UPDATE selected_workout = ?";
    var value = [date,selected_workouts,selected_workouts];
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
});*/

//-------------------------------------------------------------
/*
얘네둘 좀더 범용적으로 만들지, 직관적으로 url나눌지 고민해봐야함
더 범용적으로 만들경우 클라이언트에서 post요청 처리할때 알아야 할게 많음
+하나의 url이게 되므로 코드가 길어질꺼임 많이 커질것
대신에 하나의 url로 다양하게 fetching 할 수 있겠지.
/get/:smth/:smth 으로 와일드카드 사용하는것도 가능
 */
app.get("/selected_workouts/:date",function(req,res){
    var date = req.params.date;
    console.log("get req", date);

    var getWorkoutQuery = connection.query('SELECT selected_workouts FROM workoutList WHERE date=?', date, function (err, result) {
        if (err) {
            throw err;
        }
        if(result.length) {
            res.send(result[0].selected_workouts);
        }else{
            res.send([]);
        }
    });

    //response문이 쿼리문 이전에 오면 통신 종결한 후에 다시 통신하려함 하지만 이미 response를 보냄으로써 통신이 끝난후임
    //cannot set header오류의 원인
    //밑에 처럼 이이후에 선언 해놓은다 해도 savequery함수는 비동기라 밑에라인이 실행 돼버리고난 후에 db에 저장하려함으로 위의 오류또한 등
    //res.send("called");

});

app.post("/getkgrep",function(req,res){
    var date_workout = req.body.date_workout;

    var query = "SELECT kg_rep FROM volume WHERE date_workout = ?";
    query = mysql.format(query,date_workout);

    var selectQuery = connection.query(query,function(err,result){
        if(err){
            throw err;
        }
        if(result.length){
            res.send(result[0].kg_rep);
        }else{
            res.send([]);
        }

    })
});

//-----------------------------------------------------------------------------

//하나의 url로 req에 따라 각기 다른 역할 수행 하도록
app.post("/:date/:workout/update",function(req,res){
    //data structure : [{kg:??,rep:??} , {kg:??,rep:??} , {kg:??,rep:??}]
    var volumeList = JSON.stringify(req.body);
    console.log("volumeList",volumeList);
    var date_workout = req.params.date+"_"+req.params.workout;


    var query = "INSERT INTO volume (date_workout,kg_rep) VALUES (?,?) ON DUPLICATE KEY UPDATE kg_rep = ?";
    var value = [date_workout,volumeList,volumeList];
    query = mysql.format(query,value);

    var saveQuery = connection.query(query,function(err,rows){
        if(err){
            throw err;
        }else{
            res.send("kg_rep saved");
        }
    })

});

app.delete("/:date_workout",function(req,res){
    var date_workout = req.params.date_workout;


    var deleteQuery = connection.query("DELETE FROM volume WHERE date_workout = ?",date_workout,function(err,rows){
        if(err){
            throw err;
        }else{
            console.log("deleted");
            res.send("deleted");
        }
    })
});

/*app.post("/deletekgrep",function(req,res){
    //data structure : [{kg:??,rep:??} , {kg:??,rep:??} , {kg:??,rep:??}]
    var date_workout = req.body.date_workout;

    var deleteQuery = connection.query("DELETE FROM volume WHERE date_workout = ?",date_workout,function(err,rows){
        if(err){
            throw err;
        }else{
            console.log("deleted");
            res.send("deleted");
        }
    })

});*/


app.get('/*',function(req,res){
    res.sendfile(path.resolve("../../build/index.html"));
});