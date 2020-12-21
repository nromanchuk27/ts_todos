// validation
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(input: Validatable) {
  let isValid = true;
  const {
    required = false,
    value,
    minLength = 0,
    maxLength = 1000,
    min = 0,
    max = 10,
  } = input;

  const isString = typeof value === "string";
  const isNumber = typeof value === "number";
  const inputValue = value.toString().trim();

  if (required) {
    isValid = isValid && inputValue.length !== 0;
  }
  if (minLength && isString) {
    isValid = isValid && inputValue.length >= minLength;
  }
  if (maxLength && isString) {
    isValid = isValid && inputValue.length <= maxLength;
  }
  if (min != null && isNumber) {
    // @ts-ignore: Valid code error
    isValid = isValid && inputValue > min;
  }
  if (max != null && isNumber) {
    // @ts-ignore: Valid code error
    isValid = isValid && inputValue <= max;
  }
  return isValid;
}
