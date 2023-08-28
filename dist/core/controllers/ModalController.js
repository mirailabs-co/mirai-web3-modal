"use strict";
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
exports.ModalController = void 0;
const mobx_1 = require("mobx");
const state = (0, mobx_1.observable)({
    open: false,
    uri: null,
    isUiLoaded: false,
});
exports.ModalController = {
    state,
    subscribe(callback) {
        console.log("here");
        return (0, mobx_1.observe)(state, (change) => {
            console.log("new state received", change.object);
            callback(state);
        });
    },
    close() {
        state.open = false;
    },
    setIsUiLoaded(status) {
        state.isUiLoaded = status;
    },
    open(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("state.isUiLoaded", state.isUiLoaded);
            return new Promise((resolve) => {
                if (state.isUiLoaded) {
                    state.open = true;
                    state.uri = opts.uri;
                    resolve();
                }
                else {
                    const interval = setInterval(() => {
                        if (state.isUiLoaded) {
                            clearInterval(interval);
                            state.open = true;
                            state.uri = opts.uri;
                            resolve();
                        }
                    }, 200);
                }
            });
        });
    },
};
//# sourceMappingURL=ModalController.js.map