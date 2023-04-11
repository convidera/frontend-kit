import {
  isString,
  isBoolean,
} from '@convidera-team/utils';

const requiredIf = (fields: unknown[], message: string) => <T>(value: T) => {
  if (
    fields.some(
      (field) => {
        return (
          (isString(field) && field.trim().length > 0)
          || (isBoolean(field) && field)
        )
          && (
            (isString(value) && !(value.trim().length > 0))
            || (isBoolean(value) && !value)
          );
      },
    )
  ) {
    return message;
  }

  return true;
};

export default requiredIf;
