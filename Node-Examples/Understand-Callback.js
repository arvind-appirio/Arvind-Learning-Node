//Learning and testing Callback functions



var function1 = function() {
  console.log('This would be called later');
}

var function2 = function(callback) {
  console.log('This would be called first');
  callback();
}

function2 (function1);
