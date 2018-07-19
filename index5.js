// const R = require('ramda');

const getName = () => Promise.resolve('Simon');
const getHobbies = () =>
  new Promise((res, rej) => {
    setTimeout(() => res(['Reading', 'Rolling', 'Climbing']), 1000);
  });

Promise.all([getName(), getHobbies()]).then(res => {
  const [name, hobbies] = res;
  const result = {
    name,
    hobbies
  };
  console.log({ result });
});
