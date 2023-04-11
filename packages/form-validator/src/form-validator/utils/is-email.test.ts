import {
  expect,
  test,
  describe,
} from 'vitest';

import isEmail from './is-email';

describe('isEmail', () => {
  test('isEmail', () => {
    expect(isEmail('fake@mail.com')).toBe(true);
    expect(isEmail('fake@mail')).toBe(false);
    expect(isEmail('fake')).toBe(false);
    expect(isEmail('fake@')).toBe(false);
    expect(isEmail('fake@mail.')).toBe(false);
  });
});
