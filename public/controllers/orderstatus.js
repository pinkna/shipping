var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Connect CustomerMaster");


$scope.find = function(id) {
  console.log(id);
  $http.get('/receiptlist/' + id).success(function(response) {
    console.log(response);
    $scope.receipt = response;
  });
};  


}]);﻿