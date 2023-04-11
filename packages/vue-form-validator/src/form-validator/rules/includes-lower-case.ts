const includesLowerCase = (message: string) => <T>(value: T) => {
  const val = String(value);
  if (val.length === 0) {
    return true;
  }

  return /[a-zäöüß]/.test(String(value)) || message;
};

export default includesLowerCase;
