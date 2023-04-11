const min = (minLength: number, message: string) => <T>(value: T) => {
  const val = String(value);
  if (val.length === 0) {
    return true;
  }

  if (val.trim().length >= minLength) {
    return true;
  }

  return message;
};

export default min;
