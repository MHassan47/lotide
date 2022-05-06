const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (i !== 0) {
      result.push(array[i]);
    }
  }
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
