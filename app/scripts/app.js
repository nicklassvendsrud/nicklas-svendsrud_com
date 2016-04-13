'use strict';

/**
 * @ngdoc overview
 * @name nicklasSvendsrudComApp
 * @description
 * # nicklasSvendsrudComApp
 *
 * Main module of the application.
 */
angular
  .module('nicklasSvendsrudComApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/tech', {
        templateUrl: 'views/tech.html',
        controller: 'TechCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .when('/portfolio/codan', {
        templateUrl: 'views/portfolio-codan.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/komplett', {
        templateUrl: 'views/portfolio-komplett.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/stiniusviking', {
        templateUrl: 'views/portfolio-stiniusviking.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/nextround', {
        templateUrl: 'views/portfolio-nextround.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/blodbanken', {
        templateUrl: 'views/portfolio-blodbanken.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/instavizor', {
        templateUrl: 'views/portfolio-instavizor.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/okonomilappen', {
        templateUrl: 'views/portfolio-okonomilappen.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/pepsi', {
        templateUrl: 'views/portfolio-pepsi.html',
        controller: 'PortfolioCtrl'
      })
      .when('/portfolio/txt', {
        templateUrl: 'views/portfolio-txt.html',
        controller: 'PortfolioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
