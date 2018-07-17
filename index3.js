const R = require('ramda');

const add = (a, b, c) => a + b + c;
const curriedAdd = R.curry(add);
const result = curriedAdd(10)(10)(10);
console.log(result);
