"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("@lazy-cjk/jp-table-convert"), exports);
const jp_table_convert_1 = tslib_1.__importDefault(require("@lazy-cjk/jp-table-convert"));
/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 *
 * 目前只支援 簡繁日漢字 並非全 cjk 漢字支援
 */
exports.default = jp_table_convert_1.default;
//# sourceMappingURL=core.js.map