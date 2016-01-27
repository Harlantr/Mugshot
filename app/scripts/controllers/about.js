'use strict';

/**
 * @ngdoc function
 * @name mugshotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mugshotApp
 */
angular.module('mugshotApp')
  .controller('MugsCtrl', function ($scope, $http) {
    $scope.MugsList = [];
    $http.get('mugs.json').success(function(data){
      $scope.MugsList = data;
    });
  });
