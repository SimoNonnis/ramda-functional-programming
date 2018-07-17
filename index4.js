const R = require('ramda');

const text = `Long run is a misleading guide to current affairs. In the long run we are all dead.
The decadent international but individualistic capitalism in the hands of which we found ourselves after the war is not a success. It is not intelligent. It is not beautiful. It is not just. It is not virtuous. And it doesn't deliver the goods.`;

const countWords = R.compose(
  R.map(R.sortBy(R.identity)),
  R.invert,
  R.countBy(R.toLower),
  R.match(/\w+/g)
);

console.log(countWords(text));
