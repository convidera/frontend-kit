import {
  IAxiosError,
} from '@/form-validator/type/backend-error';

const isAxiosError = (error: any): error is IAxiosError => error && error.isAxiosError;
export default isAxiosError;
