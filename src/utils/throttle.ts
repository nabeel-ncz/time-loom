import { AnyFunction } from "../types/types";

export const throttle = (func: AnyFunction, interval: number): AnyFunction => {
    let lastExecuted = 0;
    return function (...args: any[]): void {
        const now = Date.now();
        if (now - lastExecuted >= interval) {
            func.apply(this, args);
            lastExecuted = now;
        }
    };
};