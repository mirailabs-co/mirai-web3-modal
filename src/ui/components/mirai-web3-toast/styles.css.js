import { css } from "lit";

export default css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: "Helvetica Neue";
    background-color: #f4f4f5;
  }

  body > div {
    margin: auto;
  }

  /* ======= Buttons ======== */

  /* Block */
  .btn {
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding: 12px 48px;
    border-radius: 50px;
    cursor: pointer;
    min-width: 120px;
    transition: opacity 0.2s ease;
  }

  /* Modifier */
  .btn--size-l {
    padding: 16px 56px;
  }

  .btn--size-s {
    padding: 8px 32px;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .btn + .btn {
    margin-left: 16px;
  }

  .btn--success {
    background-color: #71be34;
  }

  .btn--warn {
    background-color: #ffb702;
  }

  .btn--danger {
    background-color: #ff623d;
  }

  .btn--disabled {
    opacity: 0.5 !important;
    cursor: default;
  }

  /* ======= Toast message ======== */

  #toast {
    position: fixed;
    top: 32px;
    right: 32px;
    z-index: 999999;
  }

  .toast {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 2px;
    padding: 20px 0;
    min-width: 400px;
    max-width: 450px;
    border-left: 4px solid;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
    transition: all linear 0.3s;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(calc(100% + 32px));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  .toast--success {
    border-color: #47d864;
  }

  .toast--success .toast__icon {
    color: #47d864;
  }

  .toast--info {
    border-color: #2f86eb;
  }

  .toast--info .toast__icon {
    color: #2f86eb;
  }

  .toast--warning {
    border-color: #ffc021;
  }

  .toast--warning .toast__icon {
    color: #ffc021;
  }

  .toast--error {
    border-color: #ff623d;
  }

  .toast--error .toast__icon {
    color: #ff623d;
  }

  .toast + .toast {
    margin-top: 24px;
  }

  .toast__icon {
    font-size: 24px;
  }

  .toast__icon,
  .toast__close {
    padding: 0 16px;
  }

  .toast__body {
    flex-grow: 1;
  }

  .toast__title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  .toast__msg {
    font-size: 14px;
    color: #888;
    margin-top: 6px;
    line-height: 1.5;
  }

  .toast__close {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
