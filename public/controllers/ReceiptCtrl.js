var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Connect ReceiptCtrl");

var refresh = function() {
  $http.get('/customerlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.customerlist = response;
    $scope.customer = "";
  });
};
refresh();

 $scope.addReceipt = function() {
  console.log($scope.receipt);
  $http.post('/AddReceipt', $scope.receipt).success(function(response) {
    console.log(response);
    location.reload(); 
  });
  };



 }]);﻿



