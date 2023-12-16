# Time Loom

[![npm version](https://badge.fury.io/js/time-loom.svg)](https://www.npmjs.com/package/time-loom)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A utility for creating delayed functions using debouncing and throttling.

## Installation

```bash
npm install time-loom
```

## Usage

```javascript

import { debounce, throttle } from "time-loom";

// Example usage of debounce
const debouncedFunction = debounce(() => {
  // Your function logic here
}, 500);

// Example usage of throttle
const throttledFunction = throttle(() => {
  // Your function logic here
}, 1000);
```

### API

## debounce(fn, delay)

Creates a debounced function.

- `fn`: The function to debounce.
- `delay`: The delay in milliseconds.
- `options`: (Optional) Additional options for customization (e.g., { leading: true, trailing: false, maxWait: 1000 }).

### Debounce Function Options:

- `leading (boolean)`: Whether to execute the function on the leading edge of the timeout (default: false).
- `trailing (boolean)`: Whether to execute the function on the trailing edge of the timeout (default: true).
- `maxWait (number)`: The maximum time to wait before triggering the function (default: undefined).

### Debounce Function Methods:

- `cancel`: Cancels the scheduled execution of the debounced function.
- `flush`: Executes the debounced function immediately.

## throttle(fn, delay)

Creates a throttled function.

- `fn`: The function to throttle.
- `delay`: The minimum time between invocations in milliseconds.
- `options`: (Optional) Additional options for customization (e.g., { leading: false, trailing: true }).

### Throttle Function Options:

- `leading (boolean)`: Whether to execute the function on the leading edge of the timeout (default: true).
- `trailing (boolean)`: Whether to execute the function on the trailing edge of the timeout (default: true).

### Throttle Function Methods:

- `cancel`: Cancels the scheduled execution of the throttled function.

## Examples

- You can find more examples in the examples directory.

## Author

- **Muhammed Nabeel**
  - [GitHub Profile](https://github.com/nabeel-ncz)
  - [LinkedIn Profile](https://www.linkedin.com/in/muhammed-nabeel-b71279254/)

## License

This project is licensed under the [MIT License](./LICENSE.md) - see the [LICENSE](./LICENSE.md) file for details.
