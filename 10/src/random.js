/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
function random() {
  let min = 0;
  let max = 0;
  let result = -1;
  if (arguments.length === 1) {
    max = arguments[0];
  } else if (arguments.length === 2) {
    if (arguments[0] > arguments[1]) {
      min = arguments[1];
      max = arguments[0];
    } else {
      min = arguments[0];
      max = arguments[1];
    }
  }
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  if (isNaN(result)) {
    return -1;
  }
  return result;
}

module.exports = random;
