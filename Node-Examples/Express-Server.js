var express = require('/.express');
var app = express();
var server_port = 3000;

app.get('/' , function(req,res) {
  res.send('Arvind Test');
});
