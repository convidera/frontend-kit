import {
  computed,
} from 'vue';
import useFormValidatorField from '@/form-validator/form-validator-field';
import TFormValidatorRule from '@/form-validator/form-validator-rule';
import FormValidatorError from '@/form-validator/utils/form-validator-error';
import isAxiosError from '@/form-validator/utils/is-axios-error';

/**
 * util for form validation:
 *
 * ```typescript
 * const form = useFormValidator();
 * const name = form.addField(
 *   'name',
 *   '',
 *   [
 *     rules.required(),
 *   ],
 * );
 * ```
 */
export default function useFormValidator() {
  const fields = [] as ReturnType<typeof useFormValidatorField>[];

  const errors = computed(() => {
    const workErrors: string[] = [];

    fields.forEach((field) => {
      workErrors.push(...field.errors.value);
    });

    return workErrors;
  });

  /**
   * was form changed or not
   */
  const changed = computed(() => fields.some((field) => field.changed.value));

  /**
   * add new inputField
   * @param fieldName should coincide with variable from API
   * @param value default value
   * @param rules list of validation rules
   */
  function addField<T>(
    fieldName: string,
    value: T,
    rules: TFormValidatorRule<T>[] = [],
  ) {
    const field = useFormValidatorField(fieldName, value, rules);

    fields.push(field);

    return field;
  }

  /**
   * run validation for all inputs
   */
  function validate() {
    let valid = true;

    fields.forEach((field) => {
      if (!field.validate()) {
        valid = false;
      }
    });

    return valid;
  }

  /**
   * add errors to errorList, for example catching errors from API
   * @param errorList example: {name: ['error 1', 'error 2']}
   */
  function setErrors(errorList: Record<string, string[]>) {
    if (Object.values(errors).length === 0) {
      return;
    }

    fields.forEach((field) => {
      if (field.fieldName.value in errorList) {
        field.errors.value.push(...errorList[field.fieldName.value]);
      }
    });
  }

  /**
   * handler for submit function, catch errors and add them to errorList
   * @param submitPromise must be as Promise
   */
  async function handleSubmit<M>(submitPromise: () => Promise<M>): Promise<M> {
    if (!validate()) {
      throw new FormValidatorError(errors.value);
    }

    try {
      return await submitPromise();
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
        }
      }

      throw error;
    }
  }

  function reset() {
    fields.forEach((field) => {
      field.reset();
    });
  }

  function getRawFieldsValues() {
    const rawFields: Record<string, unknown> = {};
    fields.forEach((field) => {
      rawFields[field.fieldName.value] = field.value.value;
    });
    return rawFields;
  }

  return {
    errors,
    changed,
    addField,
    validate,
    setErrors,
    handleSubmit,
    reset,
    getRawFieldsValues,
  };
}
