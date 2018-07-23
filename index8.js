const R = require('ramda');

const todos = [
  {
    text: 'Buy bread',
    done: false
  },
  {
    text: 'Buy water',
    done: false
  },
  {
    text: 'Buy cheese',
    done: true
  }
];

const notDone = R.whereEq({ done: false });
const done = R.whereEq({ done: true });
const filterNotDone = R.filter(notDone);
const filterDone = R.filter(done);
const result = filterNotDone(todos);

console.log(result);
