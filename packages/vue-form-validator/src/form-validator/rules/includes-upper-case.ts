const includesUpperCase = (message: string) => <T>(value: T) => {
  const val = String(value);
  if (val.length === 0) {
    return true;
  }
  return /[A-ZÄÖÜß]/.test(String(value)) || message;
};

export default includesUpperCase;
