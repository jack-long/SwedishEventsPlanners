'use strict';

angular.
  module('reviewEventRequests').
  component('reviewEventRequests', {
    templateUrl: 'review-event-requests/review-event-requests.template.html',
    controller: ['$http', '$rootScope', '$location', '$routeParams', 'DB',
    	function reviewEventRequestsController($http, $rootScope, $location, $routeParams, DB) {

    	// console.log($rootScope);
    	// this.user = $rootScope.user;
    	this.user = DB.user;
    	console.log(this.user);
    	var self = this;


		self.recordNumber = $routeParams.recordNumber;

		// var requests = $rootScope.event_requests;
		var requests = DB.event_requests;

		// console.log(requests);
		// console.log(self.recordNumber);
		for (var i = 0; i < requests.length; i++) {
			if(self.recordNumber == requests[i].recordNumber){
					self.event = requests[i];
					self.index = i;
					break;
			}
		};

		this.approve = function(){
			var current = self.event.reviewer;
			var next = self.event.reviewer;

			switch(current){
				case "senior_customer_service":
					next = "financial_manager"; break;
				case "financial_manager":
					next = "admin_manager"; break;
				case "admin_manager":
					next = "approved"; break;

			}

			self.reviewer = next;

			// $rootScope.event_requests[self.index].reviewer = self.reviewer;
			DB.event_requests[self.index].reviewer = self.reviewer;
			// console.log($rootScope.event_requests);
			$location.path("/event_requests");
		}

		this.reject = function(){
			DB.event_requests[self.index].reviewer = "Rejected-SeniorCS";
			$location.path("/event_requests");
		}

    }]
  });
