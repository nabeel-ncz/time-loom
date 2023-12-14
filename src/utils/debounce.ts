import { DebounceOptions, DebouncedFunction } from "../types/debounce";

export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number,
    options?: DebounceOptions
): DebouncedFunction<T> {
    let timeoutId: NodeJS.Timeout | null;
    let lastArgs: Parameters<T> | null;
    let lastCallTime: number;

    const leading = options?.leading ?? false;
    const trailing = options?.trailing ?? true;
    const maxWait = options?.maxWait;

    function invokeFunc() {
        if (lastArgs) {
            lastCallTime = Date.now();
            func(...lastArgs);
            lastArgs = null;
        }
    }

    const debounced: DebouncedFunction<T> = function (...args: Parameters<T>): ReturnType<T> | void {
        const currentTime = Date.now();

        if (!lastCallTime && !leading) {
            lastCallTime = currentTime;
        }

        const remainingDelay = delay - (currentTime - lastCallTime);

        if (remainingDelay <= 0 || remainingDelay > delay) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            lastCallTime = currentTime;
            return func(...args); // Ensure to return the result of func
        } else if (!timeoutId && trailing) {
            lastArgs = args;
            timeoutId = setTimeout(invokeFunc, remainingDelay);
        }
    };

    debounced.cancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
            lastArgs = null;
            lastCallTime = 0;
        }
    };

    debounced.flush = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            invokeFunc();
        }
    };

    if (maxWait !== undefined) {
        const maxWaitHandler = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                invokeFunc();
            }
        };

        setInterval(maxWaitHandler, maxWait);
    }

    return debounced;
}