'use strict';

var express = require('express');
var mssql = require('mssql');
var server = 8080;

var app = express();

mssql.connect("mssql://username:password@localhost/database").then(function() {
    new sql.Request().query('SELECT * FROM Release').then(function(recordset) {
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

