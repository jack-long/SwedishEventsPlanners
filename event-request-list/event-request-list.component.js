'use strict';

angular.
  module('eventRequestList').
  component('eventRequestList', {
    templateUrl: 'event-request-list/event-request-list.template.html',
    controller: ['$http', '$rootScope', '$location', '$window', 'DB',
    	function eventRequestListController($http, $rootScope, $location, $window, DB) {
    		// role check
        this.user = $rootScope.user;
        // this.user = "senior_customer_service";
        // this.user = "financial_manager";
        console.log(this.user);


        // $window.history.back();
        // this.logout = function(){
        //   console.log("logout from customer_service");
        // }

        // var self = this;
        // $http.get('data/event_requests.json').then(function(response) {
        //   self.requests = response.data;
        // });

        // this.requests = $rootScope.event_requests;
        this.requests = DB.event_requests;

        this.newForm = function(){
          $location.path("/event_requests/new");
        }
    }]
  });
