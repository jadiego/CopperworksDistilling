'use strict';

//Required packages.
var express = require('express');
var mssql = require('mssql');
var bodyParser = require('body-parser');

var server = 8080;

var app = express();


//dbConfig for connecting to the MSSQL Server Database.
var dbConfig = require('./secret/mssql.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./controllers/routes.js')(app);

//Serve static files from the static directory.
app.use(express.static(__dirname + '/static'));

//Listen on port 8080.
app.listen(8080, function() {
    console.log('Server is listening on port: ' + server);
});

