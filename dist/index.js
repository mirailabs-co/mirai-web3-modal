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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiraiWeb3Modal = void 0;
require("./ui/components");
require("./ui/partials");
require("./ui/utils");
require("./ui/views");
require("./core/controllers");
__exportStar(require("./ui/components/mirai-web3-qrcode"), exports);
__exportStar(require("./ui/partials/mirai-web3-modal"), exports);
var modal_client_1 = require("./client/modal-client");
Object.defineProperty(exports, "MiraiWeb3Modal", { enumerable: true, get: function () { return modal_client_1.MiraiWeb3Modal; } });
//# sourceMappingURL=index.js.map