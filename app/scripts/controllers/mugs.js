'use strict';

/**
 * @ngdoc function
 * @name mugshotApp.controller:MugsCtrl
 * @description
 * # MugsCtrl
 * Controller of the mugshotApp
 */
angular.module('mugshotApp')
  .controller('MugsCtrl', function ($scope, $http) {

    $scope.MugsList = [];
    $http.get('mugs.json').success(function(data){
      $scope.MugsList = data;
    });

    $scope.openMugInfo = function (url, name, description){
      var modal = $('[data-remodal-id=modal]').remodal({hashTracking: false});
    	document.getElementById('imgMugInfo').src = url;
    	document.getElementById('divMugInfo_Name').innerHTML = name;
    	document.getElementById('lblMugInfo_Desc').innerHTML = description;
      modal.open();
      window.event.preventDefault();
    };
});

window.REMODAL_GLOBALS = {
  NAMESPACE: 'modal',
  DEFAULTS: {
    hashTracking: false
  }
};