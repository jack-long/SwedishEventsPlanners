'use strict';

var app = angular.
  module('sepApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/view1', {
          template: '<view1></view1>'
        }).
        otherwise('/login');
    }

  ]);

// initialization
app.controller("SEPController", ['$rootScope', function($rootScope){
  $rootScope.user = "user";
  $rootScope.password = "password"
  }]
)