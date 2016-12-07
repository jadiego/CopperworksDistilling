angular.module('CopperWorksApp', [])
    .controller('DBReleaseController', ['$scope', '$http', function($scope, $http) {
        'use strict';
        $http.get('/api/releases').success(function(data) {
            $scope.brewid = data.BrewID;
            $scope.brewnum = data.BrewNum;
            $scope.name = data.BrewName;
            $scope.date = data.BrewDate;
            console.log("sdfsdfsdf");
            console.log(data);
        })
    }])
