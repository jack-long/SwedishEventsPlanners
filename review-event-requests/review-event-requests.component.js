'use strict';

angular.
  module('reviewEventRequests').
  component('reviewEventRequests', {
    templateUrl: 'review-event-requests/review-event-requests.template.html',
    controller: ['$http', '$window', '$location', '$routeParams', 'DB',
    	function reviewEventRequestsController($http, $window, $location, $routeParams, DB) {
    		if(DB.user == "customer_service"){
    			this.privileged = false;
    		} else {
    			this.privileged = true;
    		}
    	this.user = DB.user;
    	console.log("user: " + this.user);
    	var self = this;


		self.recordNumber = $routeParams.recordNumber;

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

		this.goBack = function(){
			$window.history.go(-1);
		}

		this.approve = function(){
			var current = self.event.reviewer;
			var next = self.event.reviewer;

			switch(current){
				case "senior_customer_service":
					next = "finance_manager"; break;
				case "finance_manager":
					next = "admin_manager"; break;
				case "admin_manager":
					next = "approved"; break;

			}

			self.reviewer = next;

			DB.event_requests[self.index].reviewer = self.reviewer;
			// $location.path("/event_requests");
			$window.history.go(-1);
		}

		this.reject = function(){
			DB.event_requests[self.index].reviewer = "Rejected-SeniorCS";
			// $location.path("/event_requests");
			$window.history.go(-1);
		}

    }]
  });
