/* eslint-disable no-console */
const avg = require('./avg');
const random = require('./random');

console.log('========== average =========');
console.log(avg(1, 2, 3, 4));
console.log(avg(1, 2));
console.log(avg(1, 2, 3, 4, 5, 6));
console.log(avg(1, 'a', 2));
console.log(avg([1, 2, 3]));

console.log('=========== random ==========');
console.log(random(0, 100));
console.log(random(3));
console.log(random(0, 'a'));
