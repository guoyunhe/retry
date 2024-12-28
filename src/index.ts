import { sleep } from '@guoyunhe/sleep';

export interface RetryOptions {
  /**
   * How many times to retry.
   * @default 5
   */
  retries?: number;
  /**
   * Decide whether to retry or not by checking catched error.
   * @default () => true
   */
  shouldRetry?: (e: Error) => boolean;
  /**
   * Adding delay (in milliseconds) to avoid retrying too often and crashing the system.
   * @default 0
   */
  retryDelay?: number | ((nextRetryCount: number) => number);
}

export async function retry<T>(
  run: () => Promise<T>,
  { retries = 5, shouldRetry = () => true, retryDelay = 0 }: RetryOptions = {},
): Promise<T> {
  for (let i = 0; i <= retries; i++) {
    if (i > 0 && retryDelay) {
      await sleep(typeof retryDelay === 'function' ? retryDelay(i) : retryDelay);
    }
    try {
      return await run();
    } catch (e) {
      if (shouldRetry(e)) {
        continue;
      } else {
        throw e;
      }
    }
  }
}
