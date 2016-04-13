'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.bodyBg = 'mainBg';


  });
