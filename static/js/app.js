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
        // var data = {
        //     bname: $scope.bname,
        //     bnumber: $scope.bnumber,
        //     bdate: $scope.bdate,
        //     iname: $scope.iname,
        //     isource: $scope.isource,
        //     ipercent: $scope.ipercent
        // }
        var data = $.param({
            json: JSON.stringify({
            bname: $scope.bname,
            bnumber: $scope.bnumber,
            bdate: $scope.bdate,
            iname: $scope.iname,
            isource: $scope.isource,
            ipercent: $scope.ipercent
            })
        });
        $http.post('/api/brews', data).success(function(data, status) {
            console.log(data);
        })
    }
}])