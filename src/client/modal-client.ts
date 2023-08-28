import type { IModalState } from "../core/controllers/ModalController";
import { ModalController } from "../core/controllers/ModalController";

/**
 * Types
 */
export type MiraiWeb3ModalConfig = IModalState & unknown;

/**
 * Client
 */
export class MiraiWeb3Modal {
  public constructor(config: MiraiWeb3ModalConfig) {
    this.initUi();
  }

  private async initUi() {
    if (typeof window !== "undefined") {
      const modal = document.createElement("mirai-web3-modal");
      document.body.insertAdjacentElement("beforeend", modal);
      ModalController.setIsUiLoaded(true);
    }
  }

  public openModal = ModalController.open;

  public closeModal = ModalController.close;

  public subscribeModal = ModalController.subscribe;
}
