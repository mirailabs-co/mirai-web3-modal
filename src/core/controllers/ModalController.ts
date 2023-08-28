import { observable, observe } from "mobx";

export type IModalState = {
  open: boolean;
  isUiLoaded: boolean;
  uri: string;
};

type Options = {
  uri: string;
};

const state = observable<IModalState>({
  open: false,
  uri: null,
  isUiLoaded: false,
});

export const ModalController = {
  state,
  subscribe(callback: (newState: IModalState) => void) {
    return observe(state, () => callback(state));
  },
  close() {
    state.open = false;
  },
  setIsUiLoaded(status: boolean) {
    state.isUiLoaded = status;
  },
  async open(opts: Options) {
    if (state.isUiLoaded) {
      state.uri = opts.uri;
      state.open = true;
    }

    return new Promise<void>((resolve) => {
      // Open modal if essential async data is ready
      if (state.isUiLoaded) {
        state.open = true;
        resolve();
      }
      // Otherwise (slow network) re-attempt open checks
      else {
        const interval = setInterval(() => {
          if (state.isUiLoaded) {
            clearInterval(interval);
            state.open = true;
            resolve();
          }
        }, 200);
      }
    });
  },
};
