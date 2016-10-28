'use strict';

angular.
  module('financeManager').
  component('financeManager', {
    templateUrl: 'finance-manager/finance-manager.template.html',
    controller: ['$scope','DB', function financeManagerController($scope,DB) {
    	this.requests = DB.event_requests;

      //get financeRequests
      var financeRequest = DB.finance_request;;
      var tempFR = []
      for (var i = 0; i < financeRequest.length; i++) {
        if (financeRequest[i].reviewer == "finance_manager") {
          tempFR.push(financeRequest[i]);
        }
      }
      $scope.financeRequests = tempFR;

      //display finance requests
      $scope.displayFinanceRequest = function(request){
        //console.log(JSON.stringify(request));
        $scope.displayedfinanceRequest = request;
        //console.log(JSON.stringify($scope.displayedfinanceRequest));
      };

      //approval of request
      $scope.approveFinanceRequest = function(){
        var financeRequest = $scope.displayedfinanceRequest;
        financeRequest.status ="Approved";
        financeRequest.reviewer="Done";
        DB.finance_request.push(financeRequest);
        alert("Finance request approved : "+ JSON.stringify(financeRequest));
        $scope.displayedfinanceRequest = null;
      };

      $scope.declineFinanceRequest = function(){
        var financeRequest = $scope.displayedfinanceRequest;
        financeRequest.status ="Declined";
        financeRequest.reviewer="Done";
        DB.finance_request.push(financeRequest);
        alert("Finance request declined : "+ JSON.stringify(financeRequest));
        $scope.displayedfinanceRequest = null;
      }
    }]
  });
