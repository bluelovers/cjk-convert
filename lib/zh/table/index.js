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
exports._get = exports.libTable = void 0;
const zh_table_alias_1 = __importDefault(require("@lazy-cjk/zh-table-alias"));
exports.libTable = zh_table_alias_1.default;
const util_1 = require("@lazy-cjk/zh-table-list/lib/util");
Object.defineProperty(exports, "_get", { enumerable: true, get: function () { return util_1._get; } });
__exportStar(require("@lazy-cjk/zh-table-list/lib/types"), exports);
__exportStar(require("@lazy-cjk/zh-table-list"), exports);
exports.default = exports;
//# sourceMappingURL=index.js.map