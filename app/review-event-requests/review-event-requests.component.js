'use strict';

angular.
  module('reviewEventRequests').
  component('reviewEventRequests', {
    templateUrl: 'review-event-requests/review-event-requests.template.html',
    controller: ['$http', '$window', '$location', '$routeParams', 'DB',
    	function ReviewEventRequestsController($http, $window, $location, $routeParams, DB) {
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

			self.event.reviewer = next;

			DB.event_requests[self.index] = self.event;
			$window.history.go(-1);
		}

		this.reject = function(){
			switch(DB.user){
				case "senior_customer_service":
					self.event.reviewer = "Rejected by SeniorCS"; break;
				case "admin_manager":
					self.event.reviewer = "Rejected by Admin"; break;
			}
			DB.event_requests[self.index] = self.event;
			// $location.path("/event_requests");
			$window.history.go(-1);
		}

		// test sample
		this.test_sample = "sample";

    }]
  });
