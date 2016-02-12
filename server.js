var express = require("express")
var app = express()
var fs = require("fs")
var port = process.env.PORT || 3000
app.use(express.static("public"))
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin',"*")
  next()
})

app.get("/", function(req,res){
  res.render("index.html")
})
app.get("/pics", function(req,res){
  console.log("ayoo")
  fs.readdir('public/imgs/slideshow', function(err, files){
    console.log(files)
    res.json({files: files})
  })
})
app.listen(port, function(){
  console.log("hey, i'm listening...")
})
