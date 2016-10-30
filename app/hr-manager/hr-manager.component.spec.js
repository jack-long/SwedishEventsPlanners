// test suite for hr Manager
describe('',function(){

  var db, sepCtrl, hrctrl, hrscope, hrDB;
  //loading the main controller
  beforeEach(module('sepApp'));

  beforeEach(inject(function($controller, $rootScope, DB) {
    var scope = $rootScope.$new();
    db = DB;
    sepCtrl = $controller('SEPController', {$scope:scope, DB:db});
    // console.log(db);
  }));

  beforeEach(inject(function($componentController, $rootScope, DB){
    hrscope =$rootScope.$new();
    hrDB = DB;
    hrctrl = $componentController('hrManager', {$scope:hrscope, $location:location, DB:hrDB});
  }));

  //test cases for hr Manager

  //view and respond to Recruitment Requests
  it('should display the selected recruitment request display it on the Review Recruitment Request panel and on the click of buttons it should change the request',function(){
    var rr1 = {
      "recuitmentId":"981",
      "contractType":"Full Time",
      "requestingDepartment":"Administration",
      "yearsOfExperience":"4",
      "jobTitle":"Customer Service",
      "jobDescription":" To provide cutomer support for the potrntial clients looking for information on event management",
      "reviewer":"hr_manager",
      "status":"Submitted to HR Manager for review"
    };

    hrscope.displayRecruitmentRequest(rr1);
    expect(hrscope.recruitmentRequest.contractType).toBe("Full Time");

    var lengthBefore = hrDB.recruitment_request.length;
    hrscope.createJobAd();
    var lengthAfter = hrDB.recruitment_request.length;
    expect(hrDB.recruitment_request[lengthAfter-1].status).toBe("Approved for Job Advertisement");
    expect(hrDB.recruitment_request[lengthAfter-1].reviewer).toBe("done");
    expect(lengthAfter).toBe(lengthBefore + 1);


    var rr2 = {
      "recuitmentId":"783",
      "contractType":"Part Time",
      "requestingDepartment":"Production",
      "yearsOfExperience":"2",
      "jobTitle":"Photographer",
      "jobDescription":" Should be able to use drones to take photographs during open air events ",
      "reviewer":"hr_manager",
      "status":"Submitted to HR Manager for review"
    };

    hrscope.displayRecruitmentRequest(rr2);
    expect(hrscope.recruitmentRequest.contractType).toBe("Part Time");

    lengthBefore = hrDB.recruitment_request.length;
    hrscope.outsourceJob();
    lengthAfter = hrDB.recruitment_request.length;
    expect(hrDB.recruitment_request[lengthAfter-1].status).toBe("Approved for Outsourcing");
    expect(hrDB.recruitment_request[lengthAfter-1].reviewer).toBe("done");
    expect(lengthAfter).toBe(lengthBefore + 1);
  });

});
