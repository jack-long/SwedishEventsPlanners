'use strict';

angular.
  module('newEventRequest').
  component('newEventRequest', {
    templateUrl: 'new-event-request/new-event-request.template.html',
    controller: ['$location', function NewEventRequestController($location) {
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
    		console.log(self.event);
    	}
    	this.cancel = function($window){
    		// $window.history.back();
    	}
    }]
  });
