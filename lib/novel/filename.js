"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jp_1 = require("../jp");
function filename(name, options = {}) {
    return jp(name, options)
        .replace(/·/g, '・');
}
exports.filename = filename;
function word(name, options = {}) {
    return jp(name, options);
}
exports.word = word;
function jp(txt, options = {}) {
    return zh(jp_1.zh2jp(txt, {
        // @ts-ignore
        skip: '龙竜龍制征里像拜冰澤' + (options.skip || ''),
    }))
        .replace(/诅/g, '詛')
        .replace(/复仇/g, '復仇')
        .replace(/戦斗/g, '戦闘')
        .replace(/^プロローグ/, '序')
        .replace(/^エピローグ/, '終章');
}
exports.jp = jp;
function zh(txt, options = {}) {
    return txt
        .replace(/与/g, '與')
        .replace(/[亜亚亞]/g, '亞')
        .replace(/価/, '價')
        .replace(/[觉覚覺]/g, '覺')
        .replace(/亏/g, '虧')
        .replace(/[·‧・···•]/g, '・')
        .replace(/泽/g, '澤');
}
exports.zh = zh;
const novelFilename = require("./filename");
exports.default = novelFilename;
