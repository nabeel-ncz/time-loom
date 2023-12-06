import { AnyFunction } from "./types";

export function debounce(func: AnyFunction, delay: number): AnyFunction {
    let timeoutId: NodeJS.Timeout;
    return function (...args: any[]): void {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}