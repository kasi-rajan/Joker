var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<h1 style="text-align:center">Welcome to joker server !</h1>');
});

app.get('/ping', function(req, res) {
    res.send({ "status": "success", "response": "Pong" });
});

app.listen(5000, function() {
    console.log('Example app listening on port 5000!');
});