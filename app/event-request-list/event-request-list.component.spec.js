describe('eventRequest', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('sepApp'));

  // Test the controller
  describe('EventRequestList', function() {

    it('should create a `password` with value `password`', inject(function($componentController) {
      var ctrl = $componentController('eventRequestList');

      expect(ctrl.test_sample).toBe('sample');
    }));

  });

});