import Time from "@/core/time";

declare global
{
    interface Window
    {
        Time: Time;
    }
}

window.Time = Time;
