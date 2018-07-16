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
exports.defaultOptions = Object.freeze({
    safe: true,
});
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
    '苏': '蘇',
    '壳': '殻',
    '馆': '館',
    '里': '裡',
    '后': '後',
    '当': '當',
    '锺': '鍾',
    '钟': '鐘',
    '凃': '塗',
    '涂': '涂',
    '㑩': '儸',
    '罗': '羅',
    '啰': '囉',
    '国': '國',
    '验': '驗',
});
exports.table_tw2cn = Object.assign(_table_tw2cn, {
    '殻': '壳',
    '殼': '壳',
    '館': '馆',
    '後': '后',
    '儅': '儅',
    '噹': '当',
    '鍾': '锺',
    '鐘': '钟',
    '㑹': '会',
    '塗': '凃',
    '涂': '涂',
    '儸': '㑩',
    '羅': '罗',
    '囉': '啰',
    '國': '国',
});
exports.REGEXP_TEST = /[\u4E00-\u9FFF]/g;
const SAFE_MODE_CHAR = [
    '后',
    '里',
];
function _call(fn, text, options = {}, ...argv) {
    options = Object.assign({}, exports.defaultOptions, options);
    if (options.safe) {
        if (!options.skip) {
            options.skip = SAFE_MODE_CHAR.slice();
        }
        else if (typeof options.skip == 'string') {
            options.skip += '后';
        }
        else if (Array.isArray(options.skip)) {
            options.skip = options.skip.concat(SAFE_MODE_CHAR);
        }
        else {
            options.table = SAFE_MODE_CHAR.reduce(function (a, b) {
                a[b] = b;
                return a;
            }, options.table || {});
        }
        //console.log(options);
    }
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
//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));
