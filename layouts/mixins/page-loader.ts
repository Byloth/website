import Vue from "vue";

import { FADEOUT_TIMEOUT } from "@/core/constants";

export default Vue.extend({
    mounted: function()
    {
        if (process.browser)
        {
            const pageLoader = document.getElementById("page-loader");

            if (pageLoader !== null)
            {
                setTimeout(() => this.fadeOutElement(pageLoader), FADEOUT_TIMEOUT);
            }
        }
    },

    methods: {
        fadeOutElement(element: HTMLElement): void
        {
            element.setAttribute("disabled", "");

            setTimeout(() => element.remove(), FADEOUT_TIMEOUT);
        }
    }
});
