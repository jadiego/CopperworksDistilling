'use strict'

var mssql = require('mssql');
var dbConfig  = require('../secret/mssql.json');

module.exports = function(app) {

    //GET request for getting basic brew data.
    app.get('/api/brews', function(req, res) {
        console.log("successfully GET brew data!");
        mssql.connect(dbConfig).then(function() {
            new mssql.Request().execute('getBrewInformation').then(function(recordset) {
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

    //POST request for adding information about Brews
    app.post('/api/brews/:id', function(req, res) {
        console.log("inside the post");
        console.log(req.body);
        mssql.connect(dbConfig).then(function() {
            new mssql.Request()
            .input('IngredientName', mssql.VarChar(50), req.body.iname)
            .input('IngredientSource', mssql.VarChar(50), req.body.isource)
            .input('Quantity', mssql.VarChar(5), req.body.ipercent)
            .input('BrewName', mssql.VarChar(10), req.body.bname)
            .input('BrewNum', mssql.VarChar(15), req.body.bnumber)
            .input('BrewDate', mssql.Date, req.body.bdate)
            .execute('BrewPopulate').then(function(recordsets) {
                console.dir(recordsets)
            }).catch(function(err) {
                console.dir(err)
            });
        }).catch(function(err) {
            console.dir(err)
        });
    });

    app.delete('/api/brews/:id', function(req, res) {
        mssql.connect(dbConfig).then(function() {
            new mssql.Request().query('DELETE FROM tblBrew WHERE BrewNum = ' + req.body.bnumber)
            .then(function(recordset) {
                console.dir(recordset);
            }).catch(function(err) {

            });
        })
    });
}