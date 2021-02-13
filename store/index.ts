import { ActionContext } from "vuex";

import { IndexState, RootState } from "@/core/types";

const state = (): IndexState => ({ cookieAck: false });

const mutations = {
    acknowledgeCookie(state: IndexState): void
    {
        state.cookieAck = true;
    }
};
const actions = {
    contact(context: ActionContext<RootState, RootState>): void { },
    share(context: ActionContext<RootState, RootState>): void { },

    print(context: ActionContext<RootState, RootState>): void
    {
        window.print();
    }
};

export { state, mutations, actions };
