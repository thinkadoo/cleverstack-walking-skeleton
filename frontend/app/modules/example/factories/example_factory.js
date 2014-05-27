define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('example.factories')
  .factory('ExampleFactory', function(){
      return {
          sayHello: function(text){
              return "Example Factory says \"Hello " + text + "\"";
          }
      }
  });

});