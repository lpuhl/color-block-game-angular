colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");

  // Private
  var colors = ['red', 'blue', 'papayawhip', 'green'];

  var addColor = function(newcolor) {
    colors.push(newcolor);
    console.log("colors", colors);
    currentColor = colors[randomNumber(0, colors.length - 1)];
    return colors;
  };

  var currentColor = colors[randomNumber(0, colors.length - 1)];

  //UTILITY FUNCTIONS
  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
  }

  // public API for access to our private data
  return {
    currentColour: function() {
      console.log('currentColour running from factory:', currentColor);
      return currentColor;
    },
    colours: function() {
      console.log('colours running from factory');
      return colors;
    },
    // getColours: function() {
    //   console.log('getColours running from factory');
    //   return getColors();
    // },
    addColour: function(newcolor) {
      console.log('addColour running from factory');
      return addColor(newcolor);
    }

  };


}]);
