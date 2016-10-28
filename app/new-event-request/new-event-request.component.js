'use strict';

angular.
  module('newEventRequest').
  component('newEventRequest', {
    templateUrl: 'new-event-request/new-event-request.template.html',
    controller: ['$location', 'DB', function NewEventRequestController($location, DB) {
    	var self = this;

    	this.create = function(){
            // init request
            self.event.reviewer = "senior_customer_service";

            DB.event_requests.push(self.event);
            alert("New event request created.");
            $location.path("/customer-service");
    	}
    }]
  });
