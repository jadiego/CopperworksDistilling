'use strict'

var mssql = require('mssql');
var dbConfig  = require('../secret/mssql.json');
console.log("In routes");

module.exports = function(app) {
    console.log("In exports");
    //GET request for getting basic brew data.
    app.get('/api/brews', function(req, res) {
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

    //GET request for getting basic Release data.
    app.get('/api/releases', function(req, res) {
        mssql.connect(dbConfig).then(function() {
            new mssql.Request().query('SELECT * FROM tblRelease').then(function(recordset) {
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
        mssql.close();
    });

    //POST request for adding information on Brews.
    // app.post('/api/brews', function(req, res) {
    //     mssql.connect(dbConfig).then(function() {
    //         new mssql.Request().query().then(function(recordset) {
    //             console.dir(recordset);
            
    //         }).catch(function(err) {

    //         });
    //     }).catch(function(err) {
            
    //     });
    // });

    //POST request for adding information about 
    app.post('/api/recipes', function(req, res) {
        mssql.connect(dbConfig).then(function() {
            new mssql.Request().query().then(function(recordset) {
                
            }).catch(function(err) {

            });
        }).catch(function(err) {
            
        });
    });
}