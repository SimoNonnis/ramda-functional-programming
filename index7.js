const R = require('ramda');
const { pipe, where, filter, pluck, equals, lt, __ } = R;

const products = [
  { name: 'Jeans', price: 80, category: 'clothes', stock: 100 },
  { name: 'Hoodie', price: 50, category: 'clothes', stock: 20 },
  { name: 'Sneakers', price: 120, category: 'clothes', stock: 30 },
  { name: 'Cards', price: 35, category: 'games', stock: 10 },
  { name: 'iPhone', price: 649, category: 'electronics', stock: 5 },
  { name: 'Sauce Pan', price: 100, category: 'housewares', stock: 200 }
];

const predicate = where({
  category: equals('clothes'),
  stock: lt(__, 50),
  price: lt(__, 100)
});

const getResults = pipe(
  filter(predicate),
  pluck('name')
);
const result = getResults(products);
console.log(result);
