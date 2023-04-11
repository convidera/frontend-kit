import {
  expect,
  test,
  describe,
} from 'vitest';

import hexCode from './hex-code';

describe('hexCode', () => {
  test('should return true if value is hex code', () => {
    const validate = hexCode('error message');

    expect(validate('#fff')).toBe(true);
    expect(validate('#ffffff')).toBe(true);
  });

  test('should return error message if value is not hex code', () => {
    const validate = hexCode('error message');

    expect(validate('fake')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = hexCode('error message');

    expect(validate('')).toBe(true);
  });
});
