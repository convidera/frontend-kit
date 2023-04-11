import {
  expect,
  test,
  describe,
} from 'vitest';

import requiredIf from './required-if';

describe('requiredIf', () => {
  test('should return error if conditional field is provided', () => {
    const validate = requiredIf([
      'test',
    ], 'error message');

    const validate2 = requiredIf([
      true,
    ], 'error message');

    expect(validate('')).toBe('error message');
    expect(validate(false)).toBe('error message');
    expect(validate2('')).toBe('error message');
    expect(validate2(false)).toBe('error message');
  });

  test('should return true if conditional field is not provided', () => {
    const validate = requiredIf([
      '',
    ], 'error message');

    const validate2 = requiredIf([
      false,
    ], 'error message');

    expect(validate('')).toBe(true);
    expect(validate(true)).toBe(true);
    expect(validate(false)).toBe(true);
    expect(validate('value')).toBe(true);

    expect(validate2('')).toBe(true);
    expect(validate2(true)).toBe(true);
    expect(validate2(false)).toBe(true);
    expect(validate2('value')).toBe(true);
  });

  test('should return true if conditional field is provided and value is not empty', () => {
    const validate = requiredIf([
      'test',
    ], 'error message');

    const validate2 = requiredIf([
      true,
    ], 'error message');

    expect(validate('value')).toBe(true);
    expect(validate2('value')).toBe(true);
    expect(validate(true)).toBe(true);
    expect(validate2(true)).toBe(true);
  });
});
