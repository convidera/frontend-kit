import {
  UnwrapRef, computed, ref,
} from 'vue';
import TFormValidatorRule from '@/form-validator/form-validator-rule';

export default function useFormValidatorField<T>(
  fieldName: string,
  defaultValue: T,
  rules: TFormValidatorRule<T>[],
) {
  const $value = ref(defaultValue);

  const $originalValue = ref(defaultValue);
  const $rules = ref(rules);

  const checked = ref(false);

  const errors = ref([] as string[]);

  const valid = computed(() => {
    if (!checked.value) {
      return null;
    }

    return errors.value.length === 0;
  });

  function validate() {
    errors.value = [];
    checked.value = false;

    $rules.value.forEach((rule) => {
      const error = rule($value.value);

      if (typeof error === 'string') {
        errors.value.push(error);
      }
    });

    checked.value = true;

    return valid.value;
  }

  const value = computed({
    get() {
      return $value.value;
    },
    set(val: UnwrapRef<T>) {
      $value.value = val;

      if (checked.value) {
        validate();
      }
    },
  });

  const changed = computed(() => {
    return $originalValue.value !== value.value;
  });

  function addRules(_rules: TFormValidatorRule<T>[]) {
    $rules.value.push(..._rules);
  }

  function reset() {
    checked.value = false;
    errors.value = [];
    value.value = $originalValue.value;
  }

  function getRules(): unknown[] {
    return $rules.value;
  }

  return {
    fieldName: computed(() => fieldName),
    checked: computed(() => checked.value),
    getRules,
    errors,
    valid,
    value,
    changed,
    validate,
    reset,
    addRules,
  };
}
