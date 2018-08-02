"use strict";
/**
 * Created by user on 2018/8/2/002.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _table_cn2tw = require("chinese_convert/cn2tw");
const _table_tw2cn = require("chinese_convert/tw2cn");
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
const self = require("./core");
exports.default = self;
