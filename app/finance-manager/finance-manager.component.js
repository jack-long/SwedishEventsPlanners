'use strict';

angular.
  module('financeManager').
  component('financeManager', {
    templateUrl: 'finance-manager/finance-manager.template.html',
    controller: ['DB', function View1Controller(DB) {
    	this.requests = DB.event_requests;

    }]
  });
