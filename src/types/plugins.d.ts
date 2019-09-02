/*
 * Based on: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 */

import Vue from "vue";
import VueAnimation, { AnimationOptions } from "@/plugins/vue-scroll-animator/core/ScrollAnimation";

declare module "vue/types/vue"
{
    interface Vue
    {
        $scrollAnimate(options: AnimationOptions): VueAnimation;
    }
}
