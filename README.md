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

### Basic

The most common usage of retry is to retry failed HTTP requests (only GET usually).

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

### React

Large projects use `React.lazy()` to do code splitting and lazy loading. However, dynamic
`import()` may fail due to netowrk or server issues. Retry can reduce the chance of this
kind of failures.

```jsx static
import { lazy, Suspense } from 'react';
import { retry } from '@guoyunhe/retry';

const MyPage = lazy(() => retry(() => import('./my-page.js')));

render(
  <Suspense>
    <MyPage />
  </Suspense>,
);
```

## Comparison

| Package                | TS  | ESM | Promise | Bundle Size                                                                     |
| ---------------------- | --- | --- | ------- | ------------------------------------------------------------------------------- |
| @guoyunhe/retry        | ✅  | ✅  | ✅      | ![Bundle size](https://img.shields.io/bundlephobia/minzip/@guoyunhe/retry)      |
| [@humanwhocodes/retry] | ✅  | ✅  | ✅      | ![Bundle size](https://img.shields.io/bundlephobia/minzip/@humanwhocodes/retry) |
| [p-retry]              | ✅  | ✅  | ✅      | ![Bundle size](https://img.shields.io/bundlephobia/minzip/p-retry)              |
| [async-retry]          | ✅  | ❌  | ✅      | ![Bundle size](https://img.shields.io/bundlephobia/minzip/async-retry)          |
| [retry]                | ✅  | ❌  | ❌      | ![Bundle size](https://img.shields.io/bundlephobia/minzip/retry)                |

[@humanwhocodes/retry]: https://www.npmjs.com/package/@humanwhocodes/retry
[p-retry]: https://www.npmjs.com/package/p-retry
[async-retry]: https://www.npmjs.com/package/async-retry
[retry]: https://www.npmjs.com/package/retry
