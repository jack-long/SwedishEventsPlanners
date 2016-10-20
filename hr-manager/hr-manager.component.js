'use strict';

angular.
  module('hrManager').
  component('hrManager', {
    templateUrl: 'hr-manager/hr-manager.template.html',
    controller: ['DB', function View1Controller(DB) {
      var search_emplyee = DB.employee;
      var search_recruitment_request=DB.recruitment_request;

    }]
  });
