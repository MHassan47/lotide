const assertEqual = require('./assertEqual');

const head = function (actual, expected) {
  return actual[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);

module.exports = head