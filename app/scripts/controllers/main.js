'use strict';

/**
 * @ngdoc function
 * @name mugshotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mugshotApp
 */
angular.module('mugshotApp')
  .controller('MainCtrl', function ($scope, $route) {
  	$scope.$route = $route;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
