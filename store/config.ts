import { ConfigState } from "@/core/types";

const state = (): ConfigState => ({
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
        // {
        //     id: 3,
        //     name: "events",
        //     path: "/events",
        //     icon: "event",
        //     title: "Eventi"
        // },
        {
            id: 4,
            name: "about",
            path: "/about",
            icon: "info",
            title: "Chi sono"
        }
    ],
    version: "5.0.7"
});

export { state };
