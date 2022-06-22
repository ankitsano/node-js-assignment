// 2nd question


const fs =require('fs');
const express=require('express');
const app=express();

app.get('/vegitables',function(req,res){
fs.readFile('user.json','utf8',function(err,data){
    console.log(data);
    res.send(data);
})

})

app.listen(8000,function(){
    console.log("api working");
})

// 1st question

const express = require("express");
const app = express();

var PORT = process.env.port || 3000;

app.get("/age", function (req, res) {
  res.send("hello " + req.query.name + " " + "you are currently 22 years old");
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("api is working", PORT);
});


// 3rd question
const express = require("express");
const app = express();

var PORT = process.env.port || 8000;

app.get("/metrics", function (req, res) {
  res.send(req.query.object + " of " + req.query.metric+" is 78.54 ");
});

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("api is working", PORT);
});

const express=require('express');
const app=express();

var port=process.env.port||5000
app.get('/metrics',(req,res)=>{
    res.send(req.query.object+' of '+req.query.metric+' is 523.60 ')

})
app.listen(port,(error)=>{
    if(error) throw error;
    console.log("api is working",port);

})





