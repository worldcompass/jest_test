const firstFunctions = require('./firstFunctions.js');

describe('first function', () => {

  test('adds 5 + 5 to equal 10', () => {
    expect(firstFunctions.add5(5)).toBe(10);
  });

  test('add -5 + 5 to equal 0', () => {
    expect(firstFunctions.add5(-5)).toBe(0)
  });

  test('add "5" + 5 to equal 10', () => {
    expect(firstFunctions.add5('5')).toBe(10)
  });

  test('add "abc" + 5 to equal false', () => {
    expect(firstFunctions.add5('abc')).toBeFalsy();
  });

});

describe('is even function', () => {

  test('check if 10 is even', () => {
    expect(firstFunctions.isEven(10)).toBeTruthy();
  })
  
  test('check if 7 is not even', () => {
    expect(firstFunctions.isEven(7)).toBeFalsy();
  })
  
  test('check if -8 is even', () => {
    expect(firstFunctions.isEven(-8)).toBeTruthy();
  })
  
  test('check if 0 is not even', () => {
    expect(firstFunctions.isEven(0)).toBeFalsy();
  })
  
  test('check if "2" is even', () => {
    expect(firstFunctions.isEven("2")).toBeTruthy();
  });
  
  test('check if "lol" is not even', () => {
    expect(firstFunctions.isEven("lol")).toBeFalsy();
  });
});

//get array information

describe('get array information', () => {
  test('get array lenght to equal 3', () => {
    expect(firstFunctions.getArrayLength([1,2,3])).toEqual(3);
  });

  test('get first element array to be 1', () => {
    expect(firstFunctions.getFirstElement([1,2,3])).toBe(1);
  });

  test('get last element array to be 3', () => {
    expect(firstFunctions.getLastElement([1,2,3])).toBe(3);
  });

  test('get center element of array to be 2', () => {
    expect(firstFunctions.getCenteredElements([1,2,3])).toBe(2);
  });

  test('get average sum of centered elements of array to be 2.5', () => {
    expect(firstFunctions.getCenteredElements([1,2,3,4])).toBe(2.5);
  });
});


//array functions which modify the array
const arrayFunctions = require('./arrayFunctions.js');

describe('test array functions which modify the array', () => {
  test('delete first element from array', () => {
    expect(arrayFunctions.deleteFirstElement(["I", "go", "home"])).toBe('I');
  });
  
  test('push element to end of array', () => {
    expect(arrayFunctions.pushElementToEnd(["I", "go", "home"], 'right now')).toEqual(["I", "go", "home", 'right now']);
  });
  
  test('change second item in array to be "loool"', () => {
    expect(arrayFunctions.changeSecondElement(["I", "go", "home"], 'loool')).toEqual(["I", "loool", "home"]);
  });
  
  test('add value  "yesterday" to the ["I", "went", "home"] end of array', () => {
    expect(arrayFunctions.addValeToStart(["I", "went", "home"], "yesterday")).toEqual(["yesterday", "I", "went", "home"]);
  });
});

//test for sort, map

const sortFunctions = require('./sortFunctions.js');

describe('testing of the sort/map function', () => {
  test('get each element of array increased by 2', () => {
    expect(sortFunctions.increaseEachItemBy2([1,2,3])).toEqual([3,4,5]);
  });

  test('get array of strings containing letters before hyphen', () => {
    expect(sortFunctions.getFirstPart(['abc-efg','wer-sdf','ert-dfg'])).toEqual(['abc','wer','ert']);
  });

  test('get array which contains values bigger than 20', () => {
    expect(sortFunctions.getLargerThan20([1,5,20,100,200])).toEqual([100, 200]);
  });

  test('get sum of array', () => {
    expect(sortFunctions.getSumOfAllArray([1,5,20,100,200])).toEqual(326);
  });

  test('get all items in upper case', () => {
    expect(sortFunctions.getAlltoUpperCase(['a','b','c','d','e'])).toEqual(['A','B','C','D','E']);
  })

  test('get sorted array', () => {
    expect(sortFunctions.getSortedArray([1,2,3,4,234,88,32,5,42,80])).toEqual([1,2,3,4,5,32,42,80,88,234]);
  });

  test('get reversed sorted array', () => {
    expect(sortFunctions.getReversedSortedArray(['aasdsad','sdfsd','sdaxc','aab'])).toEqual(["sdfsd", "sdaxc", "aasdsad", "aab"]);
  });
});


test('sort dishes', () => {
  expect(sortFunctions.sortDishes(['вилка','маленькаяТарелка','ложка','маленькаяЧашка','большаяТарелка','нож']))
  .toEqual([['большаяТарелка', 'маленькаяТарелка'], ['маленькаяЧашка'], ['вилка', 'ложка', 'нож']]);
});