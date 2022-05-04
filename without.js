// eqArrays function
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function
const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  if (array1 !== array2) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// without function
const without = function (source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};
