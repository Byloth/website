import { ActionContext } from "vuex";

import { IndexState, RootState } from "@/core/types";

const state = (): IndexState => ({ cookie: false });

const actions = {
    contact(context: ActionContext<RootState, RootState>): void { },
    share(context: ActionContext<RootState, RootState>): void { },

    print(context: ActionContext<RootState, RootState>): void
    {
        window.print();
    }
};

export { state, actions };
