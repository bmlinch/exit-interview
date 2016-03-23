var app = angular.module('app', [])

app.controller('interviewController', function($scope){
    $scope.paintings = [];
    $scope.PoiPtnAdd = function(){
        $scope.paintings.push($scope.painting);
        $scope.painting = {}
    }
})
