// test suite for production-staff
describe('production-staff test suite',function(){
  var db, sepCtrl, prodctrl, prodSscope, prodSDB;
  //loading the main controller
  beforeEach(module('sepApp'));

  beforeEach(inject(function($controller, $rootScope, DB) {
    var scope = $rootScope.$new();
    db = DB;
    sepCtrl = $controller('SEPController', {$scope:scope, DB:db});
    // console.log(db);
  }));

  beforeEach(inject(function($componentController, $rootScope, DB){
    prodSscope =$rootScope.$new();
    prodSDB = DB;
    prodctrl = $componentController('productionStaff', {$scope:prodSscope, $location:location, DB:prodSDB});
  }));

    //test cases for production-staff
    //View Task
    it('should display Task on the Task Details panel',function(){
      var viewTask = {
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
      prodSscope.newComment = "Done";
      prodSscope.displayTaskDetails(viewTask);
      expect(prodSscope.task.eventId).toBe("e123");
      prodSscope.updateTask();
      expect(prodSscope.newComment).toBe("Done");
    });
});
