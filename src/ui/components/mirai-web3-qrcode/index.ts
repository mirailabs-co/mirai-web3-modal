import { html, LitElement, svg } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { QrCodeUtil } from "../../../ui/utils/QrCodeUtil";
import { createComponent } from "@lit-labs/react";
import React from "react";
import QRCode from "qrcode";
import { until } from "lit/directives/until.js";

export class MiraiWeb3QrCode extends LitElement {
  // -- state & properties ------------------------------------------- //
  @property() public uri = "";

  @state() private qrcodeData = "";

  // -- private ------------------------------------------------------ //
  private async svgTemplate() {
    console.log(await QRCode.toDataURL(this.uri));

    return svg`                
      <svg height=${320} width=${320} data-testid="component-qrcode-svg">
        ${QrCodeUtil.generate(this.uri, 320, 320 / 4)}
      </svg>
    `;
  }

  async uriQrcode() {
    return html`<img src=${await QRCode.toDataURL(this.uri)} />`;
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`${until(this.uriQrcode(), "Loading...")}`;
  }
}

if (!customElements.get("mirai-web3-qrcode")) {
  customElement("mirai-web3-qrcode")(MiraiWeb3QrCode);
}

export default createComponent({
  react: React,
  elementClass: MiraiWeb3QrCode,
  tagName: "mirai-web3-qrcode",
});
