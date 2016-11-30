'use strict';

var express = require('express');

var app = express()

var server = 8080

app.use(express.static(__dirname + '/static'));



app.listen(8080, function() {
    console.log('Server is listening on port: ' + server)
});

