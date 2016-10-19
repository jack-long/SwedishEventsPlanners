'use strict';

angular.
  module('newEventRequest').
  component('newEventRequest', {
    templateUrl: 'new-event-request/new-event-request.template.html',
    controller: ['$location', '$rootScope', 'DB', function NewEventRequestController($location, $rootScope, DB) {
    	var self = this;

    	// self.event = {
    	// 	recordNumber: "123",
    	// 	clientName: "",
    	// 	eventType: "",
    	// 	numberOfAttendees: "",
    	// 	fromDate: "",
    	// 	toDate: "",
    	// 	decorations: "",
    	// 	meals: "",
    	// 	parties: "",
    	// 	drinks: "",
    	// 	photos: "",
    	// 	expectedBudget: ""
    	// };
    	this.create = function(){
            // init request
            self.event.reviewer = "senior_customer_service";

    		// $rootScope.event_requests.push(self.event);
            DB.event_requests.push(self.event);
            alert("New event request created.");
            $location.path("/customer-service");
    	}
    }]
  });
