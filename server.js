'use strict';

var express = require('express');
var mssql = require('mssql');
var server = 8080;

var app = express();

var dbConfig = require('./secret/mssql.json')
//var dbConn = new mssql.Connection(dbConfig);

mssql.connect(dbConfig).then(function() {
    new mssql.Request().query('SELECT * FROM tblBrew').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        console.dir(err);
    });
}).catch(function(err) {
    console.dir(err);
});

app.use(express.static(__dirname + '/static'));

app.listen(8080, function() {
    console.log('Server is listening on port: ' + server);
});

