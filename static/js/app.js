var app = angular.module('CopperWorksApp', []);

// app.service('ReadArray', function() {
//     this.getData = function(data) {
//         return data;
//     }
// });

app.controller('DBReleaseController', ['$scope', '$http', function($scope, $http) {
    'use strict';
    $http.get('/api/brews').success(function(data) {
        $scope.data = data[0];
    })

    $scope.deleteBrew = function() {
        $http.delete('/api/brews' + $scope.bnumber)
    }
}]);

app.controller('EditDBController', ['$scope', '$http', function($scope, $http) {
    $scope.submitNewRecipe = function() {
        var data = {
            bname: $scope.bname,
            bnumber: $scope.bnumber,
            bdate: $scope.bdate,
            iname: $scope.iname,
            isource: $scope.isource,
            ipercent: $scope.ipercent
        }
        //console.log(data);
        $http.post('/api/brews/' + $scope.bnumber, data).success(function(response) {
            console.log(response);
        }).catch(function(response) {
            console.log(response);
        })
    }
}]);

