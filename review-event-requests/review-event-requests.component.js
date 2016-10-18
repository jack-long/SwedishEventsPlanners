'use strict';

angular.
  module('reviewEventRequests').
  component('reviewEventRequests', {
    templateUrl: 'review-event-requests/review-event-requests.template.html',
    controller: ['$http', '$rootScope', '$location', '$routeParams',
    	function reviewEventRequestsController($http, $rootScope, $location, $routeParams) {

    	console.log($rootScope);
    	this.user = $rootScope.user;
    	console.log(this.user);
    	var self = this;


      self.recordNumber = $routeParams.recordNumber;

    //   $http.get('data/event_requests.json').then(function(response) {
    //     var requests = response.data;
    //     console.log(requests);
    //     console.log(self.recordNumber);
    //     for (var i = 0; i < requests.length; i++) {
	   //  		if(self.recordNumber == requests[i].recordNumber){
		  //   			self.event = requests[i];
		  //   			break;
		  //   	}
				// };
    //   });


      var requests = $rootScope.event_requests;
      // console.log(requests);
      // console.log(self.recordNumber);
      for (var i = 0; i < requests.length; i++) {
    		if(self.recordNumber == requests[i].recordNumber){
	    			self.event = requests[i];
	    			self.index = i;
	    			break;
	    	}
			};
    // console.log($rootScope.event_requests);

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

			$rootScope.event_requests[self.index].reviewer = self.reviewer;
			console.log($rootScope.event_requests);
			$location.path("/event_requests");
		}

		this.reject = function(){

		}

    }]
  });
