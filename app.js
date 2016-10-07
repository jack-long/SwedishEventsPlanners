'use strict';

// Define the `sepApp` module
var sepApp = angular.module('sepApp', [
  'ngRoute',
  'sepApp.view1',
  'sepApp.view2',
// ]);

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('#');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// // Define the `MainController` controller on the `phonecatApp` module
sepApp.controller('MainCtrl', function MainController($scope) {
  $scope.name = 'world';

  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

});
