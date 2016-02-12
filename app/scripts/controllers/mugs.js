"use strict";

/**
 * @ngdoc function
 * @name mugshotApp.controller:MugsCtrl
 * @description
 * # MugsCtrl
 * Controller of the mugshotApp
 */
angular.module("mugshotApp")
  .controller("MugsCtrl", function ($scope, $http) {

    $scope.MugsList = [];
    $http.get("mugs.json").success(function(data){
      $scope.MugsList = data;
    });

    $scope.openMugInfo = function (url, name, description){
      $("#divMugInfo").addClass("modal-dialog-open");
    	document.getElementById("imgMugInfo").src = url;
    	document.getElementById("divMugInfo_Name").innerHTML = name;
    	document.getElementById("lblMugInfo_Desc").innerHTML = description;
    };

    $scope.closeMugInfo = function (){
      $("#divMugInfo").removeClass("modal-dialog-open");
    };
});

//Hide modal if user presses "Esc" while modal is open
$(document).keyup(function(e) {
  var div = $("#divMugInfo");
  if (div && e.which == 27 && div.hasClass("modal-dialog-open")) {
      div.removeClass("modal-dialog-open");
  }
});