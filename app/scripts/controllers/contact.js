'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('ContactCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.bodyBg = 'otherBg';

  });
