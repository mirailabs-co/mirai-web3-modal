import { html, LitElement, svg } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ModalController } from "../../../core/controllers/ModalController";
import React from "react";
import { createComponent } from "@lit-labs/react";
import styles from "./styles.css.js";
import QRCode from "qrcode";
import { until } from "lit/directives/until.js";
import isMobile from "is-mobile";

export class MiraiWeb3QrcodeView extends LitElement {
  public static styles = [styles];

  @state() private uri: string | null = null;
  @state() private redirectUrl: string | null = null;

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super();
    setTimeout(() => {
      const { uri, redirectUrl } = ModalController.state;

      this.uri = uri;
      this.redirectUrl = redirectUrl;
    }, 0);
  }

  async uriQrcode() {
    if (this.uri) {
      return html`<img class="img" src=${await QRCode.toDataURL(this.uri)} />`;
    }
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`${this.uri
      ? html`
          <div class="QR-code">
            ${isMobile()
              ? html`<mirai-web3-choose-wallet
                  uri=${this.uri}
                  redirectUrl=${this.redirectUrl}
                ></mirai-web3-choose-wallet>`
              : html`${until(this.uriQrcode(), "Loading...")}
                  <div class="navigation-bar">
                    <div class="title">Scan with Mirai</div>
                  </div>
                  <mirai-web3-choose-wallet
                    uri=${this.uri}
                    redirectUrl=${this.redirectUrl}
                  ></mirai-web3-choose-wallet>`}
          </div>
        `
      : html`<mirai-web3-spinner></mirai-web3-spinner>`}`;
  }
}

if (!customElements.get("mirai-web3-qrcode-view")) {
  customElement("mirai-web3-qrcode-view")(MiraiWeb3QrcodeView);
}

export default createComponent({
  react: React,
  elementClass: MiraiWeb3QrcodeView,
  tagName: "mirai-web3-qrcode-view",
});
