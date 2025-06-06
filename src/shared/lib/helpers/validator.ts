export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isObject = (value: unknown): value is object => !!value && typeof value === 'object';
