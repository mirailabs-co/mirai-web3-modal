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
exports.MiraiWeb3QrcodeView = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const ModalController_1 = require("../../../core/controllers/ModalController");
const react_1 = __importDefault(require("react"));
const react_2 = require("@lit-labs/react");
class MiraiWeb3QrcodeView extends lit_1.LitElement {
    constructor() {
        super();
        this.uri = null;
        setTimeout(() => {
            const { uri } = ModalController_1.ModalController.state;
            console.log("uri", uri);
            this.uri = uri;
        }, 0);
    }
    render() {
        return (0, lit_1.html) `${this.uri
            ? (0, lit_1.html) `<mirai-web3-qrcode uri=${this.uri}></mirai-web3-qrcode>`
            : (0, lit_1.html) `<mirai-web3-spinner></mirai-web3-spinner>`}`;
    }
}
__decorate([
    (0, decorators_js_1.state)()
], MiraiWeb3QrcodeView.prototype, "uri", void 0);
exports.MiraiWeb3QrcodeView = MiraiWeb3QrcodeView;
if (!customElements.get("mirai-web3-qrcode-view")) {
    (0, decorators_js_1.customElement)("mirai-web3-qrcode-view")(MiraiWeb3QrcodeView);
}
exports.default = (0, react_2.createComponent)({
    react: react_1.default,
    elementClass: MiraiWeb3QrcodeView,
    tagName: "mirai-web3-qrcode-view",
});
//# sourceMappingURL=index.js.map