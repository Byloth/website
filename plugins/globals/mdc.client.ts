import { MDCTextField as _MDCTextField } from "@material/textfield";

declare global
{
    interface Window
    {
        mdc: { textfield: { MDCTextField: typeof _MDCTextField } };
    }
}

window.mdc = { textfield: { MDCTextField: _MDCTextField } };
