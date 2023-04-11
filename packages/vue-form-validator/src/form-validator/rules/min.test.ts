import {
  expect,
  test,
  describe,
} from 'vitest';

import min from './min';

describe('min', () => {
  test('should return true if value length is equal to specified', () => {
    const validate = min(2, 'error message');

    expect(validate('13')).toBe(true);
  });

  test('should return true if value length is greater to specified', () => {
    const validate = min(2, 'error message');

    expect(validate('134')).toBe(true);
  });

  test('should return error message if value length is less than specified', () => {
    const validate = min(2, 'error message');

    expect(validate('1')).toBe('error message');
  });

  test('should not return error if the value is empty', () => {
    const validate = min(2, 'error message');

    expect(validate('')).toBe(true);
  });
});
