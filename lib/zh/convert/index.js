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
    '准': '準',
    //'历': '曆',
    '历': '歷',
    '刹': '剎',
    '讬': '託',
    '纤': '纖',
    '𫔀': '鍊',
    '炼': '煉',
    '恒': '恆',
    '畲': '畲',
    '处': '處',
    '复': '復',
    '钜': '鉅',
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
    '剎': '刹',
    '託': '讬',
    '鍊': '炼',
    '錬': '炼',
    '煉': '炼',
    '壞': '坏',
    '壊': '坏',
    '佘': '佘',
    '畲': '畲',
    '處': '处',
    '丑': '丑',
    '么': '么',
    '几': '几',
    '后': '后',
    '斗': '斗',
    '艸': '艸',
    '干': '干',
    '虫': '虫',
    '岳': '岳',
    '卜': '卜',
    '于': '于',
    '里': '里',
    '鉅': '钜',
});
[
    //
    '処',
    '佘',
    '畲',
    '氹',
    '凼',
].forEach(function (v) {
    delete exports.table_tw2cn[v];
    delete exports.table_cn2tw[v];
});
[
    //
    '鉅',
].forEach(function (v) {
    delete exports.table_cn2tw[v];
});
[
    //
    '钜',
].forEach(function (v) {
    delete exports.table_tw2cn[v];
});
exports.REGEXP_TEST = /[\u4E00-\u9FFF]/g;
exports.SAFE_MODE_CHAR = [
    '后',
    '里',
];
function getOptionsSkip(options, skip = exports.SAFE_MODE_CHAR) {
    if (!options.skip) {
        options.skip = skip.slice();
    }
    else if (typeof options.skip == 'string') {
        options.skip += skip.join('');
    }
    else if (Array.isArray(options.skip)) {
        options.skip = options.skip.slice().concat(skip);
    }
    else {
        options.table = skip.reduce(function (a, b) {
            a[b] = b;
            return a;
        }, Object.assign({}, options.table || {}));
    }
    return options;
}
exports.getOptionsSkip = getOptionsSkip;
function getOptions(options = {}, defaultOpts = exports.defaultOptions, skip = exports.SAFE_MODE_CHAR) {
    options = Object.assign({}, defaultOpts, options);
    if (options.safe) {
        options = getOptionsSkip(options, skip);
        //console.log(options);
    }
    return options;
}
exports.getOptions = getOptions;
function _call(fn, text, options = {}, ...argv) {
    options = getOptions(options);
    if (options.skip || options.table || options.tableOnly) {
        let { skip, table, tableOnly } = options;
        let not_tableOnly = !tableOnly;
        if (tableOnly && !table) {
            throw new Error(`table is ${table}`);
        }
        return text.replace(exports.REGEXP_TEST, function (text) {
            if (skip && skip.indexOf(text) !== -1) {
                return text;
            }
            else if (table && typeof table == 'function') {
                let ret = table(fn, text, options, ...argv);
                if (ret !== null && typeof ret != 'undefined') {
                    return ret;
                }
            }
            else if (table && table[text]) {
                return table[text];
            }
            else if (not_tableOnly) {
                return fn(text);
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
