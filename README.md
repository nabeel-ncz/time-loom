# Time Loom

[![npm version](https://badge.fury.io/js/time-loom.svg)](https://www.npmjs.com/package/time-loom)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A utility for creating delayed functions using debouncing and throttling.

## Installation

```bash
npm install time-loom

## Usage

```javascript

const { debounce, throttle } = require('time-loom');

// Example usage of debounce
const debouncedFunction = debounce(() => {
  // Your function logic here
}, 500);

// Example usage of throttle
const throttledFunction = throttle(() => {
  // Your function logic here
}, 1000);

### API

## debounce(fn, delay)

Creates a debounced function.

- `fn`: The function to debounce.
- `delay`: The delay in milliseconds.

## throttle(fn, delay)

Creates a throttled function.

- `fn`: The function to throttle.
- `delay`: The minimum time between invocations in milliseconds.

## Examples

- You can find more examples in the examples directory.

## Author

- **Muhammed Nabeel**
  - GitHub: [Your GitHub Profile](https://github.com/nabeel-ncz)
  - LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/muhammed-nabeel-b71279254/)
