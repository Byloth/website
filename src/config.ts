import { RouteConfig } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

// SMELLS: interface PageOptions extends RouteConfig
type PageOptions = RouteConfig &
{
    id: number;
    title: string;
    icon?: string;
    topLevel: boolean;
}

interface ConfigOptions
{
    title: string;
    author: string;
    pages: PageOptions[];
    version: string;
}

export { ConfigOptions, PageOptions };

class Config implements ConfigOptions
{
    protected _options: ConfigOptions;

    public get title(): string { return this._options.title; }
    public get author(): string { return this._options.author; }
    public get pages(): PageOptions[] { return this._options.pages; }
    public get version(): string { return this._options.version; }

    constructor(options: ConfigOptions)
    {
        this._options = options;
    }
}

export default new Config({
    title: "Byloth's Website",
    author: "Matteo Bilotta",
    pages: [
        {
            id: 0x1,
            name: "home",
            path: "/",
            component: HomePage,
            title: "Home",
            icon: "home",
            topLevel: true
        },
        {
            id: 0x2,
            name: "blog",
            path: "/blog",
            component: () => import(/* webpackChunkName: "blog-page" */ "@/pages/BlogPage.vue"),
            title: "BLog",
            icon: "library_books",
            topLevel: true
        },
        {
            id: 0x20,
            name: "article",
            path: "/blog/:slug",
            props: true,
            component: () => import(/* webpackChunkName: "article-page" */ "@/pages/ArticlePage.vue"),
            title: "Articolo",
            topLevel: false
        },
        {
            id: 0x3,
            name: "about",
            path: "/about-me",
            component: () => import(/* webpackChunkName: "about-page" */ "@/pages/AboutPage.vue"),
            title: "Chi sono",
            icon: "info",
            topLevel: true
        }
    ],
    version: "5.0.0α"
});
