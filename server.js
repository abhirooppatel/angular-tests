/**
 * Created by abhiroop on 5/6/14.
 */
var express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  serverStatic = require('serve-static'),
  ICC = require('./teams').ICC;


var app = express();
app.use(bodyParser());

app.use('/', serverStatic(__dirname));



app.get('/api/teams', function(req, res) {
  res.send(ICC.TEAMS_LIST);
});
  

app.get('/api/team/:code', function(req, res) {
  var code = req.params.code;
  
});

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Please go to http://localhost:' + port);