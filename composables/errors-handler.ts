import { NetworkException } from "@byloth/core";
import { HandledException, HandlerBuilder } from "@byloth/exceptions";

export const useErrorsHandler = () =>
{
    const $vuert = useVuert();

    const _handler = new HandlerBuilder()
        .on(NetworkException, (exc) =>
        {
            $vuert.emit({
                type: "error",
                icon: "link-slash",
                title: "Network error!",
                message: `${exc.message} Please, try again later.`,
                dismissible: true
            });

            return new HandledException(exc);
        })
        .default((exc) =>
        {
            // eslint-disable-next-line no-console
            console.error(exc);

            $vuert.emit({
                type: "error",
                icon: "circle-xmark",
                title: "Oh, oh...",
                message: "Something went wrong; please, reload the page.",
                dismissible: true
            });
        });

    const errorHandler = (error: unknown) =>
    {
        const result = _handler.handle(error);
        if (result instanceof HandledException)
        {
            // eslint-disable-next-line no-console
            console.warn(result);
        }

        return false;
    };

    onMounted(() =>
    {
        onErrorCaptured(errorHandler);

        window.addEventListener("unhandledrejection", (evt: PromiseRejectionEvent) =>
        {
            evt.preventDefault();

            errorHandler(evt.reason);
        });
    });
};
