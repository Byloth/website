/*
 * Based on: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 */

import Vue from "vue";
import VueAnimation, { VueAnimationOptions } from "@/plugins/animations/VueAnimation";

declare module "vue/types/vue"
{
    interface Vue
    {
        $animate(options: VueAnimationOptions): VueAnimation;
    }
}
