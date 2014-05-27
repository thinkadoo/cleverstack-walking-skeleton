define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('example.controllers')
  .controller('ExampleController', [
    '$scope',
    function ($scope) {
      $scope.something = 'Example Module';
    }

  ]);

});
