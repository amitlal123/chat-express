var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var messages = [
  { message: "Hello there.",
    time: "10/18/2016, 6:57PM"
  },

  { message: "What's up?",
    time: "10/18/2016, 6:58PM"
  },

  { message: "This is cool",
    time: "10/18/2016, 7:02PM"
  }
];
const port = 8886;

app.use(bodyParser.json());

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
// For CORS
app.options('/', function(req, res, next){
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.get('/', function( req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/', function( req, res) {

  var msgText = req.body.message;
  var msgTime = new Date().toLocaleString().replace(/:\d+ /, '');
  var newMessage = {};
  newMessage.message = msgText;
  newMessage.time = msgTime;
  messages.push(newMessage);
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});
