const isEven = require('./even');

test('check if 10 is even', () => {
    expect(isEven(10)).toBeTruthy();
})

test('check if 7 is not even', () => {
    expect(isEven(7)).toBeFalsy();
})

test('check if -8 is even', () => {
    expect(isEven(-8)).toBeTruthy();
})

test('check if 0 is not even', () => {
    expect(isEven(0)).toBeFalsy();
})

test('check if "2" is even', () => {
    expect(isEven("2")).toBeTruthy();
})

test('check if "lol" is not even', () => {
    expect(isEven("lol")).toBeFalsy();
})