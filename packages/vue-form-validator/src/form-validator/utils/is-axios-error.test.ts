import {
  expect,
  test,
  describe,
} from 'vitest';
import {
  AxiosResponse,
} from 'axios';

import isAxiosError from './is-axios-error';

const response: AxiosResponse = {
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
  status: 400,
  statusText: 'Bad Request',
  headers: {},
  config: {} as unknown as AxiosResponse['config'],
};

function axiosErrorPromise() {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    isAxiosError: true,
    response,
  });
}

function errorPromise() {
  const error = new Error();
  (error as unknown as { response: AxiosResponse }).response = response;
  return Promise.reject(error);
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
      expect(isAxiosError(error)).toBe(false);
    }
  });
});
