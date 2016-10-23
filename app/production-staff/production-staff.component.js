'use strict';

angular.
  module('productionStaff').
  component('productionStaff', {
    templateUrl: 'production-staff/production-staff.template.html',
    controller: ['$scope','DB', function View1Controller($scope, DB) {

      //display all tasks
      var assignedTasks = DB.task;
      $scope.displayedTasks = assignedTasks;

      //display task Details
      $scope.displayTaskDetails = function(task){
        $scope.task = task ;
      };

      $scope.updateTask = function() {
        alert("New comment added to the task: \n" + $scope.newComment);
        // todo : create array of comments and add the new comment to it
      };
      
    }]
  });
