import type { IModalState } from "../core/controllers/ModalController";
export type MiraiWeb3ModalConfig = IModalState & unknown;
export declare class MiraiWeb3Modal {
    constructor();
    private initUi;
    openModal: (opts: {
        uri: string;
    }) => Promise<void>;
    closeModal: () => void;
    subscribeModal: (callback: (newState: IModalState) => void) => import("mobx").Lambda;
}
