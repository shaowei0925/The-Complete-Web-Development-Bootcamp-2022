const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello World</h1>");
})

app.get("/contact",function(req,res){
    res.send("<h3>Contact me at: laushaowei@gmail.com</h3>")
})

app.get("/about",function(req,res){
    res.send("<p>I am Shao Wei, a full-stack developer!</p>")
})
app.get("/hobbies",function(req,res){
    res.send("<p>I like to play badminton and basketball</p>")
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});