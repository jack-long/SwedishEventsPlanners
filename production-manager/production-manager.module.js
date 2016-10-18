'use strict';

angular.module('productionManager', ['ngRoute'])
  .controller('productionManagerCtrl',['$scope',function($scope){
    $scope.tabs = [{
      title: 'General',
      url: 'common.tpl.html'
    },{
      title: 'Decorations',
      url: 'common.tpl.html'
    },{
      title: 'Photograph',
      url: 'common.tpl.html'
    },{
      title: 'Music',
      url: 'common.tpl.html'
    },{
      title: 'Graphic Design',
      url: 'common.tpl.html'
    },{
      title: 'Computer Related',
      url: 'common.tpl.html'
    }];

    $scope.currentTab='common.tpl.html';

    $scope.onClickTab = function (tab) {
    $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
       return tabUrl == $scope.currentTab;
   }
  }]);
