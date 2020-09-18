export interface PageOptions
{
    id: number;
    name: string;
    path: string;
    title: string;
    icon?: string;
}

export interface ConfigState
{
    title: string;
    author: string;
    pages: PageOptions[];
    version: string;
}

export const state = (): ConfigState => ({
    title: "Byloth's Website",
    author: "Matteo Bilotta",
    pages: [
        {
            id: 0x1,
            name: "index",
            path: "/",
            title: "Home",
            icon: "home"
        },
        {
            id: 0x2,
            name: "blog",
            path: "/blog",
            title: "BLog",
            icon: "library_books"
        },
        {
            id: 0x3,
            name: "about",
            path: "/about-me",
            title: "Chi sono",
            icon: "info"
        }
    ],
    version: "5.0.0α"
});
