/**
 * @file Instantiates and configures angular modules for your module.
 */
define(['angular'], function (ng) {
  'use strict';

  ng.module('example.controllers', []);
  ng.module('example.providers', []);
  ng.module('example.services', []);
  ng.module('example.factories', []);
  ng.module('example.directives', []);

  var module = ng.module('example', [
    'cs_common',
    'example.controllers',
    'example.providers',
    'example.services',
    'example.factories',
    'example.directives'
  ]);

  module.config([
    '$routeProvider',
    'CSTemplateProvider',
    function ($routeProvider, CSTemplate) {

      // Set the subfolder of your module that contains all your view templates.
      CSTemplate.setPath('/modules/example/views');

      // Register any routes you need for your module.
      $routeProvider
        .when('/example', {
          templateUrl: CSTemplate.view('example-view'),
          controller: 'ExampleController',
          public: false
        });
    }

  ]);

  return module;
});
