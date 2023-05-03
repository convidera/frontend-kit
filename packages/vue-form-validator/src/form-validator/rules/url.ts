import isValidUrl from '@/form-validator/utils/is-valid-url';

const url = (message: string) => <T>(value: T) => {
  const urlString = String(value);

  if (urlString.length === 0) {
    return true;
  }

  if (isValidUrl(urlString)) {
    return true;
  }

  return message;
};

export default url;
