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
});

test('check if "lol" is not even', () => {
  expect(functions.isEven("lol")).toBeFalsy();
});

//test arrays

test('get array lenght to equal 3', () => {
  expect(functions.getArrayLength([1,2,3])).toEqual(3);
});

test('get first element array to be 1', () => {
  expect(functions.getFirstElement([1,2,3])).toBe(1);
});

test('get last element array to be 3', () => {
  expect(functions.getLastElement([1,2,3])).toBe(3);
});

test('get center element of array to be 2', () => {
  expect(functions.getCenteredElements([1,2,3])).toBe(2);
});

test('get average sum of centered elements of array to be 2.5', () => {
  expect(functions.getCenteredElements([1,2,3,4])).toBe(2.5);
});

// arrays functions tests

test('delete first element from array', () => {
  expect(functions.deleteFirstElement(["I", "go", "home"])).toBe('I');
});

test('push element to end of array', () => {
  expect(functions.addElementToEnd(["I", "go", "home"], 'right now')).toEqual(["I", "go", "home", 'right now']);
});

test('change second item in array to be "loool"', () => {
  expect(functions.changeSecondElement(["I", "go", "home"], 'loool')).toEqual(["I", "loool", "home"]);
});

test('add value  "yesterday" to the ["I", "went", "home"] end of array', () => {
  expect(functions.addValeToStart(["I", "went", "home"], "yesterday")).toEqual(["yesterday", "I", "went", "home"]);
});

//test for sort, map

test('get each element of array increased by 2', () => {
  expect(functions.increaseEachItemBy2([1,2,3])).toEqual([3,4,5]);
});

test('get array of strings containing letters before hyphen', () => {
  expect(functions.getFirstPart(['abc-efg','wer-sdf','ert-dfg'])).toEqual(['abc','wer','ert']);
});

test('get array which contains values bigger than 20', () => {
  expect(functions.getLargerThan20([1,5,20,100,200])).toEqual([100, 200]);
});

test('get sum of array', () => {
  expect(functions.getSumOfAllArray([1,5,20,100,200])).toEqual(326);
});

test('get all items in upper case', () => {
  expect(functions.getAlltoUpperCase(['a','b','c','d','e'])).toEqual(['A','B','C','D','E']);
})

test('get sorted array', () => {
  expect(functions.getSortedArray([1,2,3,4,234,88,32,5,42,80])).toEqual([1,2,3,4,5,32,42,80,88,234]);
});

test('get reversed sorted array', () => {
  expect(functions.getReversedSortedArray(['aasdsad','sdfsd','sdaxc','aab'])).toEqual(["sdfsd", "sdaxc", "aasdsad", "aab"]);
});