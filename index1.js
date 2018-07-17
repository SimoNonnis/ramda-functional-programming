const R = require('ramda');

const to20 = R.curry((limit, n) => (n > limit ? false : [n, n + 1]));
const by10 = R.curry((limit, n) => (n > limit ? false : [n, n + 10]));

const result1 = R.unfold(to20(20), 1);
const result2 = R.unfold(by10(100), 1);
console.log(result1);
console.log(result2);
