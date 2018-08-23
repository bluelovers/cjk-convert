"use strict";
/**
 * Created by user on 2018/2/17/017.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./lib/index"));
const index_1 = require("./lib/index");
exports.cjkConv = index_1.default;
var package_json_1 = require("./package.json");
exports.version = package_json_1.version;
exports.default = index_1.default;
