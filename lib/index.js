"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.novelFilename = exports.cjk2jp = exports.cjk2zhs = exports.cjk2zht = exports.jp2zhs = exports.jp2zht = exports.zh2jp = exports.jpConvert = exports.zhTable = exports.cn2tw = exports.tw2cn = exports.zhConvert = void 0;
var index_1 = require("./zh/convert/index");
Object.defineProperty(exports, "zhConvert", { enumerable: true, get: function () { return __importDefault(index_1).default; } });
Object.defineProperty(exports, "tw2cn", { enumerable: true, get: function () { return index_1.tw2cn; } });
Object.defineProperty(exports, "cn2tw", { enumerable: true, get: function () { return index_1.cn2tw; } });
var index_2 = require("./zh/table/index");
Object.defineProperty(exports, "zhTable", { enumerable: true, get: function () { return __importDefault(index_2).default; } });
var index_3 = require("./jp/index");
Object.defineProperty(exports, "jpConvert", { enumerable: true, get: function () { return __importDefault(index_3).default; } });
Object.defineProperty(exports, "zh2jp", { enumerable: true, get: function () { return index_3.zh2jp; } });
Object.defineProperty(exports, "jp2zht", { enumerable: true, get: function () { return index_3.jp2zht; } });
Object.defineProperty(exports, "jp2zhs", { enumerable: true, get: function () { return index_3.jp2zhs; } });
Object.defineProperty(exports, "cjk2zht", { enumerable: true, get: function () { return index_3.cjk2zht; } });
Object.defineProperty(exports, "cjk2zhs", { enumerable: true, get: function () { return index_3.cjk2zhs; } });
Object.defineProperty(exports, "cjk2jp", { enumerable: true, get: function () { return index_3.cjk2jp; } });
var filename_1 = require("./novel/filename");
Object.defineProperty(exports, "novelFilename", { enumerable: true, get: function () { return __importDefault(filename_1).default; } });
exports.default = exports;
//# sourceMappingURL=index.js.map