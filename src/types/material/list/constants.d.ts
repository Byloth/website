declare module '@material/list/constants'
{
    import { MDCStrings } from '@material/base/foundation';

    // tslint:disable-next-line:class-name
    interface cssClasses extends MDCStrings
    {
        ROOT: 'mdc-list';
        LIST_ITEM_CLASS: 'mdc-list-item';
        LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected';
        LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated';
    }

    // tslint:disable-next-line:class-name
    interface strings extends MDCStrings
    {
        ARIA_ORIENTATION: 'aria-orientation';
        ARIA_ORIENTATION_HORIZONTAL: 'horizontal';
        ARIA_SELECTED: 'aria-selected';
        ARIA_CHECKED: 'aria-checked';
        ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]';
        ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]';
        ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]';
        RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)';
        CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)';
        CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)';
        CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: 'mdc-list-item button:not(:disabled), mdc-list-item a';
        FOCUSABLE_CHILD_ELEMENTS: `mdc-list-item button:not(:disabled),
        mdc-list-item a,
        mdc-list-item input[type="radio"]:not(:disabled),
        mdc-list-item input[type="checkbox"]:not(:disabled)`;
        ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)';
    }

    export { cssClasses, strings };
}
