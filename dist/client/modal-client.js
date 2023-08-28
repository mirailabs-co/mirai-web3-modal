"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiraiWeb3Modal = void 0;
const ModalController_1 = require("../core/controllers/ModalController");
class MiraiWeb3Modal {
    constructor() {
        this.openModal = ModalController_1.ModalController.open;
        this.closeModal = ModalController_1.ModalController.close;
        this.subscribeModal = ModalController_1.ModalController.subscribe;
        this.initUi();
    }
    initUi() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window !== "undefined") {
                yield Promise.resolve().then(() => __importStar(require("../ui")));
                const modal = document.createElement("mirai-web3-modal");
                document.body.insertAdjacentElement("beforeend", modal);
                ModalController_1.ModalController.setIsUiLoaded(true);
            }
        });
    }
}
exports.MiraiWeb3Modal = MiraiWeb3Modal;
//# sourceMappingURL=modal-client.js.map