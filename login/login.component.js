'use strict';

// Register `login` component, along with its associated controller and template
angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['$http', '$rootScope', '$location',
    	function LoginController($http, $rootScope, $location) {

        var self = this;  // in order to pass it inside child function.
        self.user = $rootScope.user;
        self.password = $rootScope.password;

        this.login = function(){
          switch(self.user){
            case "customer_service": {
              if(self.password == "password"){
                $rootScope.user = self.user;  // update user
                $location.path("/customer-service");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "senior_customer_service": {
              if(self.password == "password"){
                $rootScope.user = self.user;  // update user
                $location.path("/senior_customer_service");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "financial_manager": {
              if(self.password == "password"){
                $rootScope.user = self.user;  // update user
                $location.path("/financial_manager");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "admin_manager": {
              if(self.password == "password"){
                $rootScope.user = self.user;  // update user
                $location.path("/admin_manager");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            // add more case
            default:
              alert("User not exist!");
          }

    		}
    }]
  })
