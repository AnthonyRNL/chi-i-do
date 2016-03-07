var express = require("express")
var app = express()
var fs = require("fs")
var ejs = require("ejs")
var port = process.env.PORT || 3000
app.use(express.static("public"))
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin',"*")
  next()
})
app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", function(req,res){
  fs.readdir('public/imgs/slideshow', function(err, files){

    res.render("index", {files:files})
  })
})
//setting up a route so that I can just add images to my folder and have it add to the slideshow
app.get("/pics", function(req,res){
  fs.readdir('public/imgs/slideshow', function(err, files){
    res.json({files: files})
  })
})
app.listen(port, function(){
  console.log("hey, i'm listening...")
})
