import {
  expect,
  test,
  describe,
} from 'vitest';
import FormValidatorError from './form-validator-error';

describe('FormValidatorError', () => {
  test('should return default message', () => {
    const error = new FormValidatorError([
      'error1',
      'error2',
    ]);
    expect(error.message).toBe('Form is not valid');
  });

  test('should return custom message', () => {
    const error = new FormValidatorError([
      'error1',
      'error2',
    ], 'Custom message');
    expect(error.message).toBe('Custom message');
  });

  test('should return list of errors', () => {
    const error = new FormValidatorError([
      'error1',
      'error2',
    ]);
    expect(error.list).toEqual([
      'error1',
      'error2',
    ]);
  });
});
