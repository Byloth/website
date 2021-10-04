import { Context } from "@nuxt/types";

import { WorkboxEvent } from "@/core/types";

export default async ({ store }: Context): Promise<void> =>
{
    const workbox = await window.$workbox;

    if (workbox)
    {
        workbox.addEventListener("installed", (event) =>
        {
            const workboxEvent = event as WorkboxEvent;

            if (workboxEvent.isUpdate)
            {
                store.dispatch("dialog", {
                    type: "snackbar",
                    message: { text: "Sono disponibili dei nuovi contenuti!" },
                    actions: [{
                        text: "Ricarica",
                        callback: () => window.location.reload()
                    }]
                });
            }
        });
    }
};
