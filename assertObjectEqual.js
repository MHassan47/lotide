const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    if (assertObjectsEqual(actual, expected) === true) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}` + `=== ${inspect(actual)}`);
    }
    if (assertObjectsEqual(actual, expected) === false) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}` + `!== ${inspect(actual)}`);
    }
  };