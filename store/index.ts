interface Action
{
    id: number;
    name: string;
    icon: string;
    title: string;

    path?: string;
}
interface Link extends Action
{
    path: string;
}
interface ConfigState
{
    title: string;
    author: string;
    actions: Action[];
    pages: Link[];
    version: string;
}

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
            name: "download",
            path: "//github.com/Byloth/website",
            icon: "github",
            title: "Download"
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

export { state };
