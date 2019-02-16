declare module '@material/list/adapter'
{
    interface MDCListAdapter
    {
        getListItemCount(): number;
        getFocusedElementIndex(): number;

        setAttributeForElementIndex(index: number, attribute: string, value: string): void;
        removeAttributeForElementIndex(index: number, attribute: string): void;

        addClassForElementIndex(index: number, className: string): void;
        removeClassForElementIndex(index: number, className: string): void;

        focusItemAtIndex(index: number): void;

        setTabIndexForListItemChildren(listItemIndex: number, tabIndexValue: number): void;

        followHref(ele: Element): void;

        hasRadioAtIndex(index: number): boolean;
        hasCheckboxAtIndex(index: number): boolean;
        isCheckboxCheckedAtIndex(index: number): boolean;
        setCheckedCheckboxOrRadioAtIndex(index: number, isChecked: boolean): void;

        isFocusInsideList(): boolean;
    }

    export default MDCListAdapter;
}
