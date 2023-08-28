"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiraiWeb3Spinner = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const react_1 = require("@lit-labs/react");
const react_2 = __importDefault(require("react"));
class MiraiWeb3Spinner extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) `
      <svg viewBox="0 0 50 50" width="24" height="24">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="4"
          stroke="#fff"
        />
      </svg>
    `;
    }
}
exports.MiraiWeb3Spinner = MiraiWeb3Spinner;
if (!customElements.get("mirai-web3-spinner")) {
    (0, decorators_js_1.customElement)("mirai-web3-spinner")(MiraiWeb3Spinner);
}
exports.default = (0, react_1.createComponent)({
    react: react_2.default,
    elementClass: MiraiWeb3Spinner,
    tagName: "mirai-web3-spinner",
});
//# sourceMappingURL=index.js.map