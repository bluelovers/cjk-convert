"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strtable_1 = require("../lib/util/strtable");
const index_1 = require("../lib/zh/convert/index");
const fs = require("fs-extra");
const path = require("path");
let build_path = path.join(__dirname, '../build');
(async () => {
    await build('zh/convert/table_tw2cn', index_1.table_tw2cn);
    await build('zh/convert/table_cn2tw', index_1.table_cn2tw);
})();
function build(name, table) {
    let t1 = strtable_1.toStrTable(table, {
        coreJs: true,
        ignore: true,
    });
    let t2 = strtable_1.toStrTable(table);
    console.log(`build: ${name} ${Object.keys(table).length}, ${t1.from.length == t2.from.length}`);
    return Promise.all([
        fs.outputJSON(path.join(build_path, `${name}.json`), table, {
            spaces: "\t",
        }),
        fs.outputFile(path.join(build_path, `${name}.from.txt`), t1.from),
        fs.outputFile(path.join(build_path, `${name}.to.txt`), t1.to),
        fs.outputFile(path.join(build_path, `${name}.from.unsafe.txt`), t2.from),
        fs.outputFile(path.join(build_path, `${name}.to.unsafe.txt`), t2.to),
    ]);
}
