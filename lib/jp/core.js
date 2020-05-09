"use strict";
/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 *
 * 目前只支援 簡繁日漢字 並非全 cjk 漢字支援
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._getdata = exports.init = exports.cjk2zhs = exports.cjk2zht = exports.cjk2jp = exports.zh2jp = exports.zhs2zht = exports.zht2zhs = exports.zht2jp = exports.zhs2jp = exports.jp2zhs = exports.jp2zht = exports.defaultOptions = exports.TABLE_SAFE = exports.TABLE = exports.KEY_ZHS = exports.KEY_ZHT = exports.KEY_JP = exports.ZHJP_TABLE_SAFE = exports.ZHJP_TABLE = void 0;
const util_1 = require("../util");
const table_1 = require("./table");
exports.ZHJP_TABLE = table_1.default;
Object.defineProperty(exports, "ZHJP_TABLE_SAFE", { enumerable: true, get: function () { return table_1.TABLE_SAFE; } });
const cjk_conv_1 = require("regexp-helper/lib/cjk-conv");
exports.KEY_JP = 'jp';
exports.KEY_ZHT = 'zht';
exports.KEY_ZHS = 'zhs';
let inited = false;
exports.defaultOptions = {
    safe: true,
};
// /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]+/u
const REGEXP_TEST = new RegExp(cjk_conv_1._re_cjk_conv('u').source + '+', 'u');
var _;
(function (_) {
    init();
    let langs = Object.keys(exports.TABLE);
    langs.forEach(function (from) {
        langs.forEach(function (to) {
            if (from == to)
                return;
            _[`${from}2${to}`] = function (str, options) {
                if (!REGEXP_TEST.test(str.toString())) {
                    return str;
                }
                options = Object.assign({}, exports.defaultOptions, options);
                return util_1.split(str)
                    .map(function (char) {
                    if (options.skip && options.skip.indexOf(char) != -1) {
                        return char;
                    }
                    let c;
                    if (c = _getdata(char, from, to, options.safe)) {
                        return c;
                    }
                    return char;
                })
                    .join('');
            };
        });
    });
})(_ || (_ = {}));
/**
 * only 只將 日文漢字 => 轉為繁漢字
 * @type {IFrom2To}
 */
exports.jp2zht = _.jp2zht;
/**
 * only 只將 日文漢字 => 轉為簡漢字
 * @type {IFrom2To}
 */
exports.jp2zhs = _.jp2zhs;
/**
 * only 簡漢字 => 轉為日漢字
 * @type {IFrom2To}
 */
exports.zhs2jp = _.zhs2jp;
/**
 * only 只將 繁漢字 => 轉為日文漢字
 * @type {IFrom2To}
 */
exports.zht2jp = _.zht2jp;
/**
 * only 只將簡繁日 當中共通的 繁漢字 => 轉為簡漢字
 * 請勿作為簡繁轉換用
 * @type {IFrom2To}
 */
exports.zht2zhs = _.zht2zhs;
/**
 * only 只將簡繁日 當中共通的 簡漢字 => 轉為繁漢字
 * 請勿作為簡繁轉換用
 * @type {IFrom2To}
 */
