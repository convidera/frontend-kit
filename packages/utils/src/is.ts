// Source: https://github.com/vueuse/vueuse/blob/main/packages/shared/utils/is.ts

const toString = Object.prototype.toString;
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function';
export const isNumber = (val: any): val is number => typeof val === 'number';
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]';
