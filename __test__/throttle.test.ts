import { throttle } from '../src/index';

jest.useFakeTimers();

describe('Throttling Utility', () => {
  describe('throttle', () => {
    it('should throttle a function', () => {
      const callback = jest.fn();
      const throttled = throttle(callback, 100);

      throttled();
      jest.advanceTimersByTime(50);
      throttled();
 
      expect(callback).toHaveBeenCalledTimes(1);

      throttled.cancel();

    });
  });
});
