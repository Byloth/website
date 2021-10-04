import Vue from "vue";

import { Context } from "@nuxt/types";

const BANNER_ERROR = {
    type: "banner",
    dismissable: true,
    message: {
        type: "danger",
        icon: "exclamation-circle",
        title: "Oh, no! 😱",
        text: "Un misterioso errore di natura sconosciuta ha appena interrotto l'Antico Rituale dell'Esecuzione del Sacro Codice JavaScript.\n" +
            "Come avrai intuito, qualunque cosa stessi facendo potrebbe aver smesso di funzionare; ricarica la pagina.\n"
    }
};

export default ({ store }: Context): void =>
{
    Vue.config.errorHandler = (error: Error): void =>
    {
        store.dispatch("dialog", BANNER_ERROR);

        // eslint-disable-next-line no-console
        console.error(error);
    };

    // eslint-disable-next-line node/handle-callback-err
    window.addEventListener("unhandledrejection", (error: PromiseRejectionEvent): void =>
    {
        store.dispatch("dialog", BANNER_ERROR);
    });
};
