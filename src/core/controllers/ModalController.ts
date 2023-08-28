import { observable, observe } from "mobx";

export type IModalState = {
  open: boolean;
  isUiLoaded: boolean;
  uri: string | null;
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
    console.log("here");
    return observe(state, (change) => {
      console.log("new state received", change.object);
      callback(state);
    });
  },
  close() {
    state.open = false;
  },
  setIsUiLoaded(status: boolean) {
    state.isUiLoaded = status;
  },
  async open(opts: Options) {
    console.log("state.isUiLoaded", state.isUiLoaded);

    return new Promise<void>((resolve) => {
      // Open modal if essential async data is ready
      if (state.isUiLoaded) {
        state.open = true;
        state.uri = opts.uri;
        resolve();
      }
      // Otherwise (slow network) re-attempt open checks
      else {
        const interval = setInterval(() => {
          if (state.isUiLoaded) {
            clearInterval(interval);
            state.open = true;
            state.uri = opts.uri;
            resolve();
          }
        }, 200);
      }
    });
  },
};
