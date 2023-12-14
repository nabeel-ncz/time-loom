import { debounce } from '../src/index';

jest.useFakeTimers();

describe('Debouncing Utility', () => {
  describe('debounce', () => {
    it('should debounce a function', () => {
      const callback = jest.fn();
      const debounced = debounce(callback, 100);

      debounced();
      jest.advanceTimersByTime(50);
      debounced();

      expect(callback).not.toHaveBeenCalled();
      jest.advanceTimersByTime(100);
      expect(callback).toHaveBeenCalledTimes(1);

      debounced.cancel();
      debounced.flush();

    });
  });
});
