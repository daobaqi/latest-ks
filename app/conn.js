var mysql = require('mysql');//没有先安装
var conn = mysql.createConnection({
    "host":"localhost",
    "port":"3306",
    "user":"root",
    "password":'',
    "database":"kitchenstory"
});
conn.connect();
module.exports = conn;


// var mysql=require("mysql");
// exports.connect=function(sql,callback){
//   var db=mysql.createConnection({
//     "host":"localhost",
//     "port":"3306",
//     "user":"root",
//     "password":'',
//     "database":"kitchenstory"
//   });
//   db.connect();
//   db.query(sql,callback);
//   db.end();
// };