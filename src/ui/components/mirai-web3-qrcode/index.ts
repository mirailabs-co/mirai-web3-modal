import { html, LitElement, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { QrCodeUtil } from "../../../ui/utils/QrCodeUtil";
import { createComponent } from "@lit-labs/react";
import React from "react";

export class MiraiWeb3QrCode extends LitElement {
  // -- state & properties ------------------------------------------- //
  @property() public uri = "";

  // -- private ------------------------------------------------------ //
  private svgTemplate() {
    return svg`                
      <svg height=${320} width=${320} data-testid="component-qrcode-svg">
        ${QrCodeUtil.generate(this.uri, 320, 320 / 4)}
      </svg>
    `;
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    const src = QrCodeUtil.generate(this.uri, 320, 50);

    console.log("src", src);

    return html` <div>${this.svgTemplate()}</div> `;
  }
}

// eslint-disable-next-line no-undef
if (!customElements.get("mirai-web3-qrcode")) {
  customElement("mirai-web3-qrcode")(MiraiWeb3QrCode);
}

export default createComponent({
  react: React,
  elementClass: MiraiWeb3QrCode,
  tagName: "mirai-web3-qrcode",
});
