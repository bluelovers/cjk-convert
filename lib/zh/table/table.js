"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../convert/index");
exports._table_tw = {
    '罗': '羅',
    '恶': '惡',
};
exports.table_jp = {
    'の': [
        '之',
        '的',
    ],
    '劍': [
        '劍',
        '剑',
        '剣',
    ],
    '剣': [
        '劍',
        '剑',
        '剣',
    ],
    '画': [
        '划',
        '画',
        '劃',
        '畫',
    ],
    '砲': [
        '砲',
        '炮',
    ],
    '炮': [
        '砲',
        '炮',
    ],
};
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
    //return table_jp[char].slice();
}
exports.jp = jp;
function tw(char) {
    let a = [];
    /*
    if (_table_tw[char])
    {
        a.push(_table_tw[char])
    }
    a.push(cn2tw(char));
    */
    a = _get(a, exports._table_tw[char], index_1.cn2tw(char));
    //console.log('cn2tw', char, a);
    return a;
}
exports.tw = tw;
function cn(char) {
    let a = [];
    /*
    if (_table_cn[char])
    {
        a.push(_table_cn[char])
    }

    a.push(tw2cn(char));
    */
    a = _get(a, exports._table_cn[char], index_1.tw2cn(char));
    //console.log('tw2cn', char, a);
    return a;
}
exports.cn = cn;
const self = require("./table");
exports.default = self;
