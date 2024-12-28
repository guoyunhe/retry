# @guoyunhe/retry

[![bundlephobia](https://badgen.net/bundlephobia/minzip/@guoyunhe/retry)](https://bundlephobia.com/package/@guoyunhe/retry)

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

## Comparsion

|                        | TS  | ESM | Bundle Size                                                                  | Performance |
| ---------------------- | --- | --- | ---------------------------------------------------------------------------- | ----------- |
| @guoyunhe/retry        | ✅  | ✅  | ![bundlephobia](https://badgen.net/bundlephobia/minzip/@guoyunhe/retry)      |             |
| [retry]                | ✅  | ❌  | ![bundlephobia](https://badgen.net/bundlephobia/minzip/retry)                |             |
| [p-retry]              | ✅  | ✅  | ![bundlephobia](https://badgen.net/bundlephobia/minzip/p-retry)              |             |
| [async-retry]          | ✅  | ❌  | ![bundlephobia](https://badgen.net/bundlephobia/minzip/async-retry)          |             |
| [retry-request]        | ✅  | ❌  | ![bundlephobia](https://badgen.net/bundlephobia/minzip/retry-request)        |             |
| [@humanwhocodes/retry] | ✅  | ✅  | ![bundlephobia](https://badgen.net/bundlephobia/minzip/@humanwhocodes/retry) |             |

[retry]: https://www.npmjs.com/package/retry
[p-retry]: https://www.npmjs.com/package/p-retry
[async-retry]: https://www.npmjs.com/package/async-retry
[retry-request]: https://www.npmjs.com/package/retry-request
[@humanwhocodes/retry]: https://www.npmjs.com/package/@humanwhocodes/retry
