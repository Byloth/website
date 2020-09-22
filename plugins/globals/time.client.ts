import Time from "@/core/time";

const _global = global.window || global.globalThis;

declare global
{
    interface Window
    {
        Time: Time;
    }
}

_global.Time = Time;
