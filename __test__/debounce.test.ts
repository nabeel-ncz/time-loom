import { debounce } from '../src/index';

jest.useFakeTimers();
describe('Debouncing Utility', () => {
  describe('debounce', () => {
    it('should debounce a function', () => {
      const callback = jest.fn();
      const debouncedFunction = debounce(callback, 100);

      debouncedFunction();
      jest.advanceTimersByTime(50);
      debouncedFunction();
      jest.advanceTimersByTime(50);
      // The callback should not have been called yet
      expect(callback).not.toHaveBeenCalled();
      // Advance timers to trigger the debounced function
      jest.advanceTimersByTime(100);
      // Now, the callback should be called once
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});