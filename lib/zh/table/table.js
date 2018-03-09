"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../convert/index");
const util_1 = require("../../util");
const deepmerge = require("deepmerge-plus");
exports._table_tw = {
    '罗': '羅',
    '恶': '惡',
    '苏': '蘇',
};
exports.table_jp = {
    'の': [
        '之',
        '的',
    ],
    '画': [
        '划',
        '画',
        '劃',
        '畫',
    ],
    '闘': [
        '斗',
    ],
    '鬥': [
        '斗',
    ],
    '鬭': [
        '斗',
    ],
    '闇': [
        '暗',
    ],
    '囌': [
        '苏',
        '蘇',
        '囌',
    ],
    '苏': [
        '苏',
        '蘇',
        '囌',
    ],
};
exports.table_plus = {
    '劍': [
        '劍',
        '剑',
        '剣',
        '劎',
        '劒',
        '剱',
        '劔',
    ],
    '砲': [
        '砲',
        '炮',
    ],
    '偽': [
        '偽',
        '僞',
    ],
    '內': [
        '內',
        '内',
    ],
    '鬥': [
        '鬭',
        '鬥',
        '闘',
    ],
    '鶏': [
        '鶏',
        '鷄',
        '雞',
        '鸡',
    ],
    '兎': [
        '兎',
        '兔',
    ],
    '坏': [
        '坯',
        '坏',
        "壊",
        "壞",
    ],
    '殻': [
        '殻',
        '殼',
        '壳',
    ],
    '像': [
        '象',
    ],
};
Object.keys(exports.table_plus)
    .forEach(function (key) {
    exports.table_plus[key] = util_1.array_unique(exports.table_plus[key]);
    exports.table_plus[key].forEach(function (s) {
        exports.table_plus[s] = exports.table_plus[key];
    });
});
exports.table_jp = deepmerge(exports.table_jp, exports.table_plus);
Object.keys(exports.table_jp)
    .forEach(function (key) {
    exports.table_jp[key] = util_1.array_unique(exports.table_jp[key]);
});
exports._table_cn = _update({}, exports._table_tw);
function _update(target, source) {
    target = Object.keys(source)
        .reduce(function (a, b) {
        a[source[b]] = b;
        return a;
    }, {});
    return target;
}
exports._update = _update;
function _get(arr, value, ...values) {
    let ret = []
        .concat(value)
        .concat(...values)
        .filter(function (v) {
        return v;
    });
    //ret.length && ret.sort();
    return ret;
}
exports._get = _get;
function jp(char) {
    let a = [];
    a = _get(a, exports.table_jp[char]);
    return a;
}
exports.jp = jp;
function tw(char) {
    let a = [];
    a = _get(a, exports._table_tw[char], index_1.cn2tw(char));
    //console.log('cn2tw', char, a);
    return a;
}
exports.tw = tw;
function cn(char) {
    let a = [];
    a = _get(a, exports._table_cn[char], index_1.tw2cn(char));
    //console.log('tw2cn', char, a);
    return a;
}
exports.cn = cn;
const self = require("./table");
exports.default = self;
