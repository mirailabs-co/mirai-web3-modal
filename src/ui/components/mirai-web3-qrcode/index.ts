import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { QrCodeUtil } from "src/ui/utils/QrCodeUtil";

@customElement("mirai-web3-qrcode")
export class MiraiWeb3QrCode extends LitElement {
  // -- state & properties ------------------------------------------- //
  @property() public uri = "";

  // -- render ------------------------------------------------------- //
  protected render() {
    const src = QrCodeUtil.generate(this.uri, 320, 50);

    return html`
      <div>
        <img crossorigin="anonymous" src=${src} alt=${this.id} />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mirai-web3-qrcode": MiraiWeb3QrCode;
  }
}
