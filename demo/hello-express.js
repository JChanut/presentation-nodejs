var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Express!');
});

app.listen(3000, function () {
  console.log('Hello World app listening on port 3000!');
});