import {
  expect,
  test,
  describe,
} from 'vitest';

import {
  isObject,
  isFunction,
  isString,
  isBoolean,
  isNumber,
} from './is';

describe('is', () => {
  test('should be an object', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject([])).toBeFalsy();
  });

  test('should be a string', () => {
    expect(isString('')).toBeTruthy();
    expect(isString(0)).toBeFalsy();
  });

  test('should be a boolean', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean(0)).toBeFalsy();
  });

  test('should be a number', () => {
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber('0')).toBeFalsy();
  });

  test('should be a function', () => {
    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction('')).toBeFalsy();
  });
});
