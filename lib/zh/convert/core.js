"use strict";
/**
 * Created by user on 2018/8/2/002.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _table_cn2tw = require("chinese_convert/cn2tw");
const _table_tw2cn = require("chinese_convert/tw2cn");
const self = require("./core");
const UString = require("uni-string");
function charMap(s, table) {
    let t = table[s];
    return (typeof t === 'string') ? t : s;
}
exports.charMap = charMap;
function textMap1(text, table) {
    let toText = [];
    let len = text.length;
    for (let i = 0; i < len; i++) {
        toText[i] = charMap(text[i], table);
    }
    //console.log(toText.length, toText);
    return toText.join('');
}
exports.textMap1 = textMap1;
function textMap2(text, table) {
    let toText = UString.split(text, '');
    let len = toText.length;
    for (let i = 0; i < len; i++) {
        toText[i] = charMap(toText[i], table);
    }
    //console.log(toText.length, toText);
    return toText.join('');
}
exports.textMap2 = textMap2;
function textMap3(text, table) {
    let toText = text.split(/(?:)/u);
    let len = toText.length;
    for (let i = 0; i < len; i++) {
        toText[i] = charMap(toText[i], table);
    }
    //console.log(toText.length, toText);
    return toText.join('');
}
exports.textMap3 = textMap3;
function textMap4(text, table) {
    return text.replace(/[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]/u, function (s) {
        return charMap(s, table);
    });
}
exports.textMap4 = textMap4;
exports.textMap = textMap4;
const textMap = textMap4;
function _cn2tw(text) {
    // @ts-ignore
    return textMap(text, _table_cn2tw);
}
exports._cn2tw = _cn2tw;
function _tw2cn(text) {
    // @ts-ignore
    return textMap(text, _table_tw2cn);
}
exports._tw2cn = _tw2cn;
exports.default = self;
function removeSame(table) {
    return Object.entries(table)
        .reduce(function (a, b) {
        let [k, v] = b;
        if (k != v) {
            a[k] = v;
        }
        return a;
    }, {});
}
exports.removeSame = removeSame;
exports.defaultOptions = Object.freeze({
    safe: true,
});
exports.REGEXP_TEST = /[\u4E00-\u9FFF]/g;
exports.SAFE_MODE_CHAR = [
    '后',
    '里',
    '像',
    '象',
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
