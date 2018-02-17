"use strict";
/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _table_cn2tw = require("chinese_convert/cn2tw");
const _table_tw2cn = require("chinese_convert/tw2cn");
const chinese_convert_1 = require("chinese_convert");
function cn2tw(text, options = {}, ...argv) {
    return _call(chinese_convert_1.cn2tw, text, options, ...argv);
}
exports.cn2tw = cn2tw;
function tw2cn(text, options = {}, ...argv) {
    return _call(chinese_convert_1.tw2cn, text, options, ...argv);
}
exports.tw2cn = tw2cn;
exports.table_cn2tw = Object.assign(_table_cn2tw, {
    '恶': '惡',
});
exports.table_tw2cn = Object.assign(_table_tw2cn, {});
exports.REGEXP_TEST = /[\u4E00-\u9FFF]/g;
function _call(fn, text, options = {}, ...argv) {
    if (options.skip || options.table) {
        return text.replace(exports.REGEXP_TEST, function (text) {
            if (options.skip.indexOf(text) == -1) {
                return fn(text);
            }
            else if (options.table && typeof options.table == 'function') {
                let ret = options.table(fn, text, options, ...argv);
                if (ret !== null && typeof ret != 'undefined') {
                    return ret;
                }
            }
            else if (options.table && options.table[text]) {
                return options.table[text];
            }
            return text;
        });
    }
    return fn(text, options, ...argv);
}
exports._call = _call;
const zhConvert = require("./index");
exports.default = zhConvert;
