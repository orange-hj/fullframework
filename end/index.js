const express = require("express");
const app = express();
const mysql = require("mysql");

app.listen(3001,()=>{
    console.log("服务器开启3001端口...")
})


// 创建与数据库的连接
const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:'maomao245',
    database:"chj"    //数据库名称
})

db.connect((err)=>{
    if(err) throw err;
    console.log("连接成功");
})

//getpost就是接口
app.get("/getUserList",(req,res)=>{
    let sql = "select * from user";
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            //将数据转换为json格式
            var dataString = JSON.stringify(result);
            var data = JSON.parse(dataString);
            res.json({
                status:'0',
                msg:data
            })
        }
    })
})

