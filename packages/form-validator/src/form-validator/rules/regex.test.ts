import {
  expect,
  test,
  describe,
} from 'vitest';

import regex from './regex';

describe('regex', () => {
  test('should return true if value is valid', () => {
    const validate = regex(/^[a-z]+$/, 'error message');

    expect(validate('value')).toBe(true);
  });

  test('should return error message if value is not valid', () => {
    const validate = regex(/^[a-z]+$/, 'error message');

    expect(validate('value2')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = regex(/^[a-z]+$/, 'error message');

    expect(validate('')).toBe(true);
  });
});
