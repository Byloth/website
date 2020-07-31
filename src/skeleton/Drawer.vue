<template>
    <aside id="drawer"
           class="mdc-drawer"
           :class="classes">
        <div class="mdc-drawer__header">
            <h3 class="mdc-drawer__title">
                Mail
            </h3>
            <h6 class="mdc-drawer__subtitle">
                email@material.io
            </h6>
        </div>
        <div class="mdc-drawer__content">
            <nav-list>
                <slot></slot>
                <hr class="mdc-list-divider" />
                <h6 class="mdc-list-group__subheader">
                    Labels
                </h6>
                <list-item>
                    Family
                </list-item>
                <list-item>
                    Friends
                </list-item>
                <list-item>
                    Work
                </list-item>
            </nav-list>
        </div>
        <div class="mdc-drawer__footer">
            <small>
                <i>Vue</i>rsione corrente:
            </small>
            <strong>{{ version }}</strong>
        </div>
    </aside>
</template>

<script lang="ts">
    import { cssClasses } from "@material/drawer";
    import { Component, Prop, Vue } from "vue-property-decorator";

    import config from "@/config";

    import ListItem from "@/components/ListItem.vue";
    import NavigationList from "@/components/NavigationList.vue";

    @Component({
        name: "Drawer",
        components: {
            "list-item": ListItem,
            "nav-list": NavigationList
        }
    })
    export default class Drawer extends Vue
    {
        public version: string;

        @Prop({
            default: false,
            type: Boolean
        })
        public modal!: boolean;

        @Prop({
            default: false,
            type: Boolean
        })
        public value!: boolean;

        protected get classes(): Record<string, boolean>
        {
            return {
                "mdc-drawer--modal": this.modal,
                [cssClasses.OPEN]: this.value
            };
        }

        public constructor()
        {
            super();

            this.version = config.version;
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    #drawer
    {
        margin-left: -$mdc-drawer-width;
        position: fixed;
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: box-shadow, margin;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;

        &.mdc-drawer--modal
        {
            box-shadow: none;
            display: flex;

            &.mdc-drawer--open
            {
                box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
                            0px 16px 24px 2px rgba(0, 0, 0, 0.14),
                            0px 6px 30px 5px rgba(0, 0, 0, 0.12);
            }
        }

        &.mdc-drawer--open
        {
            margin-left: 0px;
            transition-duration: $mdc-drawer-animation-exit;
        }

        & > .mdc-drawer__content
        {
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        & > .mdc-drawer__footer
        {
            background-color: #F1F1F1;
            color: #5F5F5F;
            font-size: 87.5%;
            padding: 16px;
            text-align: right;
            text-shadow: 1px 1px 1px #FFFFFF;

            & > small > i
            {
                margin-right: 0.075em;
            }
        }
    }
</style>
