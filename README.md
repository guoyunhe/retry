# @guoyunhe/retry

a better retry function

## Installation

```bash
npm install --save @guoyunhe/retry
```

## Examples

```js
import { retry } from '@guoyunhe/retry';

// By default, it will retry max. 5 times on any error.
await retry(() => fetch('/foobar.json'));

// You can define a different max. retry limit, even Infinity.
await retry(() => fetch('/foobar.json'), { retries: 666 });

// You can also control whether to continue retrying by detect error type or message.
await retry(() => fetch('/foobar.json'), {
  shouldRetry: (e) => e.name === 'TypeError' && e.message === 'Failed to fetch',
});

// Retrying too often can crash systems. Use retryDelay to reduce retry frequence.
await retry(() => fetch('/foobar.json'), {
  retryDelay: (retryIndex) => 1000 * Math.pow(retryIndex, 2);
});
```
