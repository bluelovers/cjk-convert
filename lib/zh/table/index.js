"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._get = exports.libTable = void 0;
const tslib_1 = require("tslib");
const zh_table_alias_1 = tslib_1.__importDefault(require("@lazy-cjk/zh-table-alias"));
exports.libTable = zh_table_alias_1.default;
const util_1 = require("@lazy-cjk/zh-table-list/lib/util");
Object.defineProperty(exports, "_get", { enumerable: true, get: function () { return util_1._get; } });
tslib_1.__exportStar(require("@lazy-cjk/zh-table-list/lib/types"), exports);
tslib_1.__exportStar(require("@lazy-cjk/zh-table-list"), exports);
exports.default = exports;
//# sourceMappingURL=index.js.map