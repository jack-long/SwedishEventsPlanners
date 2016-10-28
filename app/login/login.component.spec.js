describe('login', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('sepApp'));


  // Test the controller
  describe('LoginController', function() {

    var db;

    // try to load prepared data, but not working. TODO
    beforeEach(inject(function($controller, $rootScope, DB) {
      var scope = $rootScope.$new();
      db = DB;
      sepCtrl = $controller('SEPController', {$scope:scope, DB:db});
      // console.log(db);
    }));

    it('should redirect `customer_service` to `/event_requests`', inject(function($componentController, $location) {
      var scope = {};
      var location = $location;

      var ctrl = $componentController('login', {$scope:scope, $location:location, DB:db});

      ctrl.password = "password";
      ctrl.user = "customer_service";
      ctrl.login();

      console.log(db);
      expect(location.path()).toBe('/event_requests');
      expect(db.user).toBe('customer_service');
    }));

  });

});