(function() {
  'use strict';

  angular.module('plunker').controller('About.Ctrl', AboutCtrl)

  function AboutCtrl($scope) {
    $scope.name = 'About View';
    $scope.version = angular.version;
  }

}());