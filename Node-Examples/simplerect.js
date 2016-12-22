var rect = require('./rectangle-1.js');

function solveRect(a, b) {
  console.log('Solving your problem');
  
  if(a<0 || b<0) {
    console.log('please enter correct input');
  } else {
    console.log('Rect Area : ' + rect.area(a, b));
    console.log('Rect Perimeter : ' + rect.perimeter(a, b));
  }
};


solveRect(10, 20);
solveRect(3, 5);
solveRect(-1, 5);