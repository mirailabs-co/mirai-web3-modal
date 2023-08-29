import { ModalController } from "../../../core/controllers/ModalController";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import React, { PointerEvent } from "react";
import { createComponent } from "@lit-labs/react";
import styles from "./styles.css.js";
import { UiUtil } from "../../utils/UiUtil";
import { animate } from "motion";
import { classMap } from "lit/directives/class-map.js";

// eslint-disable-next-line no-undef
type Target = HTMLElement | undefined;

// @customElement("mirai-web3-modal")
class MiraiWeb3Modal extends LitElement {
  public static styles = [styles];

  // -- state & properties ------------------------------------------- //

  @state() open = false;
  @state() active = false;

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super();

    // Subscribe to modal state
    this.unsubscribeModal = ModalController.subscribe((modalState) => {
      console.log("modalState.open", modalState.open);
      if (modalState.open) {
        this.onOpenModalEvent();
      } else {
        this.onCloseModalEvent();
      }
    });
  }

  public disconnectedCallback() {
    this.unsubscribeModal?.();
  }

  // -- private ------------------------------------------------------ //
  private readonly unsubscribeModal?: () => void = undefined;

  private toggleBodyScroll(enabled: boolean) {
    const body = document.querySelector("body");
    if (body) {
      if (enabled) {
        const wcmStyles = document.getElementById("wcm-styles");
        wcmStyles?.remove();
      } else {
        document.head.insertAdjacentHTML(
          "beforeend",
          `<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>`
        );
      }
    }
  }

  private onCloseModal(event: PointerEvent) {
    if (event.target === event.currentTarget) {
      ModalController.close();
    }
  }

  private onOpenModalEvent() {
    this.toggleBodyScroll(false);
    this.addKeyboardEvents();
    this.open = true;
    setTimeout(async () => {
      const animation = UiUtil.isMobileAnimation()
        ? { y: ["50vh", "0vh"] }
        : { scale: [0.98, 1] };
      const delay = 0.1;
      const duration = 0.2;

      await Promise.all([
        animate(this.overlayEl, { opacity: [0, 1] }, { delay, duration })
          .finished,
        animate(this.containerEl, animation, { delay, duration }).finished,
      ]);

      this.active = true;
    }, 0);
  }

  private async onCloseModalEvent() {
    this.toggleBodyScroll(true);
    this.removeKeyboardEvents();
    this.active = false;
    this.open = false;
  }

  private addKeyboardEvents() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        ModalController.close();
      } else if (event.key === "Tab") {
        if (!(event.target as Target)?.tagName.includes("mirai-web3-")) {
          this.containerEl.focus();
        }
      }
    });
    this.containerEl.focus();
  }

  private get overlayEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-overlay");
  }

  private get containerEl() {
    return UiUtil.getShadowRootElement(this, ".wcm-container");
  }

  private removeKeyboardEvents() {}

  // -- render ------------------------------------------------------- //
  protected render() {
    const classes = {
      "wcm-overlay": this.open,
      "wcm-active": this.active,
    };

    return html`
      <div
        class=${classMap(classes)}
        id="mirai-web3-modal"
        @click=${this.onCloseModal}
        role="alertdialog"
        aria-modal="true"
      >
        <div class="wcm-container" tabindex="0">
          ${this.open
            ? html`<mirai-web3-qrcode-view></mirai-web3-qrcode-view> `
            : null}
        </div>
      </div>
    `;
  }
}

if (!customElements.get("mirai-web3-modal")) {
  customElement("mirai-web3-modal")(MiraiWeb3Modal);
}

export default createComponent({
  react: React,
  elementClass: MiraiWeb3Modal,
  tagName: "mirai-web3-modal",
});

// declare global {
//   interface HTMLElementTagNameMap {
//     "mirai-web3-modal": MiraiWeb3Modal;
//   }
// }
