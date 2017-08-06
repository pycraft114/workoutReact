/**
 * Created by chanwoopark on 2017. 7. 15..
 */
const jwt = require('jwt-simple');
const jwtConfig = require('./jwtConfig');
const mysql = require('mysql');
const mysqlData = require('./mysqlData.json');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport');

// https://stackoverflow.com/questions/3804108/use-email-address-as-primary-key
// https://stackoverflow.com/questions/12354947/how-to-structure-the-tables-of-a-very-simple-blog-in-mysql
// 현재 table 구조를 위의 두 글을 참고해서 바꿀 필요 있음

// https://stackoverflow.com/questions/31332502/mysql-schema-in-node-js
// 위 글 답변을 참고해서 table create, drop 등 하는 코드 만들 필요 있음. 처음 세팅할 때나, 테스트 할 때마다 쓰일 수 있음.
// 아니면 ORM(https://en.wikipedia.org/wiki/Object-relational_mapping)을 다음 중에서 골라서 사용하는 방법도 있음.
// http://www.codediesel.com/javascript/nodejs-mysql-orms/

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

//---------------JWT settings-----------------
function tokenForUser(user){
    const issuedAtTime = new Date().getTime();
    return jwt.encode({sub:user.id, iat:issuedAtTime}, jwtConfig.secret)
}

const passportSettings = require('./passportSettings');

const authentication = passport.authenticate('jwt',{session:false});
//--------------------------------------------




module.exports = function(app){

    //refactored
    app.put("/selected_workouts/:date",authentication,function(req,res){
        const user = req.user;
        const date = req.params.date;
        const selected_workouts = JSON.stringify(req.body.selected_workouts);
        const user_date = user+"_"+date;

        let query = "INSERT INTO workoutList (user_date,selected_workouts) VALUES (?,?) ON DUPLICATE KEY UPDATE selected_workouts = ?";
        const value = [user_date,selected_workouts,selected_workouts];
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

    app.put("/kg_rep/:date_workout",authentication,function(req,res){
        const user = req.user;
        //userData structure : [{kg:??,rep:??} , {kg:??,rep:??} , {kg:??,rep:??}]
        const volumeList = JSON.stringify(req.body);
        const date_workout = req.params.date_workout;
        const user_date_workout = user+"_"+date_workout;

        if(volumeList !== "[]"){
            let query = "INSERT INTO volume (user_date_workout,kg_rep) VALUES (?,?) ON DUPLICATE KEY UPDATE kg_rep = ?";
            const value = [user_date_workout,volumeList,volumeList];
            query = mysql.format(query,value);

            const saveQuery = connection.query(query,function(err,rows){
                if(err){
                    throw err;
                }else{
                    res.send("kg_rep saved");
                }
            })
        }else{
            // 이건 따로 app.delete로 분
            const deleteQuery = connection.query("DELETE FROM volume WHERE user_date_workout = ?",user_date_workout,function(err){
                if(err){
                    throw err;
                }else{
                    res.send("volume row deleted");
                }
            })
        }
    });

    app.get('/volumes/:workout',authentication,function(req,res){
        const user = req.user;
        const workout = req.params.workout;

        const value = [`%${user}%`,`%${workout}%`];
        const getQuery = connection.query("SELECT * FROM volume WHERE user_date_workout LIKE ? AND user_date_workout LIKE ?",value,function(err,result){
            if(err){
                throw err;
            }else{
                const volumes = [];
                const dates = [];
                result.map(function(currValue){
                    let totalVolume = 0;

                    const parsedKgRep = JSON.parse(currValue.kg_rep);
                    for(let i = 0; i < parsedKgRep.length; i++){
                        totalVolume += (parsedKgRep[i].kg * parsedKgRep[i].rep );
                    }
                    dates.push(currValue.user_date_workout.split('_')[1]);
                    volumes.push(totalVolume);
                });
                const responseData = {dates,volumes};
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
    app.get("/selected_workouts/:date",authentication,function(req,res){
        const user = req.user;
        const date = req.params.date;
        const user_date = user+"_"+date;

        let getWorkoutQuery = connection.query('SELECT selected_workouts FROM workoutList WHERE user_date=?', user_date, function (err, result) {
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

    app.get("/workouts/:date", authentication, function(req,res){
        const user = req.user,
              date = req.params.date,
              user_date = user+"_"+date;

        let getDoneWorkoutQuery = connection.query('SELECT user_date_workout FROM volume WHERE user_date_workout LIKE ?', `%${user_date}%`, function(err,results){
            if(err){
                throw err;
            }if(results.length){
                console.log(results);
                res.send(results);
            }else{
                res.send("NOT_FOUND");
            }
        })
    });

    /*app.get("/volume/workout",function(req,res){
     var workoutOptions = req.query.workoutOptions;



     });*/


//refactored
    app.get("/kg_rep/:date_workout",authentication,function(req,res){
        const user = req.user;
        const date_workout = req.params.date_workout;
        const user_date_workout = user+"_"+date_workout;

        console.log('server', user_date_workout);

        let query = "SELECT kg_rep FROM volume WHERE user_date_workout = ?";
        query = mysql.format(query,user_date_workout);

        const selectQuery = connection.query(query,function(err,result){
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
    app.delete("/:date_workout",authentication,function(req,res){
        const user = req.user;
        const date_workout = req.params.date_workout;
        const user_date_workout = user+"_"+date_workout;

        let deleteQuery = connection.query("DELETE FROM volume WHERE user_date_workout = ?",user_date_workout,function(err,rows){
            if(err){
                throw err;
            }else{
                console.log("deleted");
                res.send("deleted");
            }
        })
    });

    app.get("/days",authentication,function(req,res){
        const user = req.user;
        let getQuery = connection.query("SELECT user_date_workout FROM volume WHERE user_date_workout LIKE ?",`%${user}%`,function(err,results){
            if (err){
                // 이 에러는 누가 캐치하는가? (router 쪽 err 모두 마찬가지)
                throw err;
            }
            if(results.length !== 0){
                let hashMap = {};

                for(let i = 0; i < results.length; i++){
                    let date = results[i].user_date_workout.split("_")[1];
                    hashMap[date] = true;
                }

                let responseData = {
                    startDate:results[0].user_date_workout.split("_")[1],
                    daysWorkedOut:Object.keys(hashMap).length
                };

                // https://stackoverflow.com/questions/19041837/difference-between-res-send-and-res-json-in-express-js
                res.send(responseData);
            }else{
                // NO_DATA보단 '404': 'Not Found'가 좋아보임
                res.send("NO_DATA")
            }

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
                            // 성공적인데 굳이 추가적인 데이터를 보낼 필요 없을 때는  res.sendStatus(200)가 좋아보임
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
                bcrypt.compare(userData.password, dbUser.password, function(err,compareResult){
                    if(err){
                        throw err;
                    }else if(compareResult === true){
                        res.send({token : tokenForUser(dbUser)});
                    }else{
                        // '403': 'Forbidden'
                        res.send("WRONG_PASSWORD");
                    }
                })
            }else{
                // '404': 'Not Found',
                res.send("USER_NOT_FOUND");
            }
        })
    });

};
