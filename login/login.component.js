'use strict';

// Register `login` component, along with its associated controller and template
angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['$http', function LoginController($http) {
    	this.user = "admin";
    	this.password = "admin"
    }]
  });
