import type { Theme } from "vitepress";

import { createScrollAnimator } from "@byloth/vue-scroll-animator";

import ByloTheme from "@theme/ByloTheme.vue";

const themeConfig: Theme = {
    Layout: ByloTheme,
    NotFound: () => "Error 404 - Page not found!",

    enhanceApp: ({ app, router, siteData }) =>
    {
        const scrollAnimator = createScrollAnimator({ isSSR: import.meta.env.SSR });

        app.use(scrollAnimator);
    },
    setup: () => { /* ... */ }
};

export default themeConfig;
