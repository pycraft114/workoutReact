/**
 * Created by chanwoopark on 2017. 6. 21..
 */
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var path = require('path');


//정적파일경로 지정 뭐하는거??
app.use(express.static('../../build'));

app.listen(3000,function(){
    console.log("sever start on port 3000")
});

app.get('/',function(req,res){
    res.sendfile(path.resolve("../../build/index.html"));
});

app.post('/',function(req,res){
    console.log(req.body);
    res.send("post request accepted");
});