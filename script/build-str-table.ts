import { toStrTable, toStrTableArray } from '../lib/util/strtable';
import { table_tw2cn, table_cn2tw } from '../lib/zh/convert/index';
import * as fs from 'fs-extra';
import * as path from 'path';

let build_path = path.join(__dirname, '../build');

(async () =>
{
	await build('zh/convert/table_tw2cn', table_tw2cn);

	await new Promise(function (done)
	{
		setImmediate(done);
	});

	await build('zh/convert/table_cn2tw', table_cn2tw);
})();

function build(name: string, table: {
	[k: string]: string,
})
{
	let table2 = Object.keys(table)
		.reduce(function (a, from)
		{
			let to = table[from];

			if (from !== to)
			{
				a[from] = to;
			}
			else
			{
				console.error(`skip ${from}`);
			}

			return a;
		}, {})
	;

	let t1 = toStrTableArray(table2, {
		coreJs: true,
		ignore: true,
	});

	let t2 = toStrTableArray(table2);

	console.log(`build: ${name}
table1 : ${Object.keys(table).length}
table2 : ${Object.keys(table2).length}
base   : ${t1.from.length}
unicode: ${t2.from.length}`);

	return Promise.all([
		fs.outputJSON(path.join(build_path, `${name}.json`), table2, {
			spaces: "\t",
		}),
		fs.outputFile(path.join(build_path, `${name}.base.from.txt`), t1.from.join('')),
		fs.outputFile(path.join(build_path, `${name}.base.to.txt`), t1.to.join('')),
		fs.outputFile(path.join(build_path, `${name}.unicode.from.txt`), t2.from.join('')),
		fs.outputFile(path.join(build_path, `${name}.unicode.to.txt`), t2.to.join('')),
	]);
}
