const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle