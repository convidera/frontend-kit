import {
  expect,
  test,
  describe,
} from 'vitest';

import isFormValidatorError from './is-form-validator-error';
import FormValidatorError from './form-validator-error';

describe('isFormValidatorError', () => {
  test('should properly detect error type', () => {
    const error = new FormValidatorError([
      'error1',
      'error2',
    ]);
    expect(isFormValidatorError(error)).toBe(true);

    const error2 = new Error('error');
    expect(isFormValidatorError(error2)).toBe(false);
  });
});
