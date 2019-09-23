declare module "@material/base/component"
{
    import { MDCFoundation } from "@material/base/foundation";
    import { CustomEventListener, EventType, SpecificEventListener } from "@material/base/types";

    class MDCComponent<FoundationType extends MDCFoundation>
    {
        protected root_: Element;

        public constructor(root: Element, foundation?: FoundationType, ...args: Array<unknown>);

        public destroy(): void;

        public listen<K extends EventType>(evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): void;
        public listen<E extends Event>(evtType: string, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): void;

        public unlisten<K extends EventType>(evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): void;
        public unlisten<E extends Event>(evtType: string, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): void;

        public emit<T extends object>(evtType: string, evtData: T, shouldBubble?: boolean): void;
    }

    export { MDCComponent };
}