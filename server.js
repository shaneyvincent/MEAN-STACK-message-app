var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var auth = require('./controllers/auth');
var message = require('./controllers/message');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

var auth = require('backend/controllers/auth.js');
var message = require('backend/controllers/message.js');
var checkAuthenticated = require('backend/services/checkAuthenticated.js');
var cors = require('backend/services/cors.js');


//Middleware

app.use(bodyParser.json());

app.use(cors);

//Requests

app.get('/api/message', message.get);


app.post('/api/message',checkAuthenticated, message.post );

app.post('/auth/register', auth.register);

//Connection

mongoose.connect("mongodb://localhost:27017/test", function(err,db){
  if(!err){
    console.log("Shaneys conected to mongo");
  }
})

var server = app.listen(5000, function(){
  console.log('listening on port ', server.address().port);
})
