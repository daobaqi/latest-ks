var http = require("http");
var url = require("url");
var conn = require("./conn.js");
var mysql = require('mysql');
var bp = require("body-parser")

var express = require('express');
var app = express();
app.use(bp.json())

//路由 login
app.get("/getImg", function (req, res, next) {
    // console.log(aa)
    console.log(res)
    var sql = "SELECT * FROM images";
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.setHeader("Access-Control-Allow-Origin","*");
    // "Access-Control-Allow-Origin", " * ";
    // res.header("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    // //允许请求资源的方式
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    // next();
    conn.query(sql,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
        res.end();    
    });
})

// var http=require("http")
// var fs = require('fs')
// var url = require('url')
// var db=http.createServer(); 

// var db = require("./conn.js");
// function drug(app){
//     app.get("/img",function(req,res){
//         res.append("Access-Control-Allow-Origin","*");
//         db.connect("SELECT * FROM images",function(error,data){
//         res.send(data);
//         console.log(2222);
//       });

//     });
// };


//开启服务器 
var server = app.listen(8083)