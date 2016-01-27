'use strict';

/**
 * @ngdoc overview
 * @name mugshotApp
 * @description
 * # mugshotApp
 *
 * Main module of the application.
 */
angular.module('mugshotApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activeTab: 'Home'
      })
      .when('/about', {
        templateUrl: 'views/mugs.html',
        controller: 'MugsCtrl',
        activeTab: 'Mugs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });