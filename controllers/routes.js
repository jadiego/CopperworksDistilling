'use strict'

var mssql = require('mssql');
var dbConfig  = require('../secret/mssql.json');

module.exports = function(app) {

    app.get('/api/releases', function(req, res) {
        console.log("successfully GET brew data!");
        mssql.connect(dbConfig).then(function() {
            new mssql.Request().query('SELECT * FROM tblBrew').then(function(recordset) {
                console.dir(recordset);
            }).catch(function(err) {
                console.dir(err);
            });
        }).catch(function(err) {
            console.dir(err);
        });
        return res.json(req)
    });


}