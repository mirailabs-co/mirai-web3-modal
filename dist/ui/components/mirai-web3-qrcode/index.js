"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiraiWeb3QrCode = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const QrCodeUtil_1 = require("../../../ui/utils/QrCodeUtil");
const react_1 = require("@lit-labs/react");
const react_2 = __importDefault(require("react"));
class MiraiWeb3QrCode extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.uri = "";
    }
    svgTemplate() {
        return (0, lit_1.svg) `                
      <svg height=${320} width=${320} data-testid="component-qrcode-svg">
        ${QrCodeUtil_1.QrCodeUtil.generate(this.uri, 320, 320 / 4)}
      </svg>
    `;
    }
    render() {
        const src = QrCodeUtil_1.QrCodeUtil.generate(this.uri, 320, 50);
        console.log("src", src);
        return (0, lit_1.html) ` <div>${this.svgTemplate()}</div> `;
    }
}
__decorate([
    (0, decorators_js_1.property)()
], MiraiWeb3QrCode.prototype, "uri", void 0);
exports.MiraiWeb3QrCode = MiraiWeb3QrCode;
if (!customElements.get("mirai-web3-qrcode")) {
    (0, decorators_js_1.customElement)("mirai-web3-qrcode")(MiraiWeb3QrCode);
}
exports.default = (0, react_1.createComponent)({
    react: react_2.default,
    elementClass: MiraiWeb3QrCode,
    tagName: "mirai-web3-qrcode",
});
//# sourceMappingURL=index.js.map