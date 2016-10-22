'use strict';

angular.
  module('productionManager').
  component('productionManager', {
    templateUrl: 'production-manager/production-manager.template.html',
    controller: ['$scope', 'DB', function View1Controller($scope, DB) {

      $scope.cancelRecruitmentRequest = function(){
        console.log("Recruitment request form cleared");
        $scope.recruitmentRequest = null;
      };

      $scope.submitRecruitmentRequest = function() {
        $scope.recruitmentRequest.status = "Submitted to HR Manager for review";
        alert("New recruitment request submitted, with values as follows: \n" + JSON.stringify($scope.recruitmentRequest));
        console.log("New recruitment request submitted, with values as follows: \n" + JSON.stringify($scope.recruitmentRequest));
        //todo : implement http post to backed
      };

      $scope.cancelFinanceRequest = function(){
        console.log("Recruitment request form cleared");
        $scope.financeRequest = null;
      };

      $scope.submitFinanceRequest = function() {
        $scope.recruitmentRequest.status = "Submitted to Finance Manager for review";
        alert("New finance request submitted, with values as follows: \n" + JSON.stringify($scope.recruitmentRequest));
        console.log("New finance request submitted, with values as follows: \n" + JSON.stringify($scope.recruitmentRequest));
        //todo : implement http post to backed
      };
    }]
  });
