'use strict';

//Required packages.
var express = require('express');
var mssql = require('mssql');
var bodyParser = require('body-parser')

var server = 8080;

var app = express();


//dbConfig for connecting to the MSSQL Server Database.
var dbConfig = require('./secret/mssql.json')

require('./controllers/routes.js')(app);

//Connect to the database and do a SELECT all statement on tblBrew.
// mssql.connect(dbConfig).then(function() {
//     new mssql.Request().query('SELECT * FROM tblBrew').then(function(recordset) {
//         console.dir(recordset);
//     }).catch(function(err) {
//         console.dir(err);
//     });
// }).catch(function(err) {
//     console.dir(err);
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Serve static files from the static directory.
app.use(express.static(__dirname + '/static'));

//Listen on port 8080.
app.listen(8080, function() {
    console.log('Server is listening on port: ' + server);
});

