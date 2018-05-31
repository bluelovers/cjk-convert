"use strict";
/**
 * Created by user on 2017/12/9/009.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const uni_string_1 = require("uni-string");
var array_hyper_unique_1 = require("array-hyper-unique");
exports.array_unique = array_hyper_unique_1.array_unique;
exports.lazy_unique = array_hyper_unique_1.lazy_unique;
/*
export function array_unique<T>(array: T): T
{
    return arrUniq(array);

    return (array).filter(function (el, index, arr)
    {
        return index == arr.indexOf(el);
    });

}
*/
function split(str) {
    return uni_string_1.default.split(str, '');
    //return str.toString().split('');
}
exports.split = split;
function charCodeAt(str, cb) {
    let ret = [];
    if (typeof cb !== 'function') {
        cb = void (0);
    }
    let _str = Array.isArray(str) ? str : str.toString();
    for (let char of _str) {
        let charCode = char.charCodeAt();
        let r;
        if (cb && (r = cb(char, charCode, str), typeof r != 'undefined')) {
            if (!r) {
                continue;
            }
            else if (Array.isArray(r)) {
                ret = ret.concat(r);
                continue;
            }
        }
        ret.push(charCode);
    }
    return ret;
}
exports.charCodeAt = charCodeAt;
const self = require("./util");
exports.default = self;
