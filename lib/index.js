"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./zh/convert/index");
exports.zhConvert = index_1.default;
exports.tw2cn = index_1.tw2cn;
exports.cn2tw = index_1.cn2tw;
var index_2 = require("./zh/table/index");
exports.zhTable = index_2.default;
var index_3 = require("./jp/index");
exports.jpConvert = index_3.default;
exports.zh2jp = index_3.zh2jp;
exports.jp2zht = index_3.jp2zht;
exports.jp2zhs = index_3.jp2zhs;
exports.cjk2zht = index_3.cjk2zht;
exports.cjk2zhs = index_3.cjk2zhs;
exports.cjk2jp = index_3.cjk2jp;
var filename_1 = require("./novel/filename");
exports.novelFilename = filename_1.default;
const cjkConv = require("./index");
exports.default = cjkConv;
