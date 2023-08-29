import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { createComponent } from "@lit-labs/react";
import React from "react";

export class MiraiWeb3Spinner extends LitElement {
  //   public static styles = [styles];

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`
      <svg viewBox="0 0 50 50" width="24" height="24">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="4"
          stroke="#fff"
        />
      </svg>
    `;
  }
}

// eslint-disable-next-line no-undef
if (!customElements.get("mirai-web3-spinner")) {
  customElement("mirai-web3-spinner")(MiraiWeb3Spinner);
}

export default createComponent({
  react: React,
  elementClass: MiraiWeb3Spinner,
  tagName: "mirai-web3-spinner",
});
