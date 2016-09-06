colorBlocks.controller('GameController', ['$scope', 'DataFactory', function ($scope, DataFactory) {

console.log('game controller running');
$scope.dataFactory = DataFactory;
// start game
init();

// resets game to the starting state
function init() {
  console.log("init running");
  $scope.colors = $scope.dataFactory.colours();
  console.log($scope.colors);
  // $scope.datafactory.getColours();
  $scope.messageText = "";
  $scope.currentColor = $scope.dataFactory.currentColour();
  $scope.colorPrompt = 'Can you find the ' + $scope.currentColor + ' block?';
}


// click handler for guessing colors
$scope.handleInput = function(clickedColor) {
  if(clickedColor === $scope.dataFactory.currentColour()) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    $scope.messageText = 'Oh no! You guessed wrong!';
  }
}

}]);