exports.zhs2zht = _.zhs2zht;
/**
 * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
 *
 * @alias cjk2jp
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
function zh2jp(str, options) {
    if (!REGEXP_TEST.test(str.toString())) {
        return str;
    }
    options = Object.assign({}, exports.defaultOptions, options);
    return util_1.split(str)
        .map(function (char) {
        if (options.skip && options.skip.indexOf(char) != -1) {
            return char;
        }
        let c;
        if (c = _getdata(char, exports.KEY_ZHT, exports.KEY_JP, options.safe)) {
            return c;
        }
        else if (c = _getdata(char, exports.KEY_ZHS, exports.KEY_JP, options.safe)) {
            return c;
        }
        return char;
    })
        .join('');
}
exports.zh2jp = zh2jp;
/**
 * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
 *
 * @alias zh2jp
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
exports.cjk2jp = zh2jp;
/**
 * only 只將簡繁日 當中共通的 漢字 => 轉為繁體漢字
 * 請勿作為簡繁轉換用
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
function cjk2zht(str, options) {
    if (!REGEXP_TEST.test(str.toString())) {
        return str;
    }
    options = Object.assign({}, exports.defaultOptions, options);
    return util_1.split(str)
        .map(function (char) {
        if (options.skip && options.skip.indexOf(char) != -1) {
            return char;
        }
        let c;
        if (c = _getdata(char, exports.KEY_JP, exports.KEY_ZHT, options.safe)) {
            return c;
        }
        else if (c = _getdata(char, exports.KEY_ZHS, exports.KEY_ZHT, options.safe)) {
            return c;
        }
        return char;
    })
        .join('');
}
exports.cjk2zht = cjk2zht;
/**
 * only 只將簡繁日 當中共通的 漢字 => 轉為簡體漢字
 * 請勿作為簡繁轉換用
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
function cjk2zhs(str, options) {
    if (!REGEXP_TEST.test(str.toString())) {
        return str;
    }
    options = Object.assign({}, exports.defaultOptions, options);
    return util_1.split(str)
        .map(function (char) {
        if (options.skip && options.skip.indexOf(char) != -1) {
            return char;
        }
        let c;
        if (c = _getdata(char, exports.KEY_JP, exports.KEY_ZHS, options.safe)) {
            return c;
        }
        else if (c = _getdata(char, exports.KEY_ZHT, exports.KEY_ZHS, options.safe)) {
            return c;
        }
        return char;
    })
        .join('');
}
exports.cjk2zhs = cjk2zhs;
//import * as fs from 'fs-extra';
//fs.outputJSON('./teachKanjiComparison.cache.json', TABLE, {
//	spaces: "\t",
//});
//fs.outputJSON('./teachKanjiComparison.cache2.json', TABLE_SAFE, {
//	spaces: "\t",
//});
//
//console.log(zhs2jp(1));
//
//let t = '魔物解説　ランク等話　蚀蝕蝕王で触王 冒険者ギルド解説 蚀|蝕战|戦马|馬亚|亞國預中日漢字對照表'
//
//console.log(zh2jp(t));
//console.log(zht2jp(t));
//console.log(zhs2jp(t));
//
//console.log(zht2zhs(t));
//console.log(zhs2zht(t));
function init(overwrite) {
    if (inited && !overwrite) {
        return exports.TABLE;
    }
    exports.TABLE = _(table_1.default);
    exports.TABLE_SAFE = _(table_1.TABLE_SAFE);
    function _(src) {
        let to = {};
        to[exports.KEY_JP] = {};
        to[exports.KEY_ZHT] = {};
        to[exports.KEY_ZHS] = {};
        src.forEach(function (vrow) {
            let [jp, zht, zhs] = vrow;
            let k = exports.KEY_JP;
            for (let c of jp) {
                if (!c || to[k][c]) {
                    continue;
                }
                to[k][c] = to[k][c] || {};
                to[k][c][k] = c;
                to[k][c][exports.KEY_ZHT] = zht[0];
                to[k][c][exports.KEY_ZHS] = zhs[0];
            }
            k = exports.KEY_ZHT;
            for (let c of zht) {
                if (!c || to[k][c]) {
                    continue;
                }
                to[k][c] = to[k][c] || {};
                to[k][c][exports.KEY_JP] = jp[0];
                to[k][c][k] = c;
                to[k][c][exports.KEY_ZHS] = zhs[0];
            }
            k = exports.KEY_ZHS;
            for (let c of zhs) {
                if (!c || to[k][c]) {
                    continue;
                }
                to[k][c] = to[k][c] || {};
                to[k][c][exports.KEY_JP] = jp[0];
                to[k][c][exports.KEY_ZHT] = zht[0];
                to[k][c][k] = c;
            }
        });
        // @ts-ignore
        return to;
    }
    inited = true;
    return exports.TABLE;
}
exports.init = init;
function _getdata(char, from, to, safe) {
    if (safe) {
        return (exports.TABLE_SAFE[from][char]) ? exports.TABLE_SAFE[from][char][to] : null;
    }
    return (exports.TABLE[from][char]) ? exports.TABLE[from][char][to] : null;
}
exports._getdata = _getdata;
exports.default = exports;
//# sourceMappingURL=core.js.map