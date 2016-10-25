'use strict';

angular.
  module('hrManager').
  component('hrManager', {
    templateUrl: 'hr-manager/hr-manager.template.html',
    controller: ['$scope', 'DB', function View1Controller($scope, DB) {

      //searching for employeeId
      var employees = DB.employee;
      //console.log(JSON.stringify(employees));
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
    console.log(JSON.stringify(recruitmentR));
    var tempRR = [];
    for (var i = 0; i < recruitmentR.length; i++) {
      if (recruitmentR[i].reviewer == "hr_manager") {
        tempRR.push(recruitmentR[i]);
      }
    }
    $scope.recruitmentRequests = tempRR;



    //display Recruitment request
    $scope.displayRecruitmentRequest = function(request){
      $scope.recruitmentRequest = request;
    };

    //create job adv
    $scope.createJobAd = function(){
      var recruitmentRequest = $scope.recruitmentRequest;
      recruitmentRequest.status = "Approved for Job Advertisement";
      recruitmentRequest.reviewer = "done";
      DB.recruitment_request.push(recruitmentRequest);
      alert("Redirect to creating Job Advertisements for : \n" + JSON.stringify(recruitmentRequest));
      $scope.recruitmentRequest = null;
    };

    //OutSource
    $scope.outsourceJob = function(){
      var recruitmentRequest = $scope.recruitmentRequest;
      recruitmentRequest.status = "Approved for Outsourcing";
      recruitmentRequest.reviewer = "done";
      DB.recruitment_request.push(recruitmentRequest);
      alert("Redirect to outsourcing Job Advertisements for : \n" + JSON.stringify(recruitmentRequest));
      $scope.recruitmentRequest = null;
    };

    }]
  });
