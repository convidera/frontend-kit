const regex = (regexp: RegExp, message: string) => <T>(value: T) => {
  const val = String(value);
  if (val.length === 0) {
    return true;
  }
  return regexp.test(String(value)) || message;
};

export default regex;
