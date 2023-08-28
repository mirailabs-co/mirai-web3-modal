import { LitElement } from "lit";
declare class MiraiWeb3Modal extends LitElement {
    open: boolean;
    active: boolean;
    constructor();
    disconnectedCallback(): void;
    private readonly unsubscribeModal?;
    private toggleBodyScroll;
    private onCloseModal;
    private onOpenModalEvent;
    private onCloseModalEvent;
    private addKeyboardEvents;
    private removeKeyboardEvents;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare const _default: import("@lit-labs/react").ReactWebComponent<MiraiWeb3Modal, {}>;
export default _default;
