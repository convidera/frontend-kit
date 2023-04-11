import confirmed from '@/form-validator/rules/confirmed';
import email from '@/form-validator/rules/email';
import max from '@/form-validator/rules/max';
import min from '@/form-validator/rules/min';
import required from '@/form-validator/rules/required';
import hexCode from '@/form-validator/rules/hex-code';
import requiredIf from '@/form-validator/rules/required-if';

const validator = {
  required,
  email,
  min,
  max,
  confirmed,
  hexCode,
  requiredIf,
};

export default validator;
