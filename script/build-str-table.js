"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const strtable_1 = require("../lib/util/strtable");
const table_1 = require("../lib/zh/convert/table");
const min_1 = require("../lib/zh/convert/min");
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const path_1 = tslib_1.__importDefault(require("path"));
const table_plus_1 = require("../lib/zh/convert/table_plus");
let build_path = path_1.default.join(__dirname, '../build');
(async () => {
    await build('table_tw2cn', table_1.table_tw2cn, table_plus_1.table_tw2cn_plus);
    await new Promise(function (done) {
        setImmediate(done);
    });
    await build('table_cn2tw', table_1.table_cn2tw, table_plus_1.table_cn2tw_plus);
    await buildDebug('table_tw2cn', table_1.table_tw2cn, table_1.table_cn2tw, table_plus_1.table_tw2cn_plus, table_plus_1.table_tw2cn_min_plus);
    await buildDebug('table_cn2tw', table_1.table_cn2tw, table_1.table_tw2cn, table_plus_1.table_cn2tw_plus, table_plus_1.table_cn2tw_min_plus);
})();
async function buildDebug(name, table1, table2, table_plus, table_min_plus) {
    let out = Object.entries(table1)
        .sort(function (a, b) {
        return a[0].codePointAt(0) - b[0].codePointAt(0);
    })
        .reduce(function (a, b) {
        let [from, to] = b;
        if (min_1.SAFE_MODE_CHAR_MIN.includes(from) || from !== table2[to] || table2[from] || (to in table1 && (table1[to] != from))) {
            a.unsafe[from] = to;
        }
        else {
            a.safe[from] = to;
        }
        return a;
    }, {
        safe: {},
        unsafe: {},
    });
    if (table_plus) {
        Object.assign(out.safe, table_plus);
    }
    if (table_min_plus) {
        Object.assign(out.safe, table_min_plus);
    }
    let t1 = (0, strtable_1.toStrTableArray)(out.safe, {
        coreJs: true,
        ignore: true,
    });
    let t2 = (0, strtable_1.toStrTableArray)(out.safe);
    let path_out = path_1.default.join(build_path, 'zh/convert/');
    let ID = 'safe';
    return Promise.all([
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.base.from.txt`), t1.from.join('')),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.base.to.txt`), t1.to.join('')),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.unicode.from.txt`), t2.from.join('')),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.unicode.to.txt`), t2.to.join('')),
        fs_extra_1.default.outputJSON(path_1.default.join(path_out, `${name}.debug.json`), out, {
            spaces: "\t",
        })
    ]);
}
function build(name, table, table_plus) {
    let table2 = Object.entries(table)
        .reduce(function (a, b) {
        let [from, to] = b;
        a[from] = to;
        return a;
    }, {});
    if (table_plus) {
        Object.assign(table2, table_plus);
    }
    let t1 = (0, strtable_1.toStrTableArray)(table2, {
        coreJs: true,
        ignore: true,
    });
    let t2 = (0, strtable_1.toStrTableArray)(table2);
    console.log(`build: ${name}
table1 : ${Object.keys(table).length}
table2 : ${Object.keys(table2).length}
base   : ${t1.from.length}
unicode: ${t2.from.length}`);
    let path_out = path_1.default.join(build_path, 'zh/convert/');
    let ID = 'unsafe';
    return Promise.all([
        fs_extra_1.default.outputJSON(path_1.default.join(path_out, `${name}.json`), table2, {
            spaces: "\t",
        }),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.base.from.txt`), t1.from.join('')),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.base.to.txt`), t1.to.join('')),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.unicode.from.txt`), t2.from.join('')),
        fs_extra_1.default.outputFile(path_1.default.join(path_out, ID, `${name}.unicode.to.txt`), t2.to.join('')),
    ]);
}
//# sourceMappingURL=build-str-table.js.map