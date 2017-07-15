/**
 * Created by chanwoopark on 2017. 7. 15..
 */
const mysql = require('mysql');
const mysqlData = require('./mysqlData.json');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//----------------Mysql settings-------------
const connection = mysql.createConnection({
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
//--------------------------------------------

module.exports = function(app){
    
    //refactored
    app.put("/selected_workouts/:date",function(req,res){
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

    app.put("/kg_rep/:date_workout",function(req,res){
        //userData structure : [{kg:??,rep:??} , {kg:??,rep:??} , {kg:??,rep:??}]
        var volumeList = JSON.stringify(req.body);
        var date_workout = req.params.date_workout;

        if(volumeList !== "[]"){
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
        }else{
            var deleteQuery = connection.query("DELETE FROM volume WHERE date_workout = ?",date_workout,function(err){
                if(err){
                    throw err;
                }else{
                    res.send("volume row deleted");
                }
            })
        }
    });

    app.get('/volumes/:workout',function(req,res){
        var workout = req.params.workout;
        console.log(workout);
        var getQuery = connection.query("SELECT * FROM volume WHERE date_workout LIKE ?",`%${workout}%`,function(err,result){
            if(err){
                throw err;
            }else{
                /*
                 [ RowDataPacket {
                 date_workout: '2017-7-4_Squat',
                 kg_rep: '[{"kg": "2", "rep": "1"}, {"kg": "20", "rep": "20"}, {"kg": "30", "rep": "30"}]' },
                 RowDataPacket {
                 date_workout: '2017-7-5_Squat',
                 kg_rep: '[{"kg": "5", "rep": "5"}]' },
                 RowDataPacket {
                 date_workout: '2017-7-6_Squat',
                 kg_rep: '[{"kg": "77", "rep": "77"}]' } ]
                 mysql로 부터 최초로 return되는 값
                 */
                console.log("result",result);
                var volumes = [];
                var dates = [];
                result.map(function(currValue){
                    let totalVolume = 0;

                    var parsedKgRep = JSON.parse(currValue.kg_rep);
                    for(var i = 0; i < parsedKgRep.length; i++){
                        totalVolume += (parsedKgRep[i].kg * parsedKgRep[i].rep );
                    }
                    dates.push(currValue.date_workout.split('_')[0]);
                    volumes.push(totalVolume);
                });
                var responseData = {dates,volumes};
                res.send(responseData);
            }
        })
    });


    /*
     얘네둘 좀더 범용적으로 만들지, 직관적으로 url나눌지 고민해봐야함
     더 범용적으로 만들경우 클라이언트에서 post요청 처리할때 알아야 할게 많음
     +하나의 url이게 되므로 코드가 길어질꺼임 많이 커질것
     대신에 하나의 url로 다양하게 fetching 할 수 있겠지.
     /get/:smth/:smth 으로 와일드카드 사용하는것도 가능
     */

//refactored
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

    /*app.get("/volume/workout",function(req,res){
     var workoutOptions = req.query.workoutOptions;



     });*/


//refactored
    app.get("/kg_rep/:date_workout",function(req,res){
        var date_workout = req.params.date_workout;

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

//refactored
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

    app.get("/days",function(req,res){
        let getQuery = connection.query("SELECT date_workout FROM volume",function(err,results){
            if (err){
                throw err;
            }

            let hashMap = {};
            for(let i = 0; i < results.length; i++){
                let date = results[i].date_workout.split("_")[0];
                hashMap[date] = true;
            }

            let responseData = {
                startDate:results[0].date_workout.split("_")[0],
                daysWorkedOut:Object.keys(hashMap).length
            };

            res.send(responseData);

        })
    });
    /* returning userData from sql
     [
     RowDataPacket { date_workout: '2017-07-10_Bench Press' },
     RowDataPacket { date_workout: '2017-07-12_Bench Press' },
     RowDataPacket { date_workout: '2017-07-12_Squat' },
     RowDataPacket { date_workout: '2017-07-13_Bench Press' },
     RowDataPacket { date_workout: '2017-07-13_Dead Lift' },
     RowDataPacket { date_workout: '2017-07-13_Example' }
     ]
     */


    app.post("/signup",function(req,res){
        let userData = req.body;
        let checkUser = connection.query("SELECT * FROM user WHERE id = ?", userData.id, function(err,results){
            if(err){
                throw err;
            }else if(results.length){
                res.send("USER_EXIST");
            }else{
                bcrypt.hash(userData.password, saltRounds, function(err,hash){
                    let saveUser = connection.query("INSERT INTO user SET ?",{id:userData.id,password:hash,email:userData.email},function(err,results){
                        if(err){
                            throw err;
                        }else{
                            res.send("SIGNUP_SUCCESS");
                        }
                    })
                });
            }
        })
    });

    app.post("/login",function(req,res){
        let userData = req.body;

        let getUser = connection.query("SELECT * FROM user where id = ?",userData.id,function(err,results){
            if(err){
                throw err;
            }else if(results[0]){
                let dbUser = results[0];
                bcrypt.compare(userData.password, dbUser.password, function(err,res){
                    if(err){
                        throw err;
                    }else if(res === true){
                        console.log("password same");
                    }else{
                        console.log("passwor wrong");
                    }
                })
            }else{
                res.send("USER_NOT_FOUND");
            }
        })
    });
};