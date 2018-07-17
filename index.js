const R = require('ramda');

const product = {
  name: 'cog',
  price: 100,
  details: {
    shippingInfo: {
      weight: 7,
      method: 'ups'
    }
  }
};

const adjustProduct = R.evolve(
  {
    name: R.toUpper,
    price: R.multiply(2)
  },
  product
);

console.log(adjustProduct);
