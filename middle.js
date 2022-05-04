eqArrays function
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

const middle = function (array) {
  let middleIndex = [];
  if (array.length > 2) {
    if (array.length % 3 === 0) {
      middleIndex.push(array[Math.floor(array.length / 2)]);
    } else if (array.length % 2 === 0) {
      middleIndex.push(array[Math.floor(array.length / 2 - 1)]);
      middleIndex.push(array[Math.floor(array.length / 2)]);
    }
    return middleIndex;
  }
  return (middleIndex = []);
};
console.log(middle([1, 7, 9, 11]));
