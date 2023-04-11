const confirmed = (confirmValue: unknown, message: string) => <T>(value: T) => {
  if (value === confirmValue) {
    return true;
  }

  return message;
};

export default confirmed;
