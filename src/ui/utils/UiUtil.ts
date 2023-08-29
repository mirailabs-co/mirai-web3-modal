import type { LitElement } from "lit";

export const UiUtil = {
  MOBILE_BREAKPOINT: 600,

  WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",

  EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",

  getShadowRootElement(root: LitElement, selector: string) {
    console.log("selector", selector);
    const el = root.renderRoot.querySelector(selector);
    if (!el) {
      throw new Error(`${selector} not found`);
    }

    return el as HTMLElement;
  },

  getWalletName(name: string, short = false) {
    return short && name.length > 8 ? `${name.substring(0, 8)}..` : name;
  },

  isMobileAnimation() {
    return window.innerWidth <= UiUtil.MOBILE_BREAKPOINT;
  },

  getErrorMessage(err: unknown) {
    return err instanceof Error ? err.message : "Unknown Error";
  },

  debounce(func: (...args: any[]) => unknown, timeout = 500) {
    let timer: NodeJS.Timeout | undefined = undefined;

    return (...args: unknown[]) => {
      function next() {
        func(...args);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout);
    };
  },
};
