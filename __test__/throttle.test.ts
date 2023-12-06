import { throttle } from '../src/index';

jest.useFakeTimers();
describe('Throttling Utility', () => {
    describe('throttle', () => {
      it('should throttle a function', () => {
        const callback = jest.fn();
        const throttledFunction = throttle(callback, 100);
  
        throttledFunction();
        jest.advanceTimersByTime(50);
        throttledFunction();
        // Advance timers to trigger the throttled function
        jest.advanceTimersByTime(50);
        // Now, the callback should be called once
        expect(callback).toHaveBeenCalledTimes(1);
      });
    });
  });