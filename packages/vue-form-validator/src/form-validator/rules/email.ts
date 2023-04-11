import isEmail from '@/form-validator/utils/is-email';

const email = (message: string) => <T>(value: T) => {
  const emailString = String(value);

  if (emailString.length === 0) {
    return true;
  }

  if (isEmail(emailString)) {
    return true;
  }

  return message;
};

export default email;
