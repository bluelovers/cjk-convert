"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cjkConv = void 0;
const index_1 = __importDefault(require("./lib/index"));
exports.cjkConv = index_1.default;
__exportStar(require("./version"), exports);
__exportStar(require("./lib/index"), exports);
exports.default = index_1.default;
//# sourceMappingURL=index.js.map