export interface DebounceControl {
    cancel: () => void;
    flush: () => void;
}

export interface DebounceOptions {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}

export interface DebouncedFunction<T extends (...args: any[]) => void> {
    (...args: Parameters<T>): ReturnType<T> | void;
    cancel: () => void;
    flush: () => void;
}
