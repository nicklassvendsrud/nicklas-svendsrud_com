'use strict';

/**
 * @ngdoc function
 * @name nicklasSvendsrudComApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the nicklasSvendsrudComApp
 */
angular.module('nicklasSvendsrudComApp')
  .controller('MenuCtrl', function ($scope, $location) {

    //$scope.menuIcon = '<i class="fa fa-bars fa-2x"></i>';
    $scope.menuIcon = '<img class="menuIconImg openMenuIcon" src="../images/menuIcon.png" alt="Åpne meny">';
    $scope.menuVisible = false;
    $scope.menuBtnClass = '';

    $scope.toggleMenu = function() {
      if ($scope.menuVisible) {
        $scope.menuBtnClass = '';
        $scope.menuBtnClass = 'rotateAnimationRight';
        //$scope.menuIcon = '<i class="fa fa-bars fa-2x"></i>';
        $scope.menuIcon = '<img class="menuIconImg openMenuIcon" src="../images/menuIcon.png" alt="Åpne meny">';
      }else{
        $scope.menuBtnClass = '';
        $scope.menuBtnClass = 'rotateAnimationLeft';
        //$scope.menuIcon = '<i class="fa fa-times fa-2x"></i>';
        $scope.menuIcon = '<img class="menuIconImg closeMenuIcon" src="../images/closeIcon.png" alt="Lukk meny">';
      }
      $scope.menuVisible = !$scope.menuVisible;
    };

    $scope.go = function(path){
      $location.path(path);
      $scope.toggleMenu();
    };


  })
  .animation('.menu-animation', ['$window', function ($window) {
    return {

      addClass: function (element, className, done) {
        if (className === 'ng-hide') {
          if ($window.innerWidth < 769) {
            TweenMax.to(element, 0.2, { left: -255, onComplete: done });
          }else {
            TweenMax.to(element, 0.2, { left: -284, onComplete: done });
          }
        }
        else {
          done();
        }
      },
      removeClass: function (element, className, done) {
        if (className === 'ng-hide') {
          element.removeClass('ng-hide');
          if ($window.innerWidth < 769) {
            TweenMax.fromTo(element, 0.5,
              { left: -255 },
              { left: 0, onComplete: done });
          }else {
            TweenMax.fromTo(element, 0.5,
              { left: -284 },
              { left: 0, onComplete: done });
          }

          }
          else {
            done();
          }
        }

      };

    }]);
