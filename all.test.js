const functions = require('./functions.js');


test('adds 5 + 5 to equal 10', () => {
  expect(functions.add5(5)).toBe(10);
});

test('add -5 + 5 to equal 0', () => {
  expect(functions.add5(-5)).toBe(0)
});

test('add "5" + 5 to equal 10', () => {
  expect(functions.add5('5')).toBe(10)
});

test('add "abc" + 5 to equal false', () => {
  expect(functions.add5('abc')).toBeFalsy();
});

//is even tests

test('check if 10 is even', () => {
  expect(functions.isEven(10)).toBeTruthy();
})

test('check if 7 is not even', () => {
  expect(functions.isEven(7)).toBeFalsy();
})

test('check if -8 is even', () => {
  expect(functions.isEven(-8)).toBeTruthy();
})

test('check if 0 is not even', () => {
  expect(functions.isEven(0)).toBeFalsy();
})

test('check if "2" is even', () => {
  expect(functions.isEven("2")).toBeTruthy();
})

test('check if "lol" is not even', () => {
  expect(functions.isEven("lol")).toBeFalsy();
})