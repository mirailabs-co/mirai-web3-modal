import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ModalController } from "../../../core/controllers/ModalController";

@customElement("mirai-web3-qrcode-view")
export class MiraiWeb3QrcodeView extends LitElement {
  @state() private uri? = "";

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super();
    setTimeout(() => {
      const { uri } = ModalController.state;
      this.uri = uri;
    }, 0);
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`${this.uri
      ? html`<mirai-web3-qrcode uri=${this.uri}></mirai-web3-qrcode>`
      : html`<mirai-web3-spinner></mirai-web3-spinner>`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mirai-web3-qrcode-view": MiraiWeb3QrcodeView;
  }
}
