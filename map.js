const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, (x) => x[0]);
console.log(results1);

const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  if (array1 !== array2) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
console.log(assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ] ));

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
console.log(eqArrays(results1,[ 'g', 'c', 't', 'm', 't' ] ));