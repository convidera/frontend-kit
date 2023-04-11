import {
  expect,
  test,
  describe,
} from 'vitest';

import includesLowerCase from './includes-lower-case';

describe('includesLowerCase', () => {
  test('should return true if value includes lower case', () => {
    const validate = includesLowerCase('error message');

    expect(validate('value')).toBe(true);
    expect(validate('Value')).toBe(true);
  });

  test('should return error message if value does not include lower case', () => {
    const validate = includesLowerCase('error message');

    expect(validate('VALUE')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = includesLowerCase('error message');

    expect(validate('')).toBe(true);
  });

  test('should work with umlauts', () => {
    const validate = includesLowerCase('error message');

    expect(validate('ä')).toBe(true);
    expect(validate('ö')).toBe(true);
    expect(validate('ü')).toBe(true);
    expect(validate('ß')).toBe(true);
  });
});
