import { html, LitElement, svg } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ModalController } from "../../../core/controllers/ModalController";
import React from "react";
import { createComponent } from "@lit-labs/react";
import styles from "./styles.css.js";
import QRCode from "qrcode";
import { until } from "lit/directives/until.js";

export class MiraiWeb3QrcodeView extends LitElement {
  public static styles = [styles];

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

  async uriQrcode() {
    if (this.uri) {
      return html`<img class="img" src=${await QRCode.toDataURL(this.uri)} />`;
    }
  }

  private svgTemplate() {
    return svg`                
        <svg
        @click="${this.onCloseModal}"
        class="icon"
        fill="none"
        height="28"
        view-box="0 0 28 28"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect class="rect" fill="black" fill-opacity="0.06" height="28" rx="14" width="28" />
        <path
          class="path"
          d="M9.34766 18.4277C9.76368 18.8379 10.4844 18.8203 10.8652 18.4395L14 15.3047L17.1231 18.4336C17.5273 18.8379 18.2246 18.8379 18.6348 18.4219C19.0508 18.0059 19.0566 17.3086 18.6523 16.9043L15.5293 13.7754L18.6523 10.6523C19.0566 10.248 19.0508 9.55078 18.6348 9.14063C18.2188 8.72461 17.5273 8.71875 17.1231 9.12305L14 12.2461L10.8652 9.11719C10.4844 8.73633 9.76368 8.71875 9.34766 9.13477C8.9375 9.55078 8.94922 10.2656 9.33594 10.6465L12.4707 13.7754L9.33594 16.9102C8.94922 17.291 8.93164 18.0117 9.34766 18.4277Z"
          fill="#3C4242"
          fill-opacity="0.8"
        />
        <rect class="rect" height="27" rx="13.5" stroke="black" stroke-opacity="0.04" width="27" x="0.5" y="0.5" />
      </svg>
    `;
  }

  private onCloseModal(event: PointerEvent) {
    if (event.target === event.currentTarget) {
      ModalController.close();
    }
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`${this.uri
      ? html`
          <div class="QR-code">
            <div class="bottom-bar">
              <p class="content">Don’t have the Mirai App?</p>
              <button class="button">
                <div class="label">GET</div>
              </button>
            </div>

            ${until(this.uriQrcode(), "Loading...")}
            <div class="navigation-bar">
              <div class="title">Scan with Mirai</div>

              ${this.svgTemplate()}
            </div>
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
