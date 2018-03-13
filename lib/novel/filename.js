"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jp_1 = require("../jp");
const convert_1 = require("../zh/convert");
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
    return zh(jp_1.zh2jp(zh(txt), {
        // @ts-ignore
        skip: '竜龍制征里像拜冰澤涉丑兒娘姐姉志儿從' + (options.skip || ''),
        safe: typeof options.safe == 'boolean' ? options.safe : true,
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
        .replace(/[\u2000-\u200F]/g, '')
        .replace(/[\u2028-\u202F]/g, '')
        .replace(/[\u205F-\u2060]/g, '')
        .replace(/与/g, '與')
        .replace(/[亜亚亞]/g, '亞')
        .replace(/価/, '價')
        .replace(/[觉覚覺]/g, '覺')
        .replace(/亏/g, '虧')
        .replace(/[·‧・···•]/g, '・')
        .replace(/泽/g, '澤')
        .replace(/^(?:后)(記|日)/, '後$1')
        .replace(/回复/g, '回復')
        .replace(/复(仇|讐)/g, '復$1')
        .replace(/里面/g, '裡面')
        .replace(/([今此])后/g, '$1後')
        .replace(/[么预枪丛迈这个尔儿从龙]+/g, function (s) {
        return convert_1.cn2tw(s);
    });
}
exports.zh = zh;
const novelFilename = require("./filename");
exports.default = novelFilename;
