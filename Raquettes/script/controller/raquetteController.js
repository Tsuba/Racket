angular.module('racketApp', [])
    .controller('racketController',['$http','$scope', function($http, $scope){
        $scope.product = [];
        $http({
            url : "raquettes.json",
            datatype : 'json',
            method : 'GET'
        }).success(function(data){
            $scope.product = data;
        })

    }])
