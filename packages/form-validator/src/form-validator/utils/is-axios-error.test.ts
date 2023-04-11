import {
  expect,
  test,
  describe,
} from 'vitest';

import isAxiosError from './is-axios-error';

const response = {
  data: {
    message: 'API Errors',
    errors: {
      name: [
        'API error: Bad NAME!!!!',
      ],
      email: [
        'API error: Bed EMAIL!!!!',
      ],
    },
  },
};

function axiosErrorPromise() {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    isAxiosError: true,
    response,
  });
}

function errorPromise() {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    response,
  });
}

describe('isAxiosError', () => {
  test('isAxiosError', async () => {
    try {
      await axiosErrorPromise();
    } catch (error) {
      expect(isAxiosError(error)).toBe(true);
    }

    try {
      await errorPromise();
    } catch (error) {
      expect(isAxiosError(error)).toBe(undefined);
    }
  });
});
