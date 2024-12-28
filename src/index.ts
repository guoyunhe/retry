export interface RetryOptions {
  lastNameUpperCase?: boolean;
}

export function retry(firstName: string, lastName: string, options?: RetryOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
