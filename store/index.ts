import { ActionContext } from "vuex";

import { RootState } from "./types";

const state = (): RootState => ({
    title: "Byloth's Website",
    author: "Matteo Bilotta",
    actions: [
        {
            id: 1,
            name: "share",
            icon: "share",
            title: "Condividi"
        },
        {
            id: 2,
            name: "print",
            icon: "print",
            title: "Stampa"
        },
        {
            id: 3,
            name: "fork",
            path: "//github.com/Byloth/website",
            icon: "alt_route",
            title: "Forka"
        }
    ],
    pages: [
        {
            id: 1,
            name: "index",
            path: "/",
            icon: "home",
            title: "Home"
        },
        {
            id: 2,
            name: "blog",
            path: "/blog",
            icon: "library_books",
            title: "BLog"
        },
        {
            id: 3,
            name: "about",
            path: "/about-me",
            icon: "info",
            title: "Chi sono"
        }
    ],
    version: "5.0.0α"
});

const actions = {
    dialog(context: ActionContext<RootState, RootState>): void { },

    print(context: ActionContext<RootState, RootState>): void
    {
        window.print();
    },
    share(context: ActionContext<RootState, RootState>): void
    {
        if (navigator.share)
        {
            navigator.share({
                title: document.title,
                text: "Questo è un testo di prova.",
                url: window.location.href
            });
        }
    }
};

export { state, actions };
