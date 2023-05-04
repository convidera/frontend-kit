import {
  expect,
  test,
  describe,
} from 'vitest';

import isValidUrl from './is-valid-url';

describe('isValidUrl', () => {
  test('isValidUrl', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://example')).toBe(true);
    expect(isValidUrl('http://.com')).toBe(true);
    expect(isValidUrl('ftp://example.com')).toBe(false);
    expect(isValidUrl('fake')).toBe(false);
    expect(isValidUrl('//fake')).toBe(false);
    expect(isValidUrl('//fake.com')).toBe(false);
  });
});
