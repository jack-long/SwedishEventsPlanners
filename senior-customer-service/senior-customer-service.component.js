'use strict';

angular.
  module('seniorCustomerService').
  component('seniorCustomerService', {
    templateUrl: 'senior-customer-service/senior-customer-service.template.html',
    controller: ['$http', function seniorCustomerServiceController($http) {
    	var self = this;
        $http.get('data/requests.json').then(function(response) {
          self.requests = response.data;
        })

    }]
  });
