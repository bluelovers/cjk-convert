"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strtable_1 = require("../lib/util/strtable");
const index_1 = require("../lib/zh/convert/index");
const min_1 = require("../lib/zh/convert/min");
const fs = require("fs-extra");
const path = require("path");
let build_path = path.join(__dirname, '../build');
(async () => {
    await build('table_tw2cn', index_1.table_tw2cn);
    await new Promise(function (done) {
        setImmediate(done);
    });
    await build('table_cn2tw', index_1.table_cn2tw);
    await buildDebug('table_tw2cn', index_1.table_tw2cn, index_1.table_cn2tw);
    await buildDebug('table_cn2tw', index_1.table_cn2tw, index_1.table_tw2cn);
})();
async function buildDebug(name, table1, table2) {
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
    let t1 = strtable_1.toStrTableArray(out.safe, {
        coreJs: true,
        ignore: true,
    });
    let t2 = strtable_1.toStrTableArray(out.safe);
    let path_out = path.join(build_path, 'zh/convert/');
    let ID = 'safe';
    return Promise.all([
        fs.outputFile(path.join(path_out, ID, `${name}.base.from.txt`), t1.from.join('')),
        fs.outputFile(path.join(path_out, ID, `${name}.base.to.txt`), t1.to.join('')),
        fs.outputFile(path.join(path_out, ID, `${name}.unicode.from.txt`), t2.from.join('')),
        fs.outputFile(path.join(path_out, ID, `${name}.unicode.to.txt`), t2.to.join('')),
        fs.outputJSON(path.join(path_out, `${name}.debug.json`), out, {
            spaces: "\t",
        })
    ]);
}
function build(name, table) {
    let table2 = Object.entries(table)
        .reduce(function (a, b) {
        let [from, to] = b;
        a[from] = to;
        return a;
    }, {});
    let t1 = strtable_1.toStrTableArray(table2, {
        coreJs: true,
        ignore: true,
    });
    let t2 = strtable_1.toStrTableArray(table2);
    console.log(`build: ${name}
table1 : ${Object.keys(table).length}
table2 : ${Object.keys(table2).length}
base   : ${t1.from.length}
unicode: ${t2.from.length}`);
    let path_out = path.join(build_path, 'zh/convert/');
    let ID = 'unsafe';
    return Promise.all([
        fs.outputJSON(path.join(path_out, `${name}.json`), table2, {
            spaces: "\t",
        }),
        fs.outputFile(path.join(path_out, ID, `${name}.base.from.txt`), t1.from.join('')),
        fs.outputFile(path.join(path_out, ID, `${name}.base.to.txt`), t1.to.join('')),
        fs.outputFile(path.join(path_out, ID, `${name}.unicode.from.txt`), t2.from.join('')),
        fs.outputFile(path.join(path_out, ID, `${name}.unicode.to.txt`), t2.to.join('')),
    ]);
}
