describe('login', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('sepApp'));

  // Test the controller
  describe('LoginController', function() {

    it('should create a `password` with value `password`', inject(function($componentController) {
      var ctrl = $componentController('login');

      expect(ctrl.test_pw).toBe('password');
      expect(ctrl.test).toBe(true);
    }));

  });

});