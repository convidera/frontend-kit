import {
  expect,
  test,
  describe,
  vi,
} from 'vitest';

import isFormValidatorError from '@/form-validator/utils/is-form-validator-error';
import isAxiosError from '@/form-validator/utils/is-axios-error';

import useFormValidator from './form-validator';

describe('useFormValidator', () => {
  test('should return proper values', () => {
    const {
      errors,
      changed,
      addField,
      validate,
      setErrors,
      handleSubmit,
      reset,
      getRawFieldsValues,
    } = useFormValidator();

    expect(errors.value).toEqual([]);
    expect(changed.value).toEqual(false);
    expect(validate).toBeInstanceOf(Function);
    expect(addField).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
    expect(setErrors).toBeInstanceOf(Function);
    expect(getRawFieldsValues).toBeInstanceOf(Function);
    expect(handleSubmit).toBeInstanceOf(Function);
  });

  test('should add field', () => {
    const form = useFormValidator();

    expect(Object.keys(form.getRawFieldsValues()).length).toBe(0);
    form.addField('test', 'value', []);

    expect(Object.keys(form.getRawFieldsValues()).length).toBe(1);
    const [
      key,
      value,
    ] = Object.entries(form.getRawFieldsValues())[0];
    expect(key).toBe('test');
    expect(value).toBe('value');
  });

  test('should validate field', () => {
    const form = useFormValidator();
    const validate = vi.fn(() => true);

    form.addField('test', 'value', [
      validate,
    ]);

    expect(form.validate()).toBe(true);
    expect(validate).toBeCalledTimes(1);
  });

  test('should validate field with multiple validators', () => {
    const form = useFormValidator();
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => true);

    form.addField('test', 'value', [
      validate,
      validate2,
    ]);

    expect(form.validate()).toBe(true);
    expect(validate).toBeCalledTimes(1);
    expect(validate2).toBeCalledTimes(1);
  });

  test('should validate field with multiple validators and return false', () => {
    const form = useFormValidator();
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => 'error message');

    form.addField('test', 'value', [
      validate,
      validate2,
    ]);

    expect(form.validate()).toBe(false);
    expect(validate).toBeCalledTimes(1);
    expect(validate2).toBeCalledTimes(1);
  });

  test('should set errors', () => {
    const form = useFormValidator();

    form.addField('test', 'value');

    form.setErrors({
      test: [
        'error message',
      ],
    });

    expect(form.errors.value).toEqual([
      'error message',
    ]);
  });

  test('should reset form', () => {
    const form = useFormValidator();
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => 'error message');

    const field = form.addField('test', 'value', [
      validate,
      validate2,
    ]);

    field.value.value = 'new value';
    expect(form.changed.value).toBe(true);

    expect(form.validate()).toBe(false);

    form.reset();

    expect(form.errors.value).toEqual([]);
    expect(form.changed.value).toBe(false);
  });

  test('should get raw fields values', () => {
    const form = useFormValidator();
    form.addField('test', 'value');
    form.addField('test2', 'value2');
    expect(form.getRawFieldsValues()).toEqual({
      test: 'value',
      test2: 'value2',
    });
  });

  test('handle submit should return form validation error', async () => {
    const form = useFormValidator();
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => 'error message');

    form.addField('test', 'value', [
      validate,
      validate2,
    ]);

    const submit = vi.fn(() => Promise.resolve('success'));

    try {
      await form.handleSubmit(submit);
    } catch (error) {
      expect(isFormValidatorError(error)).toBe(true);
    }

    expect(submit).toBeCalledTimes(0);
  });

  test('handle submit should return axios error', async () => {
    const form = useFormValidator();
    const validate = vi.fn(() => true);

    form.addField('test', 'value', [
      validate,
    ]);

    // eslint-disable-next-line prefer-promise-reject-errors
    const submit = vi.fn(() => Promise.reject({
      isAxiosError: true,
    }));

    try {
      await form.handleSubmit(submit);
    } catch (error) {
      expect(isFormValidatorError(error)).toBe(false);
      expect(isAxiosError(error)).toBe(true);
    }

    expect(submit).toBeCalledTimes(1);
  });

  test('form should react to state change of its fields', async () => {
    const form = useFormValidator();

    const field = form.addField('test', 'value');

    expect(form.changed.value).toBe(false);

    field.value.value = 'new value';

    expect(form.changed.value).toBe(true);
  });
});
