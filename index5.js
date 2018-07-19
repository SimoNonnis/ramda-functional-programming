const R = require('ramda');
const { zipObj } = R;

const getName = () => Promise.resolve('Simon');
const getHobbies = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(['Reading', 'Rolling', 'Climbing']), 1000);
  });

Promise.all([getName(), getHobbies()])
  .then(zipObj(['name', 'hobbies']))
  .then(res => console.log(res));
