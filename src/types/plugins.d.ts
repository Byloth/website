/*
 * Based on: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 */

import Vue from "vue";

declare module "vue/types/vue"
{
    interface Vue
    {
        $myProperty: string;
    }
}
