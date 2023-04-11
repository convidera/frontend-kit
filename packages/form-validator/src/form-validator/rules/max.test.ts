import {
  expect,
  test,
  describe,
} from 'vitest';

import max from './max';

describe('max', () => {
  test('should return true if value is less than max', () => {
    const validate = max(5, 'error message');

    expect(validate('1234')).toBe(true);
  });

  test('should return true if value is equal to max', () => {
    const validate = max(5, 'error message');

    expect(validate('12345')).toBe(true);
  });

  test('should return error message if value is greater than max', () => {
    const validate = max(5, 'error message');

    expect(validate('123456')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = max(5, 'error message');

    expect(validate('')).toBe(true);
  });
});
