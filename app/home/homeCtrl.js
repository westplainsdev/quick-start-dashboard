(function() {
  'use strict';

  angular.module('plunker').controller('Home.Ctrl', HomeCtrl)

  function HomeCtrl($scope) {
    $scope.name = "Home View";

  }

}());