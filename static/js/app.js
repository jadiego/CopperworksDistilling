angular.module('CopperWorksApp', [])
.controller('DBReleaseController', ['$scope', '$http', function($scope, $http) {
    'use strict';
    $http.get('/api/brews').success(function(data) {
        $scope.brewid = data[0].BrewID;
        $scope.brewnum = data[0].BrewNum;
        $scope.name = data[0].BrewName;
        $scope.date = data[0].BrewDate;
        console.log("sdfsdfsdf");
        console.log(data);
    })
}])

.controller('EditDBController', ['$scope', '$http', function($scope, $http) {
    $scope.submitNewRecipe = function() {
        console.log("submitting new recipe")
        var data = {
            recipename: $scope.recipename,
            name: $scope.iname,
            source: $scope.isource,
            percent: $scope.ipercent
        }
        $http.post('/api/recipes', data).then(function(response) {
            console.log(response);
        }).catch(function(response) {

        })
    }
}])
