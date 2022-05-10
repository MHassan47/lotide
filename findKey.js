
const assertEqual = require('./assertEqual')
const findKey = function(object, callback) {
  for (key in object) {  
    if (object.hasOwnProperty(key)) { 
      if (callback(object[key])) { 
        return key;  
    } else {
      return undefined;
    }
  }
};
module.exports = findKey

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)}