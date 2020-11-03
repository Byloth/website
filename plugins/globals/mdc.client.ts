import { MDCTextField as _MDCTextField } from "@material/textfield";

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

window.mdc = { textfield: { MDCTextField: _MDCTextField } };
