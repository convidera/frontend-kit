import useFormValidator from './form-validator/form-validator';
import useFormValidatorField from './form-validator/form-validator-field';
import type TFormValidatorRule from './form-validator/form-validator-rule';
import FormValidatorError from './form-validator/utils/form-validator-error';
import isAxiosError from './form-validator/utils/is-axios-error';
import isEmail from './form-validator/utils/is-email';
import isFormValidatorError from './form-validator/utils/is-form-validator-error';
import useRules from './form-validator/rules/use-rules';
import en from './form-validator/translation/en';
import de from './form-validator/translation/de';
import rawRules from './form-validator/rules';
import type {
  IFormValidatorTranslationSchema,
} from '@/form-validator/translation/schema';
import type {
  IAxiosError,
  IBackendError,
} from '@/form-validator/type/backend-error';

export {
  useFormValidator,
  useFormValidatorField,
  TFormValidatorRule,
  FormValidatorError,
  isAxiosError,
  isEmail,
  isFormValidatorError,
  useRules,
  rawRules,
  en,
  de,
  IFormValidatorTranslationSchema,
  IAxiosError,
  IBackendError,
};
