var request = require('request');
var express = require('express');
var fs = require('fs');
//bring in our human behavior functions. they can now be referenced as properties on the humanBehavior object
//keeping the Global namespace cleaner
var humanBehavior = require('./human.js');

var app = express();


//routes
app.get('/', function (req, res) {
    var html = fs.readFileSync('./index.html','utf8');
    res.send(html);
})

app.get('/makeperson', humanBehavior.ShowHuman);



//server config
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});