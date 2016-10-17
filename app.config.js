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
        .when('/production-manager', {
          template: '<production-manager></production-manager>'
        })
        .when('/service-department-manager', {
          template: '<service-department-manager></service-department-manager>'
        })
        .when('/production-staff', {
          template: '<production-staff></production-staff>'
        })
        .when('/service-department-staff', {
          template: '<service-department-staff></service-department-staff>'
        })
        .when('/hr-manager', {
          template: '<hr-manager></hr-manager>'
        })
        .when('/finance-manager', {
          template: '<finance-manager></finance-manager>'
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
