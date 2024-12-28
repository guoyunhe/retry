import { retry } from '.';

describe('retry', () => {
  describe('normal', async () => {
    expect(retry('Foo', 'Bar')).toBe('Foo Bar');
  });

  describe('lastName upper case', async () => {
    expect(retry('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
