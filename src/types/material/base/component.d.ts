declare module "@material/base/component"
{
    class MDCComponent<F>
    {
        protected root_: HTMLElement;

        public constructor(root: Element, foundation?: F, ...args: any[]);

        public destroy(): void;
        public emit(evtType: string, evtData: object, shouldBubble?: boolean): void;
    }

    export default MDCComponent;
}
