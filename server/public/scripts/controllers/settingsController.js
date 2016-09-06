colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  $scope.addColor = function () {
    console.log('adding a color....');
    $scope.dataFactory.addColour($scope.newcolor);
    console.log($scope.newcolor);
  }

}]);
