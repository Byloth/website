import { Context } from "@nuxt/types";

import { localStorage } from "@/core/utils";

export default ({ store }: Context) =>
{
    if (localStorage.get("cookie:ack"))
    {
        store.commit("acknowledgeCookie");
    }
};
