export type IModalState = {
    open: boolean;
    isUiLoaded: boolean;
    uri: string | null;
};
type Options = {
    uri: string;
};
export declare const ModalController: {
    state: IModalState;
    subscribe(callback: (newState: IModalState) => void): import("mobx").Lambda;
    close(): void;
    setIsUiLoaded(status: boolean): void;
    open(opts: Options): Promise<void>;
};
export {};
