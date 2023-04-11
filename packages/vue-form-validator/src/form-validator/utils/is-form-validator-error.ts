import FormValidatorError from '@/form-validator/utils/form-validator-error';

const isFormValidatorError = (
  error: unknown,
): error is FormValidatorError => error instanceof FormValidatorError;

export default isFormValidatorError;
