
const addition = require('./index');

test('1 + 2 = 3', () => {
  expect(addition(1, 2)).toBe(3);
});
