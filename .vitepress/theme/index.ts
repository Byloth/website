import { Theme as ThemeConfig } from "vitepress";

import ByloTheme from "./ByloTheme.vue";

const themeConfig: ThemeConfig = {
    Layout: ByloTheme,
    NotFound: () => "Error 404 - Page not found!",

    enhanceApp: ({ app, router, siteData }) => { /* ... */ },
    setup: () => { /* ... */ }
};

export default themeConfig;
