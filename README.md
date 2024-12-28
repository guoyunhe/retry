# @guoyunhe/retry

![Version](https://img.shields.io/npm/v/@guoyunhe/retry)
![Downloads](https://img.shields.io/npm/dw/@guoyunhe/retry)
![Bundle size](https://img.shields.io/bundlephobia/minzip/@guoyunhe/retry)

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

// You can define a different max. retry limit.
await retry(() => fetch('/foobar.json'), { retries: 666 });

// You can also control whether to retry by checking error type or message.
await retry(() => fetch('/foobar.json'), {
  shouldRetry: (e) => e.name === 'TypeError' && e.message === 'Failed to fetch',
});

// Retrying too often can crash systems. Use retryDelay to reduce retry frequence.
await retry(() => fetch('/foobar.json'), {
  // retryIndex starts from 1, not 0
  retryDelay: (retryIndex) => 1000 * Math.pow(retryIndex, 2);
});
```

## Comparsion

| Package                | TS  | ESM | Promise | Bundle Size                                                                  |
| ---------------------- | --- | --- | ------- | ---------------------------------------------------------------------------- |
| @guoyunhe/retry        | ✅  | ✅  | ✅      | ![bundlephobia](https://badgen.net/bundlephobia/minzip/@guoyunhe/retry)      |
| [@humanwhocodes/retry] | ✅  | ✅  | ✅      | ![bundlephobia](https://badgen.net/bundlephobia/minzip/@humanwhocodes/retry) |
| [p-retry]              | ✅  | ✅  | ✅      | ![bundlephobia](https://badgen.net/bundlephobia/minzip/p-retry)              |
| [async-retry]          | ✅  | ❌  | ✅      | ![bundlephobia](https://badgen.net/bundlephobia/minzip/async-retry)          |
| [retry]                | ✅  | ❌  | ❌      | ![bundlephobia](https://badgen.net/bundlephobia/minzip/retry)                |

[@humanwhocodes/retry]: https://www.npmjs.com/package/@humanwhocodes/retry
[p-retry]: https://www.npmjs.com/package/p-retry
[async-retry]: https://www.npmjs.com/package/async-retry
[retry]: https://www.npmjs.com/package/retry
