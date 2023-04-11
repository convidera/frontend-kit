import {
  expect,
  test,
  describe,
} from 'vitest';

import includesUpperCase from './includes-upper-case';

describe('includesUpperCase', () => {
  test('should return true if value includes upper case', () => {
    const validate = includesUpperCase('error message');

    expect(validate('A')).toBe(true);
    expect(validate('aA')).toBe(true);
  });

  test('should return error message if value does not include upper case', () => {
    const validate = includesUpperCase('error message');

    expect(validate('a')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = includesUpperCase('error message');

    expect(validate('')).toBe(true);
  });

  test('should work with umlauts', () => {
    const validate = includesUpperCase('error message');

    expect(validate('Ä')).toBe(true);
    expect(validate('Ö')).toBe(true);
    expect(validate('Ü')).toBe(true);
    expect(validate('ß')).toBe(true);
  });
});
