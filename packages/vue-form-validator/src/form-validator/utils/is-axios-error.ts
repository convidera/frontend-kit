import {
  IAxiosError,
} from '@/form-validator/type/backend-error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosError = (error: any): error is IAxiosError => !!(error && error.isAxiosError);
export default isAxiosError;
