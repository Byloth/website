import Vue from "vue";
import { ActionContext } from "vuex";

import { localStorage } from "@/core/utils";
import { Dialog, IndexState, RootState } from "@/core/types";

const state = (): IndexState => ({ cookieAck: false });

const mutations = {
    acknowledgeCookie(state: IndexState, ack = true): void
    {
        state.cookieAck = ack;

        localStorage.set("cookie:ack", ack);
    }
};
const actions = {
    dialog(context: ActionContext<RootState, RootState>, dialog: Dialog): void { /*  */ },

    loaded({ state, commit, dispatch }: ActionContext<RootState, RootState>, { $ga, $route }: Vue): void
    {
        const enableTracking = () =>
        {
            $ga.enable();
            $ga.page($route.fullPath);
        };

        setTimeout(() =>
        {
            if (state.cookieAck)
            {
                enableTracking();
            }
            else
            {
                dispatch("dialog", {
                    type: "banner",
                    message: {
                        icon: "cookie-bite",
                        text: "Questo sito salva alcuni cookie all'interno del tuo browser" +
                            " per offrirti un'esperienza di utilizzo ottimale.\n" +
                            "Proseguendo con la navigazione all'interno del sito," +
                            " accetti il salvataggio e l'uso di queste informazioni."
                    },
                    actions: [
                        {
                            text: "Altre informazioni",
                            location: { name: "privacy" }
                        },
                        {
                            type: "primary",
                            text: "Ho capito",

                            callback: () =>
                            {
                                commit("acknowledgeCookie");
                                enableTracking();
                            }
                        }
                    ]
                });
            }
        }, 1500);
    },

    contact(context: ActionContext<RootState, RootState>): void { /* */ },
    share(context: ActionContext<RootState, RootState>): void { /* */ },

    print(context: ActionContext<RootState, RootState>): void
    {
        window.print();
    }
};

export { state, mutations, actions };
