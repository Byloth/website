import { MDCTextField } from "@material/textfield";

import Time from "@/core/time";

declare global
{
    interface Window
    {
        $workbox: Promise<ServiceWorker>;

        mdc: { textfield: { MDCTextField: typeof MDCTextField } };

        Time: Time;
    }
}
