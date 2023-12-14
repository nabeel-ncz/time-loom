type DebounceControl = {
    cancel: () => void;
    flush: () => void;
};

type DebounceOptions = {
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
};

export declare function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number,
    options?: DebounceOptions
): T & DebounceControl;


type ThrottleControl = {
    cancel: () => void;
};

type ThrottleOptions = {
    leading?: boolean;
    trailing?: boolean;
};

export declare function throttle<T extends (...args: any[]) => void>(
    func: T,
    wait: number,
    options?: ThrottleOptions
): T & ThrottleControl;
