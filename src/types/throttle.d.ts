export interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}

export interface ThrottleControl {
    cancel: () => void;
}
