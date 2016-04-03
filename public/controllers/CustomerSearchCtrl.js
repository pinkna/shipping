var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    
  
    
var refresh = function() {
  $http.get('/customerlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.customerlist = response;
    $scope.customer = "";
  });
};
refresh();

}]);﻿