import {
  expect,
  test,
  describe,
} from 'vitest';

import email from './email';

describe('email', () => {
  test('should return true if value is email', () => {
    const validate = email('error message');

    expect(validate('fake@mail.com')).toBe(true);
  });

  test('should return error message if value is not email', () => {
    const validate = email('error message');

    expect(validate('fake')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = email('error message');

    expect(validate('')).toBe(true);
  });
});
