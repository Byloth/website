import { ActionContext } from "vuex";

import { Action, Link } from "@/core/types";

interface IndexState
{
    title: string;
    author: string;
    actions: Action[];
    pages: Link[];
    version: string;
}

const state = (): IndexState => ({
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
            name: "download",
            path: "//github.com/Byloth/website",
            icon: "github",
            title: "Download"
        },
        {
            id: 3,
            name: "print",
            icon: "print",
            title: "Stampa"
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
    print(context: ActionContext<IndexState, IndexState>): void
    {
        window.print();
    },
    share(context: ActionContext<IndexState, IndexState>): void
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
