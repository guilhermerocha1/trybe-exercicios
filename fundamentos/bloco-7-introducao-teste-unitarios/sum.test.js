const sum = require('./sum.js');

it('Retorne 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it ('Se a + b e ingual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it ('Se sum(4, "5")', () => {
  expect(sum(4, "5")).toThrow('parameters must be numbers');
});