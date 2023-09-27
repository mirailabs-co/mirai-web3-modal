import { observable, observe } from "mobx";

export type IModalState = {
  open: boolean;
  message: string;
  variant: string;
};

type Options = {
  uri: string;
  redirectUrl?: string;
};

const state = observable<IModalState>({
  open: false,
  message: "",
  variant: "success",
});

export const ToastController = {
  state,
  subscribe(callback: (newState: IModalState) => void) {
    console.log("here");
    return observe(state, (change) => {
      console.log("new state received", change.object);
      callback(state);
    });
  },

  openToast(message: IModalState["message"], variant: IModalState["variant"]) {
    state.open = true;
    state.message = message;
    state.variant = variant;
  },

  closeToast() {
    state.open = false;
  },
};
