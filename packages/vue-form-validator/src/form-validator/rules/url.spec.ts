import {
  expect,
  test,
  describe,
} from 'vitest';

import url from './url';

describe('url', () => {
  test('should return true if value is url', () => {
    const validate = url('error message');

    expect(validate('http://example.com')).toBe(true);
  });

  test('should return error message if value is not url', () => {
    const validate = url('error message');

    expect(validate('fake')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = url('error message');

    expect(validate('')).toBe(true);
  });
});
