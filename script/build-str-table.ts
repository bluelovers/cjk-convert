import { toStrTable } from '../lib/util/strtable';
import { table_tw2cn, table_cn2tw } from '../lib/zh/convert/index';
import * as fs from 'fs-extra';
import * as path from 'path';

let build_path = path.join(__dirname, '../build');

(async () =>
{
	await build('zh/convert/table_tw2cn', table_tw2cn);
	await build('zh/convert/table_cn2tw', table_cn2tw);
})();

function build(name: string, table: {
	[k: string]: string,
})
{
	let t1 = toStrTable(table, {
		coreJs: true,
		ignore: true,
	});

	let t2 = toStrTable(table);

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
