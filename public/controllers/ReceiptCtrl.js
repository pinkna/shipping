var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Connect UserManagement");

var refresh = function() {
  $http.get('/receiptlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.receiptlist = response;
    $scope.receipt = "";
  });
};

refresh();

  $scope.addReceipt = function() {
  console.log($scope.receipt);
  $http.post('/AddReceipt', $scope.receipt).success(function(response) {
    console.log(response);
    refresh();
 	});
	};



}]);﻿