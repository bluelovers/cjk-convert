"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._buildTablePlus = exports.toVoice03 = exports.toVoice02 = exports.toVoice01 = exports.getVoiceAll = exports._get = exports.hasVoiceTable = exports.EnumTableVoice = exports.table_voice = void 0;
const array_hyper_unique_1 = require("array-hyper-unique");
const table_voice_core = {
    'か': [
        'か',
        'が',
    ],
    'き': [
        'き',
        'ぎ',
    ],
    'く': [
        'く',
        'ぐ',
    ],
    'け': [
        'け',
        'げ',
    ],
    'こ': [
        'こ',
        'ご',
    ],
    'さ': [
        'さ',
        'ざ',
    ],
    'し': [
        'し',
        'じ',
    ],
    'す': [
        'す',
        'ず',
    ],
    'せ': [
        'せ',
        'ぜ',
    ],
    'そ': [
        'そ',
        'ぞ',
    ],
    'た': [
        'た',
        'だ',
    ],
    'ち': [
        'ち',
        'ぢ',
    ],
    'つ': [
        'つ',
        'づ',
    ],
    'て': [
        'て',
        'で',
    ],
    'と': [
        'と',
        'ど',
    ],
    'は': [
        'は',
        'ば',
        'ぱ',
    ],
    'ひ': [
        'ひ',
        'び',
        'ぴ',
    ],
    'ふ': [
        'ふ',
        'ぶ',
        'ぷ',
    ],
    'へ': [
        'へ',
        'べ',
        'ぺ',
    ],
    'ほ': [
        'ほ',
        'ぼ',
        'ぽ',
    ],
    //------------------
    'カ': [
        'カ',
        'ガ',
    ],
    'キ': [
        'キ',
        'ギ',
    ],
    'ク': [
        'ク',
        'グ',
    ],
    'ケ': [
        'ケ',
        'ゲ',
    ],
    'コ': [
        'コ',
        'ゴ',
    ],
    'サ': [
        'サ',
        'ザ',
    ],
    'シ': [
        'シ',
        'ジ',
    ],
    'ス': [
        'ス',
        'ズ',
    ],
    'セ': [
        'セ',
        'ゼ',
    ],
    'ソ': [
        'ソ',
        'ゾ',
    ],
    'タ': [
        'タ',
        'ダ',
    ],
    'チ': [
        'チ',
        'ヂ',
    ],
    'ツ': [
        'ツ',
        'ヅ',
    ],
    'テ': [
        'テ',
        'デ',
    ],
    'ト': [
        'ト',
        'ド',
    ],
    'ハ': [
        'ハ',
        'バ',
        'パ',
    ],
    'ヒ': [
        'ヒ',
        'ビ',
        'ピ',
    ],
    'フ': [
        'フ',
        'ブ',
        'プ',
    ],
    'ヘ': [
        'ヘ',
        'ベ',
        'ペ',
    ],
    'ホ': [
        'ホ',
        'ボ',
        'ポ',
    ],
};
/**
 * 清濁音
 * 'string' => [清音, 濁音, 半濁音]
 */
exports.table_voice = Object.freeze(_buildTablePlus(table_voice_core));
var EnumTableVoice;
(function (EnumTableVoice) {
    /**
     * 清音
     */
    EnumTableVoice[EnumTableVoice["01"] = 0] = "01";
    /**
     * 濁音
     */
    EnumTableVoice[EnumTableVoice["02"] = 1] = "02";
    /**
     * 半濁音
     */
    EnumTableVoice[EnumTableVoice["03"] = 2] = "03";
})(EnumTableVoice = exports.EnumTableVoice || (exports.EnumTableVoice = {}));
function hasVoiceTable(char) {
    return (exports.table_voice[char] && exports.table_voice[char].length) || 0;
}
exports.hasVoiceTable = hasVoiceTable;
function _get(char, idx) {
    if (!char.length) {
        throw new TypeError(`char: '${char}', not valid`);
    }
    else if (idx !== 0 /* '01' */ && idx !== 1 /* '02' */ && idx !== 2 /* '03' */) {
        throw new TypeError(`char: '${char}', not valid`);
    }
    if (exports.table_voice[char]) {
        return exports.table_voice[char][idx];
    }
}
exports._get = _get;
/**
 * 清濁音
 * [清音, 濁音, 半濁音]
 */
function getVoiceAll(char) {
    return exports.table_voice[char];
}
exports.getVoiceAll = getVoiceAll;
/**
 * 清音
 */
function toVoice01(char) {
    return _get(char, 0 /* '01' */);
}
exports.toVoice01 = toVoice01;
/**
 * 濁音
 */
function toVoice02(char) {
    return _get(char, 1 /* '02' */);
}
exports.toVoice02 = toVoice02;
/**
 * 半濁音
 */
function toVoice03(char) {
    return _get(char, 2 /* '03' */);
}
exports.toVoice03 = toVoice03;
function _buildTablePlus(table_plus) {
    Object.keys(table_plus)
        .forEach(function (key) {
        table_plus[key] = Object.freeze(array_hyper_unique_1.array_unique(table_plus[key]));
        table_plus[key].forEach(function (s) {
            table_plus[s] = table_plus[key];
        });
    });
    // @ts-ignore
    return table_plus;
}
exports._buildTablePlus = _buildTablePlus;
/**
 * 清濁音
 * [清音, 濁音, 半濁音]
 */
exports.default = getVoiceAll;
//# sourceMappingURL=table_voice.js.map