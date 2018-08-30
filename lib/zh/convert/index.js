"use strict";
/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
Object.defineProperty(exports, "__esModule", { value: true });
//import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';
const table_1 = require("./table");
const core_1 = require("./core");
exports._call = core_1._call;
exports.defaultOptions = core_1.defaultOptions;
exports.getOptions = core_1.getOptions;
exports.getOptionsSkip = core_1.getOptionsSkip;
exports.REGEXP_TEST = core_1.REGEXP_TEST;
exports.SAFE_MODE_CHAR = core_1.SAFE_MODE_CHAR;
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
