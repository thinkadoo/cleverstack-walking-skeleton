define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('example.directives')
  .directive('ExampleDirective', function() {
    var link = function($scope, $element, $attrs, ctrl) {
      console.log( 'Example Directive' );
    };

    return {
      require: 'ngModel',
      link: link
    };

  });

});