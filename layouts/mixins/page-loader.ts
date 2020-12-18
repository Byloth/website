import Vue from "vue";

import { FADEOUT_TIMEOUT } from "@/core/constants";

export default Vue.extend({
    mounted: function(): void
    {
        if (process.browser)
        {
            const pageLoader = document.getElementById("page-loader");

            if (pageLoader !== null)
            {
                setTimeout((): void => this.fadeOutElement(pageLoader), FADEOUT_TIMEOUT);
            }
        }
    },

    methods: {
        fadeOutElement(element: HTMLElement): void
        {
            element.setAttribute("disabled", "");

            setTimeout((): void => element.remove(), FADEOUT_TIMEOUT);
        }
    }
});
