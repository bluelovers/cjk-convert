"use strict";
/**
 * Created by user on 2018/2/15/015.
 *
 * same as chinese_convert, but a little bug fix
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _table_cn2tw = require("chinese_convert/cn2tw");
const _table_tw2cn = require("chinese_convert/tw2cn");
//import { cn2tw as _cn2tw, tw2cn as _tw2cn } from 'chinese_convert';
const core_1 = require("./core");
exports._call = core_1._call;
exports.defaultOptions = core_1.defaultOptions;
exports.getOptions = core_1.getOptions;
exports.getOptionsSkip = core_1.getOptionsSkip;
exports.REGEXP_TEST = core_1.REGEXP_TEST;
exports.SAFE_MODE_CHAR = core_1.SAFE_MODE_CHAR;
const zhConvert = require("./index");
const wikipedia_1 = require("./wikipedia");
function cn2tw(text, options = {}, ...argv) {
    return core_1._call(core_1._cn2tw, text, options, ...argv);
}
exports.cn2tw = cn2tw;
function tw2cn(text, options = {}, ...argv) {
    return core_1._call(core_1._tw2cn, text, options, ...argv);
}
exports.tw2cn = tw2cn;
exports.table_cn2tw = Object.assign(_table_cn2tw, wikipedia_1.wiki_s2t_v2, {
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
    '谑': '謔',
    '谘': '諮',
    '干': '幹',
    '线': '線',
    '缐': '線',
    '尽': '盡',
});
exports.table_tw2cn = Object.assign(_table_tw2cn, wikipedia_1.wiki_t2s_v2, {
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
    '禦': '御',
    '謔': '谑',
    '餘': '馀',
    '范': '范',
    '朴': '朴',
    '咨': '咨',
    '諮': '谘',
    '齣': '齣',
    '線': '线',
    '綫': '线',
    '儘': '尽',
    '盡': '尽',
});
[
    // 從轉換表中刪除的字
    '処',
    //'佘',
    '畲',
    '氹',
    '凼',
].forEach(function (v) {
    delete exports.table_tw2cn[v];
    delete exports.table_cn2tw[v];
});
[
    // 從 簡體轉換表內刪除的字
    '鉅',
].forEach(function (v) {
    delete exports.table_cn2tw[v];
});
[
    // 從繁體轉換表內刪除的字
    '钜',
    // 加入 wikipedia.ts 後 產生的冷門字
    '党',
    '万',
    '与',
].forEach(function (v) {
    delete exports.table_tw2cn[v];
});
Object
    .entries({
    '餵': '𫗭',
    '餧': '𫗪',
})
    .forEach(function (v) {
    let [t, s] = v;
    exports.table_tw2cn[t] = s;
    exports.table_cn2tw[s] = t;
});
[
    // 不轉換的共用字
    '札',
    '谷',
    '污',
    '汙',
    '游',
    '遊',
    '伙',
    '夥',
    '御',
    '郁',
    '咔',
    '哢',
    '凌',
    '淩',
    '扎',
    '紮',
    '痴',
    '癡',
    '咸',
    '准',
    '棲',
    '栖',
    '嚯',
    '余',
    '薑',
    '姜',
    '扡',
    '扦',
    '捻',
    '撚',
    '遝',
    '沓',
    '淨',
    '栗',
    '挽',
    '灶',
    '竈',
    '霉',
    '黴',
].forEach(function (v) {
    exports.table_tw2cn[v] = v;
    exports.table_cn2tw[v] = v;
});
exports.default = zhConvert;
//console.log(cn2tw('轉换最里后裡後轉换最后'));
//console.log(tw2cn('轉换最里后裡後轉换最后'));
