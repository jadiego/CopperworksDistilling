'use strict';

var express = require('express');
var sql = require('mssql');
require('dotenv').config();

var app = express()
app.use(express.static(__dirname + '/static'));

app.get('/student', function (req, res) {
    var config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        server: process.env.DB_HOST,
        database: process.env.DB_NAME
    }

    sql.connect(config, function (err) {
        if (err) 
            console.log(err);
        
         var request = new sql.Request();

         request.query('select * from Student', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
            console.log(recordset)
        });
    })
})

var server = 8080;

app.listen(8080, function() {
    console.log('Server is listening on port: ' + server)
});