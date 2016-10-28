describe('reviewEventRequests', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('sepApp'));

  // Test the controller
  describe('Approve Event Requests', function() {
  	var ctrl, db, db_backup;
  	var scope = {};
  	var index = 0;

  	beforeEach(inject(function($componentController, DB) {
  		db = db_backup = DB;
  		routeParams = {recordNumber:index}
    	ctrl = $componentController('reviewEventRequests', {$routeParams:routeParams, DB:db, $scope:scope});
    	ctrl.event = db.event_requests[index];
    }));

    it('should set `reviewer` with value `finance_manager`', function() {
    	ctrl.approve();
		expect(db.event_requests[index].reviewer).toBe("finance_manager");
    });

    it('should set `reviewer` with value `approved`', function() {
    	ctrl.approve();
    	ctrl.approve();
		expect(db.event_requests[index].reviewer).toBe("approved");
    });

    it('should set `reviewer` with value `Rejected by SeniorCS`', function() {
    	db.user = "senior_customer_service";
    	ctrl.reject();
		expect(db.event_requests[index].reviewer).toBe("Rejected by SeniorCS");
    });

    it('should set `reviewer` with value `Rejected by Admin`', function() {
    	db.user = "admin_manager";
    	ctrl.reject();
		expect(db.event_requests[index].reviewer).toBe("Rejected by Admin");
    });

  });

});