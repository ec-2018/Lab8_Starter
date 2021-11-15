// unit.test.js

const { exportAllDeclaration } = require('@babel/types');
const { TestWatcher } = require('@jest/core');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test ('isPhoneNumber with valid 10 digit input', () => {
    const number = '(619) 243-2935';
    expect(functions.isPhoneNumber(number)).toBe(true);
});

test ('isPhoneNumber with no area code valid input', () => {
    const number = '243-2935';
    expect(functions.isPhoneNumber(number)).toBe(true);
});

test ('isPhoneNumber with 11 digit input', () => {
    const number = '12345678901';
    expect(functions.isPhoneNumber(number)).toBe(false);
});

test ('isPhoneNumber with letters', () => {
    const number = 'abcdefghij';
    expect(functions.isPhoneNumber(number)).toBe(false);
});

test ('isEmail with gmail.com', () => {
    const email = 'loremipsum@gmail.com';
    expect(functions.isEmail(email)).toBe(true);
});

test ('isEmail with international web domain', () => {
    const email = 'loremipsum@mail.nz';
    expect(functions.isEmail(email)).toBe(true);
});

test ('isEmail with no domain', () => {
    const email = 'loremipsum';
    expect(functions.isEmail(email)).toBe(false);
});

test ('isEmail with a space', () => {
    const email = 'lorem ipsum@gmail.com';
    expect(functions.isEmail(email)).toBe(false);
});

test ('isStrongPassword with a strong password', () => {
    const password = 'YvhY2cbtHMVgkz';
    expect(functions.isStrongPassword(password)).toBe(true);
});

test ('isStrongPassword with only letters', () => {
    const password = 'YvhYacbtHMVgkz';
    expect(functions.isStrongPassword(password)).toBe(true);
});

test ('isStrongPassword with long input', () => {
    const password = 'YvhY2cbtHMVgasdfkkzx';
    expect(functions.isStrongPassword(password)).toBe(false);
});

test ('isStrongPassword with only numbers', () => {
    const password = '1523452534';
    expect(functions.isStrongPassword(password)).toBe(false);
});

test ('isDate with valid input', () => {
    const date = '12/12/2021';
    expect(functions.isDate(date)).toBe(true);
});

test ('isDate with single digit month and day', () => {
    const date = '1/1/2021';
    expect(functions.isDate(date)).toBe(true);
});

test ('isDate without a year', () => {
    const date = '01/01';
    expect(functions.isDate(date)).toBe(false);
});

test ('isDate 8000 years in the future', () => {
    const date = '01/01/10021';
    expect(functions.isDate(date)).toBe(false);
});

test ('isHexColor with valid 6 digit hex color', () => {
    const color = '4287f5';
    expect(functions.isHexColor(color)).toBe(true);
});

test ('isHexColor with valid 3 digit hex color', () => {
    const color = '7f5';
    expect(functions.isHexColor(color)).toBe(true);
});

test ('isHexColor with too many digits', () => {
    const color = '4287f5b';
    expect(functions.isHexColor(color)).toBe(false);
});

test ('isHexColor with too large a value', () => {
    const color = '4287fj';
    expect(functions.isHexColor(color)).toBe(false);
});
