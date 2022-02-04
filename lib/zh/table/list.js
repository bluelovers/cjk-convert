"use strict";
/**
 * Created by user on 2018/6/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("@lazy-cjk/zh-table-list/list"), exports);
var zh_slugify_1 = require("@lazy-cjk/zh-slugify");
Object.defineProperty(exports, "slugify", { enumerable: true, get: function () { return zh_slugify_1.slugify; } });
const list_1 = tslib_1.__importDefault(require("@lazy-cjk/zh-table-list/list"));
exports.default = list_1.default;
//# sourceMappingURL=list.js.map