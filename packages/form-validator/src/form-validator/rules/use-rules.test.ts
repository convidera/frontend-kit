import {
  expect,
  test,
  describe,
} from 'vitest';

import useRules from './use-rules';

describe('useRules', () => {
  test('required should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.required();
    expect(validate(false)).toBe('formValidation.messages.required');
  });

  test('required should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.required('custom message');
    expect(validate(false)).toBe('custom message');
  });

  test('required should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.required();
    expect(validate('value')).toBe(true);
  });

  test('min should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.min(3);
    expect(validate('va')).toBe('formValidation.messages.min');
  });

  test('min should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.min(3, 'custom message');
    expect(validate('va')).toBe('custom message');
  });

  test('min should not return error if value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.min(3);
    expect(validate('value')).toBe(true);
  });

  test('max should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.max(3);
    expect(validate('value')).toBe('formValidation.messages.max');
  });

  test('max should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.max(3, 'custom message');
    expect(validate('value')).toBe('custom message');
  });

  test('max should not return error if value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.max(3);
    expect(validate('va')).toBe(true);
  });

  test('confirmed should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.confirmed('value');
    expect(validate('value2')).toBe('formValidation.messages.confirmed');
  });

  test('confirmed should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.confirmed('value', 'custom message');
    expect(validate('value2')).toBe('custom message');
  });

  test('confirmed should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.confirmed('value');
    expect(validate('value')).toBe(true);
  });

  test('includesNumber should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesNumber();
    expect(validate('value')).toBe('formValidation.messages.includesNumber');
  });

  test('includesNumber should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesNumber('custom message');
    expect(validate('value')).toBe('custom message');
  });

  test('includesNumber should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesNumber();
    expect(validate('value1')).toBe(true);
  });

  test('includesUpperCase should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesUpperCase();
    expect(validate('value')).toBe('formValidation.messages.includesUpperCase');
  });

  test('includesUpperCase should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesUpperCase('custom message');
    expect(validate('value')).toBe('custom message');
  });

  test('includesUpperCase should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesUpperCase();
    expect(validate('Value')).toBe(true);
  });

  test('includesLowerCase should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesLowerCase();
    expect(validate('VALUE')).toBe('formValidation.messages.includesLowerCase');
  });

  test('includesLowerCase should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesLowerCase('custom message');
    expect(validate('VALUE')).toBe('custom message');
  });

  test('includesLowerCase should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.includesLowerCase();
    expect(validate('value')).toBe(true);
  });

  test('regex should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.regex(/test/);
    expect(validate('value')).toBe('formValidation.messages.regex');
  });

  test('regex should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.regex(/test/, 'custom message');
    expect(validate('value')).toBe('custom message');
  });

  test('regex should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.regex(/test/);
    expect(validate('test')).toBe(true);
  });

  test('hexcode should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.hexCode();
    expect(validate('value')).toBe('formValidation.messages.hexCode');
  });

  test('hexcode should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.hexCode('custom message');
    expect(validate('value')).toBe('custom message');
  });

  test('hexcode should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.hexCode();
    expect(validate('#ffffff')).toBe(true);
  });

  test('email should return proper translation key', () => {
    const rules = useRules((key) => key);
    const validate = rules.email();
    expect(validate('value')).toBe('formValidation.messages.email');
  });

  test('email should return custom message if provided', () => {
    const rules = useRules((key) => key);
    const validate = rules.email('custom message');
    expect(validate('value')).toBe('custom message');
  });

  test('email should not return error if the value is valid', () => {
    const rules = useRules((key) => key);
    const validate = rules.email();
    expect(validate('fake@mail.com')).toBe(true);
  });
});
