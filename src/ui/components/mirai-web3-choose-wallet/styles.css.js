import { css } from "lit";

export default css`
  :host {
    all: initial;
  }

  .wallet-connect {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  .wallet-connect .logo {
    flex: 0 0 auto;
    position: relative;
    width: 316px;
  }

  .wallet-connect .options {
    align-items: center;
    background-color: var(--whitewhite);
    border-radius: 24px;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 32px;
    padding: 24px 32px;
    position: relative;
  }

  .wallet-connect .text-wrapper {
    color: #8b8e97;
    font-family: "SF Pro Text-Bold", Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  .wallet-connect .items {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 29px;
    position: relative;
    cursor: pointer;
  }
  .wallet-connect .items:hover {
    opacity: 0.6;
  }

  .wallet-connect .item {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 14px;
    position: relative;
  }

  .wallet-connect .div {
    color: #26292e;
    font-family: "SF Pro Text-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 32px;
    margin-top: -1px;
    position: relative;
    width: 182px;
  }

  .wallet-connect .img {
    height: 32px;
    position: relative;
    width: 32px;
  }

  .wallet-connect .vector {
    height: 17.5px;
    margin-right: -0.75px;
    position: relative;
    width: 7.5px;
  }

  .wallet-connect .item-2 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
    padding: 0px 16px;
  }

  .wallet-connect .text-wrapper-2 {
    color: #8d9099;
    font-family: "SF Pro Text-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.6px;
    line-height: normal;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;
