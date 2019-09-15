const add5 = require('./sum');

test('adds 5 + 5 to equal 10', () => {
  expect(add5(5)).toBe(10);
});

test('add -5 + 5 to equal 10', () => {
  expect(add5(-5)).toBe(0)
});

test('add "5" + 5 to equal 10', () => {
  expect(add5('5')).toBe(10)
});

test('add "abc" + 5 to equal false', () => {
  expect(add5('abc')).toBeFalsy();
});


// testing addFive 
const addFive = require('./sum');


test('adds 5 + 5 to equal 10', () => {
  expect(addFive(5)).toBe(10);
});

test('add -5 + 5 to equal 10', () => {
  expect(addFive(-5)).toBe(0)
});

test('add "5" + 5 to equal 10', () => {
  expect(addFive('5')).toBe(10)
});

test('add "abc" + 5 to equal false', () => {
  expect(addFive('abc')).toBeFalsy();
});