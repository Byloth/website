import { RouteConfig } from "vue-router";

import Home from "./pages/Home.vue";

interface PageOptions extends RouteConfig
{
    id: number;
    title: string;
    icon?: string;
}

interface ConfigOptions
{
    title: string;
    pages: PageOptions[];
}

class Config implements ConfigOptions
{
    protected _options: ConfigOptions;

    public get title(): string
    {
        return this._options.title;
    }
    public get pages(): PageOptions[]
    {
        return this._options.pages;
    }

    constructor(options: ConfigOptions)
    {
        this._options = options;
    }
}

export { ConfigOptions, PageOptions };

export default new Config({
    title: "Byloth's Website",
    pages: [
        {
            id: 1,
            name: "home",
            path: "/",
            component: Home,
            title: "Home"
        },
        {
            id: 2,
            name: "about",
            path: "/about",
            component: () => import(/* webpackChunkName: "about" */ "@/pages/About.vue"),
            title: "About"
        }
    ]
});
