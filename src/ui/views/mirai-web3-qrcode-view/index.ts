import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ModalController } from "../../../core/controllers/ModalController";
import React from "react";
import { createComponent } from "@lit-labs/react";

export class MiraiWeb3QrcodeView extends LitElement {
  @state() private uri: string | null = null;

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super();
    setTimeout(() => {
      const { uri } = ModalController.state;

      console.log("uri", uri);
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

if (!customElements.get("mirai-web3-qrcode-view")) {
  customElement("mirai-web3-qrcode-view")(MiraiWeb3QrcodeView);
}

export default createComponent({
  react: React,
  elementClass: MiraiWeb3QrcodeView,
  tagName: "mirai-web3-qrcode-view",
});
