'use strict';

/**
 * @ngdoc overview
 * @name myProjectApp
 * @description
 * # myProjectApp
 *
 * Main module of the application.
 */
angular
  .module('mattSaab', [
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
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

    .when('/other', {
        templateUrl: 'views/other.html',
        controller: 'OtherCtrl',
        controllerAs: 'other'
      })
      .otherwise({
        redirectTo: '/'
      });
  });