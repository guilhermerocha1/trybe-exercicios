const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
  expect(sum(2, 5)).toEqual(7);
});