var express = require("express");
var app = express();

var port = 3000;

var testapi = {mail : "nhasachgiaosu@gmail.com",address: "47 le van dui", sdt:"0909090909" };

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/api',function(req,res){
    res.send(testapi);
  });

app.get('/nhasach',function(req,res){
    res.render('trangchu');
  });


app.listen(port, function(){
    console.log("vui");
  });
  