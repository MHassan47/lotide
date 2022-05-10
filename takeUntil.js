const assertArraysEqual = require('./assertArraysEqual')
const eqArrays = require('./eqArrays')
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

module.exports = takeUntil

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
