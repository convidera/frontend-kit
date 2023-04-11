import {
  expect,
  test,
  describe,
} from 'vitest';

import includesNumber from './includes-number';

describe('includesNumber', () => {
  test('should return true if value includes number', () => {
    const validate = includesNumber('error message');

    expect(validate('fake1')).toBe(true);
  });

  test('should return error message if value does not include number', () => {
    const validate = includesNumber('error message');

    expect(validate('fake')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = includesNumber('error message');

    expect(validate('')).toBe(true);
  });
});
