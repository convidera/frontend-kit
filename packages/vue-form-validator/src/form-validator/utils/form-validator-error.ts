export default class FormValidatorError extends Error {
  constructor(
    public list: string[], // list of all errors
    message?: string,
  ) {
    super(message ?? 'Form is not valid');
  }
}
