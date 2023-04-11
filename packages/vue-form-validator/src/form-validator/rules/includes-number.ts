const includesNumber = (message: string) => <T>(value: T) => {
  const val = String(value);
  if (val.length === 0) {
    return true;
  }

  return /\d/.test(String(value)) || message;
};

export default includesNumber;
