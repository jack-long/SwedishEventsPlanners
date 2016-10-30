// test suite for production-manager
describe('production-manager test suite',function(){

  var db, sepCtrl, prodctrl, prodscope, prodDB;
  //loading the main controller
  beforeEach(module('sepApp'));

  beforeEach(inject(function($controller, $rootScope, DB) {
    var scope = $rootScope.$new();
    db = DB;
    sepCtrl = $controller('SEPController', {$scope:scope, DB:db});
    // console.log(db);
  }));

  beforeEach(inject(function($componentController, $rootScope, DB){
    prodscope =$rootScope.$new();
    prodDB = DB;
    prodctrl = $componentController('productionManager', {$scope:prodscope, $location:location, DB:prodDB});
  }));

  //test cases for production-manager

  //View Event Requests
  it('should display event details in the View Event Request panel on the press of search button in the Search Event Requests panel', function(){
    var eventRequest = {
      	"clientName": "College of Music",
      	"eventType": "Workshop",
      	"expectedBudget": "10000",
      	"fromDate": "2016/10/17",
      	"toDate": "2016/10/19",
      	"numberOfAttendees": "40",
      	"preferences": {
      		"decorations": true,
      		"drinks": true,
      		"meals": true,
      		"parties": true,
      		"photos": true
      	},
      	"recordNumber": "010003",
      	"reviewer": "senior_customer_service",
        "comments": ""
    };
    prodscope.createEventRequest(eventRequest);
    prodscope.searchRecordNumber = "010003";
    prodscope.searchEvent();
   ;
    expect(prodscope.displayedEvent).toBeDefined();
    expect(prodscope.displayedEvent.recordNumber).toBe("010003");
  });

  //Allocate, Search and View Task
  it('should create task JSON once allocate task button is clicked, display set of tasks in the Search Tasks panel on click of search button and  display the selected task in the View Task panel ', function(){
    var allocatedtask = {
        "eventId":"e123",
        "taskSubject":" Make event theme",
        "description":" Suggest a theme for the event as per the client's requirement and do appropriate decorations",
        "assignedTo":"Magy",
        "priority":"High",
        "comments":[
          {"name":"Jack","comment":"Please complete as soon as possible"},
          {"name":"Magy","comment":"ok"}
        ]
    };
    var lengthBefore = prodDB.task.length;
    prodscope.assignTask = allocatedtask;
    prodscope.assignedTask();
    var lengthAfter = prodDB.task.length;
    expect(lengthAfter).toBe(lengthBefore + 1);

    prodscope.searchEventId = "e123";
    prodscope.searchTasks();
    expect(prodscope.searchedTask).toBeDefined();
    expect(prodscope.searchedTask[0].eventId).toBe("e123");
    prodscope.searchEventId = null;
    prodscope.searchTasks();
    expect(prodscope.searchedTask.length).toBe(1);

    prodscope.displayTaskDetails(allocatedtask);
    expect(prodscope.task).toBeDefined();
    expect(prodscope.task.taskSubject).toBe(" Make event theme");
  });

//Recruitment Request

it('should create a Recruitment request on the click of submit button on the Recruitment Request Panel', function(){
  var rr = {
    "recuitmentId":"981",
    "contractType":"Full Time",
    "requestingDepartment":"Administration",
    "yearsOfExperience":"4",
    "jobTitle":"Customer Service",
    "jobDescription":" To provide cutomer support for the potrntial clients looking for information on event management",
    "reviewer":"hr_manager",
    "status":"Submitted to HR Manager for review"
  };
  prodscope.recruitmentRequest = rr;
  var lengthBefore = prodDB.recruitment_request.length;
  prodscope.submitRecruitmentRequest();
  var lengthAfter = prodDB.recruitment_request.length;
  expect(lengthAfter).toBe(lengthBefore + 1);
  expect(prodDB.recruitment_request[lengthAfter-1].recuitmentId).toBe("981");
  expect(prodDB.recruitment_request[lengthAfter-1].reviewer).toBe("hr_manager");
});

//Finance Request
it('should create a Finance request on the click od submit button on the Finance Request Panel',function(){
  var fr = {
    "eventId":"e123",
    "requestingDepartment":"Production",
    "requiredAmount":"6000 SEK",
    "reason":"For buying decorations for the event",
    "reviewer":"finance_manager",
    "status":"Submitted to Finance Manager for review"
  };
  prodscope.financeRequest =fr;
  var lengthBefore = prodDB.finance_request.length;
  prodscope.submitFinanceRequest();
  var lengthAfter = prodDB.finance_request.length;
  expect(lengthAfter).toBe(lengthBefore + 1);
  expect(prodDB.finance_request[lengthAfter-1].eventId).toBe("e123");
  expect(prodDB.finance_request[lengthAfter-1].reviewer).toBe("finance_manager");
});

});
