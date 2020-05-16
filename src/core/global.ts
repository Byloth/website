import Time from "./time";

const _global = window || globalThis;

declare global
{
    interface Window
    {
        Time: Time;
    }
}

_global.Time = Time;
