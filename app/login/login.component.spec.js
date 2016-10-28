describe('login', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('sepApp'));

  // Test the controller
  describe('LoginController', function() {

    it('should redirect `customer_service` to `/event_requests`', inject(function($componentController, $location, DB) {
      var scope = {};
      var location = $location;
      var db = DB;

      var ctrl = $componentController('login', {$scope:scope, $location:location, DB:db});

      ctrl.password = "password";
      ctrl.user = "customer_service";
      ctrl.login();

      expect(location.path()).toBe('/event_requests');
      expect(db.user).toBe('customer_service');
    }));

  });

});