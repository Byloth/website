import Vue from "vue";

export const FADEOUT_TIMEOUT = 200;

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
