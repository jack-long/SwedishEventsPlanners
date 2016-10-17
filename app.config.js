'use strict';

var app = angular.
  module('sepApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/login', {
          template: '<login></login>'
        })
        .when('/view1', {
          template: '<view1></view1>'
        })
        .when('/customer-service', {
          template: '<customer-service></customer-service>'
        })
        .when('/event_requests/new', {
          template: '<new-event-request></new-event-request>'
        })
        .otherwise('/login');
    }

  ]);

// initialization
app.controller("SEPController", ['$rootScope', '$location',
  function($rootScope, $location){
    $rootScope.user = null;
    $rootScope.password = "password";
    // todo: logout not work
    this.logout = function(){
      $rootScope.user = null;
      console.log("init" + $rootScope.user);
      $location.path("/login")
    }
  }]
)