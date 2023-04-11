import {
  expect,
  test,
  describe,
} from 'vitest';
import {
  reactive,
} from 'vue';

import required from './required';

describe('required', () => {
  test('should return error message if value is empty', () => {
    const validate = required('error message');

    expect(validate('')).toBe('error message');
  });

  test('should not return error if the value is not empty string', () => {
    const validate = required('error message');

    expect(validate('0')).toBe(true);
  });

  test('should not return error if the value is not empty array', () => {
    const validate = required('error message');

    expect(validate([
      1,
    ])).toBe(true);
  });

  test('should return error if value is empty array', () => {
    const validate = required('error message');

    expect(validate([])).toBe('error message');
  });

  test('should not return error if the value is not empty object', () => {
    const validate = required('error message');

    expect(validate({
      test: 'test',
    })).toBe(true);
  });

  test('should return error if value is empty object', () => {
    const validate = required('error message');

    expect(validate({})).toBe('error message');
  });

  test('should return error if the value is bollean false', () => {
    const validate = required('error message');

    expect(validate(false)).toBe('error message');
  });

  test('should not return error if the value is bollean true', () => {
    const validate = required('error message');

    expect(validate(true)).toBe(true);
  });

  test('should not return error if the value is not empty vue proxy', () => {
    const validate = required('error message');
    const val = reactive({
      test: 'test',
    });

    expect(validate(val)).toBe(true);
  });

  test('should return error if the value is empty vue proxy', () => {
    const validate = required('error message');
    const val = reactive({});

    expect(validate(val)).toBe('error message');
  });
});
