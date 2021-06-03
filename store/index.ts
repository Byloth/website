import { ActionContext } from "vuex";

import { localStorage } from "@/core/utils";
import { IndexState, RootState } from "@/core/types";

const state = (): IndexState => ({ cookieAck: false });

const mutations = {
    acknowledgeCookie(state: IndexState, ack = true): void
    {
        state.cookieAck = ack;

        localStorage.set("cookie:ack", ack);
    }
};
const actions = {
    contact(context: ActionContext<RootState, RootState>): void { /* */ },
    share(context: ActionContext<RootState, RootState>): void { /* */ },

    print(context: ActionContext<RootState, RootState>): void
    {
        window.print();
    }
};

export { state, mutations, actions };
