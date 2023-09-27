import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import styles from "./styles.css.js";
import { createComponent } from "@lit-labs/react";
import React from "react";
import { ToastController } from "../../../core/controllers/ToastController";

export class W3mModalToast extends LitElement {
  public static styles = [styles];

  // -- state & properties ------------------------------------------- //
  @state() public open = false;

  public constructor() {
    super();
    this.unsubscribe = ToastController.subscribe((newState) => {
      if (newState.open) {
        this.open = true;
        this.timeout = setTimeout(() => ToastController.closeToast(), 3000);
      } else {
        this.open = false;
        clearTimeout(this.timeout);
      }
    });
  }

  public disconnectedCallback() {
    this.unsubscribe?.();
    clearTimeout(this.timeout);
    ToastController.closeToast();
  }

  // -- private ------------------------------------------------------ //
  private readonly unsubscribe?: () => void = undefined;

  private timeout?: NodeJS.Timeout = undefined;

  // -- render ------------------------------------------------------- //
  protected render() {
    const { message, variant } = ToastController.state;
    const classes = {
      "w3m-success": variant === "success",
      "w3m-error": variant === "error",
    };

    return this.open
      ? html`
          <div id="toast">
            <div
              class="toast toast--${variant === "error" ? "error" : "success"}"
              style="animation: 0.3s ease 0s 1 normal none running slideInLeft, 1s linear 5s 1 normal forwards running fadeOut;"
            >
              <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="toast__body">
                <p class="toast__msg">${message}</p>
              </div>
              <div class="toast__close">
                <i class="fas fa-times"></i>
              </div>
            </div>
          </div>
        `
      : null;
  }
}

if (!customElements.get("w3m-modal-toast")) {
  customElement("w3m-modal-toast")(W3mModalToast);
}

export default createComponent({
  react: React,
  elementClass: W3mModalToast,
  tagName: "w3m-modal-toast",
});

declare global {
  interface HTMLElementTagNameMap {
    "w3m-modal-toast": W3mModalToast;
  }
}
