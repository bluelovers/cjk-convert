"use strict";
/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAFE_MODE_CHAR = exports.getOptionsSkip = exports.REGEXP_TEST = exports.defaultOptions = exports.getOptions = exports._call = exports._tw2cn = exports._cn2tw = exports.table_tw2cn = exports.table_cn2tw = exports.tw2cn = exports.cn2tw = void 0;
//import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';
const table_1 = require("./table");
const core_1 = require("./core");
Object.defineProperty(exports, "_call", { enumerable: true, get: function () { return core_1._call; } });
Object.defineProperty(exports, "defaultOptions", { enumerable: true, get: function () { return core_1.defaultOptions; } });
Object.defineProperty(exports, "getOptions", { enumerable: true, get: function () { return core_1.getOptions; } });
Object.defineProperty(exports, "getOptionsSkip", { enumerable: true, get: function () { return core_1.getOptionsSkip; } });
Object.defineProperty(exports, "REGEXP_TEST", { enumerable: true, get: function () { return core_1.REGEXP_TEST; } });
Object.defineProperty(exports, "SAFE_MODE_CHAR", { enumerable: true, get: function () { return core_1.SAFE_MODE_CHAR; } });
const zhConvert = require("./index");
const table_plus_1 = require("./table_plus");
function cn2tw(text, options = {}, ...argv) {
    return core_1._call(_cn2tw, text, options, ...argv);
}
exports.cn2tw = cn2tw;
function tw2cn(text, options = {}, ...argv) {
    return core_1._call(_tw2cn, text, options, ...argv);
}
exports.tw2cn = tw2cn;
exports.table_cn2tw = Object.assign({}, table_1.table_cn2tw, table_plus_1.table_cn2tw_plus);
exports.table_tw2cn = Object.assign({}, table_1.table_tw2cn, table_plus_1.table_tw2cn_plus);
function _cn2tw(text) {
    // @ts-ignore
    return core_1.textMap(text, exports.table_cn2tw);
}
exports._cn2tw = _cn2tw;
function _tw2cn(text) {
    // @ts-ignore
    return core_1.textMap(text, exports.table_tw2cn);
}
exports._tw2cn = _tw2cn;
exports.default = zhConvert;
//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));
//# sourceMappingURL=index.js.map