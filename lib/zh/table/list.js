"use strict";
/**
 * Created by user on 2018/6/10/010.
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
exports.slugify = void 0;
__exportStar(require("@lazy-cjk/zh-table-list/list"), exports);
var zh_slugify_1 = require("@lazy-cjk/zh-slugify");
Object.defineProperty(exports, "slugify", { enumerable: true, get: function () { return zh_slugify_1.slugify; } });
const list_1 = __importDefault(require("@lazy-cjk/zh-table-list/list"));
exports.default = list_1.default;
//# sourceMappingURL=list.js.map