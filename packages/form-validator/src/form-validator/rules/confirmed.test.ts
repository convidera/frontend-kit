import {
  expect,
  test,
  describe,
} from 'vitest';

import confirmed from './confirmed';

describe('confirmed', () => {
  test('should return true if value is confirmed', () => {
    const validate = confirmed('value', 'error message');

    expect(validate('value')).toBe(true);
  });

  test('should return error message if value is not confirmed', () => {
    const validate = confirmed('value', 'error message');

    expect(validate('value2')).toBe('error message');
  });
});
