'use strict';

angular.
  module('hrManager').
  component('hrManager', {
    templateUrl: 'hr-manager/hr-manager.template.html',
    controller: ['$scope', 'DB', function View1Controller($scope, DB) {

      //searching for employeeId
      var employees = DB.employee;
      console.log(JSON.stringify(employees));
      $scope.searchEmployeeId = function(){
      var employeeId = $scope.searchEId;
      var temp =[];
      $scope.searchedEmployee = null;
      if (employeeId) {
        for (var i = 0; i < employees.length; i++) {
          if (employees[i].employeeId == employeeId) {
            temp.push(employees[i]);
            $scope.searchedEmployee =temp;
            break;
          }
        }
      }else {
        $scope.searchedEmployee=employees;
      }
    };

    //looking for schedule
    $scope.displayEmployeeSchedule = function(employee){
      alert("Schedule section is yet to be implemented");
    };

    //display recruitment requests
    var recruitmentR = DB.recruitment_request;
    $scope.recruitmentRequests = recruitmentR;

    //display Recruitment request
    $scope.displayRecruitmentRequest = function(request){
      $scope.recruitmentRequest = request;
    };

    //create job adv
    $scope.createJobAd = function(){
      alert("Yet to be implemented");
    };

    //OutSource
    $scope.outsourceJob = function(){
      alert("Yet to be implemented");
    };

    }]
  });
