const takeUntil = function (array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item) !== true) {
      newArray.push(item);
    } else {
      break;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  if (array1 !== array2) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

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
console.log(eqArrays(results1, [1, 2, 5, 7, 2]));
