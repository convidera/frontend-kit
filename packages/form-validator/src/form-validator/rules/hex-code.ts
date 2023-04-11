const hexCode = (message: string) => <T>(value: T) => {
  const val = String(value);
  if (val.length === 0) {
    return true;
  }

  return /^#[\da-f]{3,6}$/i.test(val) || message;
};

export default hexCode;
