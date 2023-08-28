"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModalController_1 = require("../../core/controllers/ModalController");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const react_1 = __importDefault(require("react"));
const react_2 = require("@lit-labs/react");
class MiraiWeb3Modal extends lit_1.LitElement {
    constructor() {
        super();
        this.open = false;
        this.active = false;
        this.unsubscribeModal = undefined;
        this.unsubscribeModal = ModalController_1.ModalController.subscribe((modalState) => {
            console.log("modalState.open", modalState.open);
            if (modalState.open) {
                this.onOpenModalEvent();
            }
            else {
                this.onCloseModalEvent();
            }
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.unsubscribeModal) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    toggleBodyScroll(enabled) {
        const body = document.querySelector("body");
        if (body) {
            if (enabled) {
                const wcmStyles = document.getElementById("wcm-styles");
                wcmStyles === null || wcmStyles === void 0 ? void 0 : wcmStyles.remove();
            }
            else {
                document.head.insertAdjacentHTML("beforeend", `<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>`);
            }
        }
    }
    onCloseModal(event) {
        if (event.target === event.currentTarget) {
            ModalController_1.ModalController.close();
        }
    }
    onOpenModalEvent() {
        this.toggleBodyScroll(false);
        this.addKeyboardEvents();
        this.open = true;
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            this.active = true;
        }), 0);
    }
    onCloseModalEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.toggleBodyScroll(true);
            this.removeKeyboardEvents();
            this.active = false;
            this.open = false;
        });
    }
    addKeyboardEvents() {
        window.addEventListener("keydown", (event) => {
            var _a;
            if (event.key === "Escape") {
                ModalController_1.ModalController.close();
            }
            else if (event.key === "Tab") {
                if (!((_a = event.target) === null || _a === void 0 ? void 0 : _a.tagName.includes("mirai-web3-"))) {
                }
            }
        });
    }
    removeKeyboardEvents() { }
    render() {
        return (0, lit_1.html) `
      <div
        id="mirai-web3-modal"
        @click=${this.onCloseModal}
        role="alertdialog"
        aria-modal="true"
      >
        ${this.open
            ? (0, lit_1.html) `<mirai-web3-qrcode-view></mirai-web3-qrcode-view> `
            : null}
      </div>
    `;
    }
}
__decorate([
    (0, decorators_js_1.state)()
], MiraiWeb3Modal.prototype, "open", void 0);
__decorate([
    (0, decorators_js_1.state)()
], MiraiWeb3Modal.prototype, "active", void 0);
if (!customElements.get("mirai-web3-modal")) {
    (0, decorators_js_1.customElement)("mirai-web3-modal")(MiraiWeb3Modal);
}
exports.default = (0, react_2.createComponent)({
    react: react_1.default,
    elementClass: MiraiWeb3Modal,
    tagName: "mirai-web3-modal",
});
//# sourceMappingURL=mirai-web3-modal.js.map