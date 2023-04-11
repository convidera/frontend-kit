import {
  isBoolean,
  isString,
  isObject,
} from '@vueuse/core';
import {
  isProxy,
} from 'vue';

const required = (message: string) => <T>(value: T) => {
  if (isString(value) && value.trim().length > 0) { // it's STRING
    return true;
  }

  if (isProxy(value) && isObject(value) && Object.keys(value).length > 0) { // it's PROXY
    return true;
  }

  if (Array.isArray(value) && value.length > 0) { // it's ARRAY
    return true;
  }

  if (typeof value === 'object' && value !== null && Object.keys(value).length > 0) { // it's OBJECT
    return true;
  }

  if (isBoolean(value) && value) { // it's BOOLEAN
    return true;
  }

  return message;
};

export default required;
