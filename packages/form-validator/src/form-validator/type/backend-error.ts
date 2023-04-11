import {
  AxiosError,
} from 'axios';

export interface IBackendError {
  errors?: Record<string, string[]>,
  message?: string,
  exception?: string,
}

export interface IAxiosError extends AxiosError<IBackendError> {}
