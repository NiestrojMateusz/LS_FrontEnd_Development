function totalArea(array) {
 var squares_areas = array.map(function(square){
    return square[0]*square[1];
  });

  var total = squares_areas.reduce(function(sum, element){
    return sum += element
  });

  return total;
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rectagle){
    return rectagle[0] === rectagle[1];
  });

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles); // 141



totalSquareArea(rectangles); // 121