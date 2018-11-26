var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

//any requests to the root (/) run this function which takes a request and response
app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err) {
  if (err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
