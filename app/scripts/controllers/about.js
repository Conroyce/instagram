'use strict';

/**
 * @ngdoc function
 * @name instagramApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the instagramApp
 */
angular.module('instagramApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
