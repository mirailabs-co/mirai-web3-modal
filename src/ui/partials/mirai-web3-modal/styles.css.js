import { css } from "lit";

export default css`
  :host {
    all: initial;
  }

  .wcm-overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
  }

  @media (max-height: 720px) and (orientation: landscape) {
    .wcm-overlay {
      overflow: scroll;
      align-items: flex-start;
      padding: 20px 0;
    }
  }

  .wcm-active {
    pointer-events: auto;
  }

  .wcm-container {
    position: relative;
    max-width: 432px;
    width: 100%;
    outline: none;
    border-radius: 12px 12px 24px 24px
    border: 1px solid var(--wcm-color-overlay);
    overflow: hidden;
  }

  .wcm-card {
    width: 100%;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0px 6px 14px -6px rgba(10, 16, 31, 0.12),
      0px 10px 32px -4px rgba(10, 16, 31, 0.1),
      0 0 0 1px var(--wcm-color-overlay);
    background-color: var(--wcm-color-bg-1);
    color: var(--wcm-color-fg-1);
  }

  @media (max-width: 600px) {
    .wcm-container {
      max-width: 440px;
      border-radius: 12px 12px 0 0;
    }

    .wcm-card {
      border-radius: 24px 24px 0 0;
    }

    .wcm-overlay {
      align-items: flex-end;
    }
  }

  @media (max-width: 440px) {
    .wcm-container {
      border: none;
    }
  }
`;
