'use strict';

// Register `login` component, along with its associated controller and template
angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['$location', 'DB', '$rootScope',
    	function LoginController($location, DB, $rootScope) {
        var self = this;  // in order to pass it inside child function.
        self.password = DB.password;

        this.login = function(){
          switch(self.user){
            case "customer_service": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;  // needed to show "logout"
                DB.login = true;
                $location.path("/event_requests");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "senior_customer_service": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/event_requests");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "admin_manager": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/event_requests");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "production_manager": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/production-manager");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "production_staff": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/production-staff");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "service_department_manager": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/service-department-manager");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "service_department_staff": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/service-department-staff");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "hr_manager": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/hr-manager");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            case "finance_manager": {
              if(self.password == "password"){
                DB.user = self.user;
                $rootScope.login = true;
                DB.login = true;
                $location.path("/finance-manager");
              }
              else{
                alert("Wrong Password!");
              }
              break;
            }
            // add more case
            default:
              alert("User not exist!");
          }  // end of switch
    		}
    }]
  })
