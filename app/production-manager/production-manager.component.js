'use strict';

angular.
  module('productionManager').
  component('productionManager', {
    templateUrl: 'production-manager/production-manager.template.html',
    controller: ['$scope', 'DB', function productionManagerController($scope, DB) {

      $scope.cancelRecruitmentRequest = function(){
        //todo : add status to recruitment request
        console.log("Recruitment request form cleared");
        $scope.recruitmentRequest = null;
      };

      $scope.submitRecruitmentRequest = function() {
        //todo : add status to recruitment request
        console.log("New recruitment request submitted, with values as follows: \n" + JSON.stringify($scope.recruitmentRequest));
        var recruitmentRequest = $scope.recruitmentRequest;
        recruitmentRequest.reviewer = "hr_manager";
        recruitmentRequest.status ="Submitted to HR Manager for review";
        alert("New recruitment request submitted, with values as follows: \n" + JSON.stringify(recruitmentRequest));
        DB.recruitment_request.push(recruitmentRequest);
        $scope.recruitmentRequest = null ;
        //todo : implement http post to backed
      };


      $scope.cancelFinanceRequest = function(){
        //todo : add status to finance request
        var status = null;
        console.log("Finance request form cleared");
        $scope.financeRequest = null;
      };

      $scope.submitFinanceRequest = function() {
        //todo : add status to finance request
        console.log("New finance request submitted, with values as follows: \n" + JSON.stringify($scope.financeRequest));
        var financeRequest = $scope.financeRequest;
        financeRequest.reviewer = "finance_manager";
        financeRequest.status ="Submitted to Finance Manager for review";
        alert("New finance request submitted, with values as follows: \n" + JSON.stringify(financeRequest));
        DB.finance_request.push(financeRequest);
        $scope.financeRequest = null;
        //todo : implement http post to backed
      };

      $scope.updateTask = function() {
        alert("New comment added to the task: \n" + $scope.newComment);
        // todo : create array of comments and add the new comment to it
      };

      //search task function
      var tasks = DB.task;
      console.log(tasks.length);
      console.log(JSON.stringify(tasks));
      $scope.searchTasks = function() {
        var eventId = $scope.searchEventId;
        var temp =[];
        $scope.searchedTask=null;
        console.log(eventId);
        if (eventId) {
          for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].eventId == eventId) {
              //console.log(JSON.stringify(tasks[i]));
              temp.push(tasks[i]);
              $scope.searchedTask = temp;
              console.log(JSON.stringify($scope.searchedTask));
              break;
            }
          }
        }else {
          $scope.searchedTask=tasks;
        }
      };

      //display task Details
      $scope.displayTaskDetails = function(task){
        $scope.task = task ;
      }

      //assign task to subteams
      $scope.assignedTask = function(){
        var assignTask = $scope.assignTask;
        DB.task.push(assignTask);
        alert("New task assigned : \n" + JSON.stringify(assignTask));
        //todo : post it to the database
      }

    // search events
    var eventRequests= DB.event_requests;
    console.log(JSON.stringify(eventRequests));
    $scope.searchEvent = function(){
      var eventId = $scope.searchRecordNumber;
      $scope.displayedEvent = null ;
      if (eventId) {
        for (var i = 0; i < eventRequests.length; i++) {
          if (eventRequests[i].recordNumber == eventId) {
            $scope.displayedEvent = eventRequests[i];
            break;
          }
        }
      }else {
        alert("Event Id not present !!!");
      }
    };


    }]
  });
