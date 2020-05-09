"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyAll = exports.jp2zh = exports.zh2jp = exports.zhs2jp = exports.zht2jp = exports.jp2zhs = exports.jp2zht = exports._fromA2B = void 0;
/**
 * Created by user on 2019/7/26.
 */
const core_1 = require("./core");
const array_hyper_unique_1 = require("array-hyper-unique");
function _fromA2B(char, from, to, options = {}) {
    const _table = options && options.safe ? core_1.TABLE_SAFE : core_1.TABLE;
    if (_table[from] && _table[to]) {
        let list = [];
        if (_table[from][char]) {
            if (_table[from][char][to]) {
                list.push(_table[from][char][to]);
            }
            Object.values(_table[to])
                .forEach(row => {
                if (row[from] === char && row[to]) {
                    list.push(row[to]);
                }
            });
            if (options && options.includeSelf) {
                list.push(char);
            }
            list = array_hyper_unique_1.array_unique_overwrite(list);
        }
        return list;
    }
    throw new RangeError(`${from}, ${to} is not exists in TABLE`);
}
exports._fromA2B = _fromA2B;
function jp2zht(char, options) {
    return _fromA2B(char, core_1.KEY_JP, core_1.KEY_ZHT, options);
}
exports.jp2zht = jp2zht;
function jp2zhs(char, options) {
    return _fromA2B(char, core_1.KEY_JP, core_1.KEY_ZHS, options);
}
exports.jp2zhs = jp2zhs;
function zht2jp(char, options) {
    return _fromA2B(char, core_1.KEY_ZHT, core_1.KEY_JP, options);
}
exports.zht2jp = zht2jp;
function zhs2jp(char, options) {
    return _fromA2B(char, core_1.KEY_ZHS, core_1.KEY_JP, options);
}
exports.zhs2jp = zhs2jp;
function zh2jp(char, options) {
    let arr = zht2jp(char, options)
        .concat(zhs2jp(char, options));
    return array_hyper_unique_1.array_unique_overwrite(arr);
}
exports.zh2jp = zh2jp;
function jp2zh(char, options) {
    let arr = jp2zht(char, options)
        .concat(jp2zhs(char, options));
    return array_hyper_unique_1.array_unique_overwrite(arr);
}
exports.jp2zh = jp2zh;
function lazyAll(char, options) {
    let arr = zh2jp(char, options)
        .reduce((a, b) => {
        a.push(b, ...jp2zh(b, options));
        return a;
    }, [])
        .concat(jp2zh(char, options)
        .reduce((a, b) => {
        a.push(b, ...zh2jp(b, options));
        return a;
    }, []));
    return array_hyper_unique_1.array_unique_overwrite(arr);
}
exports.lazyAll = lazyAll;
exports.default = exports;
//# sourceMappingURL=list.js.map