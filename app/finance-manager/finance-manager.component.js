'use strict';

angular.
  module('financeManager').
  component('financeManager', {
    templateUrl: 'finance-manager/finance-manager.template.html',
    controller: ['$scope','DB', function View1Controller($scope,DB) {
    	this.requests = DB.event_requests;

      //get financeRequests
      $scope.financeRequests = DB.finance_request;

      //display finance requests
      $scope.displayFinanceRequest = function(request){
        console.log(JSON.stringify(request));
        $scope.displayedfinanceRequest = request;
        console.log(JSON.stringify($scope.displayedfinanceRequest));
      };

      //approval of request
      $scope.approveFinanceRequest = function(){
        alert("Finance request approved : "+ JSON.stringify($scope.displayedfinanceRequest));
      };

      $scope.declineFinanceRequest = function(){
        alert("Finance request declined : "+ JSON.stringify($scope.displayedfinanceRequest));
      }
    }]
  });
