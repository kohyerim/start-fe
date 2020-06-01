/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-plusplus */
function avg() {
  let sum = 0;
  let num = 0;
  if (typeof arguments[0] === 'object') {
    const array = arguments[0];
    for (let i = 0; i < array.length; i++) {
      if (!isNaN(array[i])) {
        sum += array[i];
        num++;
      }
    }
  } else {
    for (let i = 0; i < arguments.length; i++) {
      if (!isNaN(arguments[i])) {
        sum += arguments[i];
        num++;
      }
    }
  }

  return sum / num;
}

module.exports = avg;
