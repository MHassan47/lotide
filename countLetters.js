const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function (sentence) {
  let count = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter]++;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

console.log(countLetter("wall"));
