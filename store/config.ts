interface Page { id: number; name: string; path: string; title: string; icon: string; }
interface ConfigState { title: string; author: string; pages: Page[]; version: string; }

const state = (): ConfigState => ({
    title: "Byloth's Website",
    author: "Matteo Bilotta",
    pages: [
        {
            id: 1,
            name: "index",
            path: "/",
            title: "Home",
            icon: "home"
        },
        {
            id: 2,
            name: "blog",
            path: "/blog",
            title: "BLog",
            icon: "library_books"
        },
        {
            id: 3,
            name: "about",
            path: "/about-me",
            title: "Chi sono",
            icon: "info"
        }
    ],
    version: "5.0.0α"
});

export { state };
