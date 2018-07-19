const R = require('ramda');
const { zip, fromPairs, compose } = R;

const getName = () => Promise.resolve('Simon');
const getHobbies = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(['Reading', 'Rolling', 'Climbing']), 1000);
  });

Promise.all([getName(), getHobbies()])
  .then(
    compose(
      fromPairs,
      zip(['name', 'hobbies'])
    )
  )
  .then(res => console.log(res));
