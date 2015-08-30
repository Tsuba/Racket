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
    .controller('panelController',['$scope', function($scope){
        $scope.tab = 1;
        $scope.selectTab = function(setTab){
            $scope.tab = setTab;
        };
        $scope.isSelected = function(checkTab){
            return $scope.tab===checkTab;
        };

    }])
