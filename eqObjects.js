const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  for (const arr of object1);
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);

  if (array1.length !== array2.length) return false;
  for (arr of array1) {
    if (
      Array.isArray(array1[arr]) === true &&
      Array.isArray(array2[arr] === true)
    ) {
      if ((assertEqual(object1[arr]), object2[arr] === false)) {
        return false;
      }
    }
  }
};

// test code 1
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

// test code 2
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
