<template>
    <aside id="drawer"
           class="mdc-drawer"
           :class="classes">
        <div class="mdc-drawer__header">
            <h3 class="mdc-drawer__title">
                Benvenuto
            </h3>
            <h6 class="mdc-drawer__subtitle">
                Visitatore anonimo
            </h6>
        </div>
        <div class="mdc-drawer__content">
            <nav-list>
                <router-link v-for="page in pages"
                             :key="page.id"
                             v-slot="{ href, route, navigate, isActive, isExactActive }"
                             :to="page">
                    <list-item :active="isExactActive"
                               :icon="page.icon"
                               :description="`Naviga a ${page.title}`"
                               :href="href"
                               @click="navigate">
                        {{ page.title }}
                    </list-item>
                </router-link>
                <hr class="mdc-list-divider" />
                <h6 class="mdc-list-group__subheader">
                    Link utili
                </h6>
                <list-item icon="mail"
                           description="Contattami"
                           @click.stop>
                    Contattami
                </list-item>
            </nav-list>
        </div>
        <div class="mdc-drawer__footer">
            <i>Vue</i>rsione corrente:
            <strong>{{ version }}</strong>
        </div>
    </aside>
</template>

<script lang="ts">
    import { cssClasses } from "@material/drawer";
    import { Component, Prop, Vue } from "vue-property-decorator";

    import config, { PageOptions } from "@/config";

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
        public pages: PageOptions[];
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

            this.pages = config.pages;
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
            font-size: smaller;
            padding: 12px 16px;
            text-align: right;
            text-shadow: 1px 1px 1px #FFFFFF;

            & > i
            {
                margin-right: 0.075em;
            }
            & > strong
            {
                font-size: larger;
            }
        }
    }
</style>
