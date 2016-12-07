'use strict'

var mssql = require('mssql');
var dbConfig  = require('../secret/mssql.json');
console.log("In routes");

module.exports = function(app) {
    console.log("In exports");
    app.get('/api/releases', function(req, res) {
        console.log("successfully GET brew data!");
        mssql.connect(dbConfig).then(function() {
            new mssql.Request().query('SELECT * FROM tblBrew').then(function(recordset) {
                console.dir(recordset);
                res.json(recordset)
            }).catch(function(err) {
                console.dir(err);
                res.json(err)
            });
        }).catch(function(err) {
            console.dir(err);
            res.json(err)
        });
    });

}