"use strict";
/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAFE_MODE_CHAR = exports.getOptionsSkip = exports.REGEXP_TEST = exports.defaultOptions = exports.getOptions = exports._call = exports.table_tw2cn = exports.table_cn2tw = exports._tw2cn = exports._cn2tw = exports.tw2cn = exports.cn2tw = void 0;
const util_1 = require("@lazy-cjk/zh-convert/lib/util");
Object.defineProperty(exports, "_call", { enumerable: true, get: function () { return util_1._call; } });
Object.defineProperty(exports, "getOptions", { enumerable: true, get: function () { return util_1.getOptions; } });
Object.defineProperty(exports, "getOptionsSkip", { enumerable: true, get: function () { return util_1.getOptionsSkip; } });
const const_1 = require("@lazy-cjk/zh-convert/lib/const");
Object.defineProperty(exports, "defaultOptions", { enumerable: true, get: function () { return const_1.defaultOptions; } });
Object.defineProperty(exports, "REGEXP_TEST", { enumerable: true, get: function () { return const_1.REGEXP_TEST; } });
Object.defineProperty(exports, "SAFE_MODE_CHAR", { enumerable: true, get: function () { return const_1.SAFE_MODE_CHAR; } });
const zh_convert_1 = require("@lazy-cjk/zh-convert");
Object.defineProperty(exports, "cn2tw", { enumerable: true, get: function () { return zh_convert_1.cn2tw; } });
Object.defineProperty(exports, "tw2cn", { enumerable: true, get: function () { return zh_convert_1.tw2cn; } });
const core_1 = require("@lazy-cjk/zh-convert/lib/core");
Object.defineProperty(exports, "_cn2tw", { enumerable: true, get: function () { return core_1._cn2tw; } });
Object.defineProperty(exports, "_tw2cn", { enumerable: true, get: function () { return core_1._tw2cn; } });
const table_1 = require("@lazy-cjk/zh-convert/lib/table");
Object.defineProperty(exports, "table_cn2tw", { enumerable: true, get: function () { return table_1.table_cn2tw; } });
Object.defineProperty(exports, "table_tw2cn", { enumerable: true, get: function () { return table_1.table_tw2cn; } });
exports.default = exports;
//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));
//# sourceMappingURL=index.js.map