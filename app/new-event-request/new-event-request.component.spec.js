describe('newEventRequest', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('sepApp'));


  // Test the controller
  describe('NewEventRequestController', function() {

    it('should add one more object in `DB.event_requests` list', inject(function($componentController, $location, DB) {
      var scope = {};
      var db = DB;
      var location = $location;

      var lengthBefore = db.event_requests.length;

      var newEvent = {
       recordNumber: "123",
       clientName: "EIT",
       eventType: "meetup",
       numberOfAttendees: "40",
       fromDate: "",
       toDate: "",
       decorations: "",
       meals: "",
       parties: "",
       drinks: "",
       photos: "",
       expectedBudget: "1000"
      };

      var ctrl = $componentController('newEventRequest', {$scope:scope, DB:db});
      ctrl.event = newEvent;
      ctrl.create();

      var lengthAfter = db.event_requests.length;
      // console.log("requests length before: " + lengthBefore + ", after: " + lengthAfter);

      expect(lengthAfter).toBe(lengthBefore + 1);
    }));

  });

});