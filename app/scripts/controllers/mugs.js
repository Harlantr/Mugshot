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
    })

    $scope.openMugInfo = function (url, name, description){
    	document.getElementById('divMugInfo').setAttribute('class', 'mug-info');
    	document.getElementById('imgMug').src = url;
    	document.getElementById('divMugName').innerHTML = name;
    	document.getElementById('lblMugDesc').innerHTML = description;
    };
  });