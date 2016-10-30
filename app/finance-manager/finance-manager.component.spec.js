// test suite for finance-manager
describe('',function(){

  var db, sepCtrl, finctrl, finscope, finDB;
  //loading the main controller
  beforeEach(module('sepApp'));

  beforeEach(inject(function($controller, $rootScope, DB) {
    var scope = $rootScope.$new();
    db = DB;
    sepCtrl = $controller('SEPController', {$scope:scope, DB:db});
    // console.log(db);
  }));

  beforeEach(inject(function($componentController, $rootScope, DB){
    finscope =$rootScope.$new();
    finDB = DB;
    finctrl = $componentController('financeManager', {$scope:finscope, $location:location, DB:finDB});
  }));

  //test cases for finance-manager

  //View, Approve or decline finance request
  it('should display the selected finance request in Review Finance Request and change the status on the press of buttons',function(){
    var fr1={
      "eventId":"e123",
      "requestingDepartment":"Production",
      "requiredAmount":"6000 SEK",
      "reason":"For buying decorations for the event",
      "reviewer":"finance_manager",
      "status":"Submitted to Finance Manager for review"
    };

    finscope.displayFinanceRequest(fr1);
    expect(finscope.displayedfinanceRequest.requestingDepartment).toBe("Production");

    var lengthBefore = finDB.finance_request.length;
    finscope.approveFinanceRequest();
    var lengthAfter = finDB.finance_request.length;
    expect(finDB.finance_request[lengthAfter-1].status).toBe("Approved");
    expect(finDB.finance_request[lengthAfter-1].reviewer).toBe("done");
    expect(lengthAfter).toBe(lengthBefore + 1);

    var fr2={
      "eventId":"e456",
      "requestingDepartment":"Administration",
      "requiredAmount":"5670 SEK",
      "reason":"For office supplies",
      "reviewer":"finance_manager",
      "status":"Submitted to Finance Manager for review"
    };

    finscope.displayFinanceRequest(fr2);
    expect(finscope.displayedfinanceRequest.requestingDepartment).toBe("Administration");

    lengthBefore = finDB.finance_request.length;
    finscope.declineFinanceRequest();
    lengthAfter = finDB.finance_request.length;
    expect(finDB.finance_request[lengthAfter-1].status).toBe("Declined");
    expect(finDB.finance_request[lengthAfter-1].reviewer).toBe("done");
    expect(lengthAfter).toBe(lengthBefore + 1);
  });
});
