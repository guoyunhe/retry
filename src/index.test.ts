import { retry } from '.';

describe('retry', () => {
  it('default', async () => {
    const run = vitest.fn();
    try {
      await retry(async () => {
        run();
        throw new Error('test');
      });
    } catch {
      // skip
    }
    expect(run).toBeCalledTimes(6);
  });
});
