import {
  expect,
  test,
  describe,
  vi,
} from 'vitest';

import useFormValidatorField from './form-validator-field';

describe('useFormValidatorField', () => {
  test('should return field', () => {
    const field = useFormValidatorField('test', 'value', []);

    expect(field.value.value).toBe('value');
    expect(field.fieldName.value).toBe('test');
    expect(field.checked.value).toBe(false);
    expect(field.changed.value).toBe(false);
    expect(field.valid.value).toBe(null);
    expect(field.validate).toBeInstanceOf(Function);
    expect(field.reset).toBeInstanceOf(Function);
    expect(field.addRules).toBeInstanceOf(Function);
    expect(field.errors.value).toStrictEqual([]);
  });

  test('should validate field', () => {
    const validate = vi.fn(() => true);
    const field = useFormValidatorField('test', 'value', [
      validate,
    ]);

    expect(field.validate()).toBe(true);
    expect(validate).toBeCalledTimes(1);
  });

  test('should validate field with error', () => {
    const validate = vi.fn(() => 'error');
    const field = useFormValidatorField('test', 'value', [
      validate,
    ]);

    expect(field.validate()).toBe(false);
    expect(validate).toBeCalledTimes(1);
  });

  test('should validate field with multiple errors', () => {
    const validate = vi.fn(() => 'error');
    const validate2 = vi.fn(() => 'error2');
    const field = useFormValidatorField('test', 'value', [
      validate,
      validate2,
    ]);

    expect(field.validate()).toBe(false);
    expect(validate).toBeCalledTimes(1);
    expect(validate2).toBeCalledTimes(1);
  });

  test('should validate field with multiple validators and return error', () => {
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => 'error message');
    const field = useFormValidatorField('test', 'value', [
      validate,
      validate2,
    ]);

    expect(field.validate()).toBe(false);
    expect(validate).toBeCalledTimes(1);
    expect(validate2).toBeCalledTimes(1);
  });

  test('should reset field', () => {
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => 'error message');
    const field = useFormValidatorField('test', 'value', [
      validate,
      validate2,
    ]);

    field.value.value = 'new value';
    field.validate();

    expect(field.value.value).toBe('new value');
    expect(field.changed.value).toBe(true);
    expect(field.valid.value).toBe(false);
    expect(field.errors.value).toStrictEqual([
      'error message',
    ]);

    expect(field.getRules().length).toBe(2);
    field.reset();
    expect(field.getRules().length).toBe(2);

    expect(field.value.value).toBe('value');
    expect(field.changed.value).toBe(false);
    expect(field.valid.value).toBe(null);
    expect(field.errors.value).toStrictEqual([]);
  });

  test('should add rules', () => {
    const validate = vi.fn(() => true);
    const validate2 = vi.fn(() => 'error message');
    const field = useFormValidatorField('test', 'value', [
      validate,
    ]);

    expect(field.validate()).toBe(true);

    field.addRules([
      validate2,
    ]);

    expect(field.validate()).toBe(false);
    expect(field.errors.value).toStrictEqual([
      'error message',
    ]);
    expect(validate).toBeCalledTimes(2);
    expect(validate2).toBeCalledTimes(1);
  });
});
