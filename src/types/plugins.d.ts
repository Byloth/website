//
// Based on: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
//

import Vue from "vue";
import ScrollAnimation, { AnimationOptions } from "@byloth/vue-scroll-animator/base/ScrollAnimation";

declare module "vue/types/vue"
{
    interface Vue
    {
        $scrollAnimate(options: AnimationOptions): ScrollAnimation;
    }
}
