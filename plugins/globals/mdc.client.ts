import { MDCTextField as _MDCTextField } from "@material/textfield";

const _global = global.window || global.globalThis;

declare global
{
    interface Window
    {
        // SMELLS: It's a false positive! 😒
        //
        // eslint-disable-next-line no-undef
        mdc: { textfield: { MDCTextField: typeof _MDCTextField } };
    }
}

_global.mdc = { textfield: { MDCTextField: _MDCTextField } };
