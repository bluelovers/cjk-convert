import { toStrTable, toStrTableArray } from '../lib/util/strtable';
import { table_tw2cn, table_cn2tw } from '../lib/zh/convert/table';
import { SAFE_MODE_CHAR_MIN } from '../lib/zh/convert/min';
import fs from 'fs-extra';
import path from 'path';
import { table_cn2tw_plus, table_tw2cn_plus, table_cn2tw_min_plus, table_tw2cn_min_plus } from '../lib/zh/convert/table_plus';

let build_path = path.join(__dirname, '../build');

(async () =>
{
	await build('table_tw2cn', table_tw2cn, table_tw2cn_plus);

	await new Promise(function (done)
	{
		setImmediate(done);
	});

	await build('table_cn2tw', table_cn2tw, table_cn2tw_plus);

	await buildDebug('table_tw2cn', table_tw2cn, table_cn2tw, table_tw2cn_plus, table_tw2cn_min_plus);
	await buildDebug('table_cn2tw', table_cn2tw, table_tw2cn, table_cn2tw_plus, table_cn2tw_min_plus);
})();

async function buildDebug(name: string, table1: {
	[k: string]: string,
}, table2: {
	[k: string]: string,
}, table_plus?: {
	[k: string]: string,
}, table_min_plus?: {
	[k: string]: string,
})
{
	let out = Object.entries(table1)
		.sort(function (a, b)
		{
			return a[0].codePointAt(0) - b[0].codePointAt(0)
		})
		.reduce(function (a, b)
		{
			let [from, to] = b;

			if (SAFE_MODE_CHAR_MIN.includes(from) || from !== table2[to] || table2[from] || (to in table1 && (table1[to] != from)))
			{
				a.unsafe[from] = to;
			}
			else
			{
				a.safe[from] = to;
			}

			return a;
		}, {
			safe: {},
			unsafe: {},
		})
	;

	if (table_plus)
	{
		Object.assign(out.safe, table_plus);
	}

	if (table_min_plus)
	{
		Object.assign(out.safe, table_min_plus);
	}

	let t1 = toStrTableArray(out.safe, {
		coreJs: true,
		ignore: true,
	});

	let t2 = toStrTableArray(out.safe);

	let path_out = path.join(
		build_path,
		'zh/convert/',
	);

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

function build(name: string, table: {
	[k: string]: string,
}, table_plus?: {
	[k: string]: string,
})
{
	let table2 = Object.entries(table)
		.reduce(function (a, b)
		{
			let [from, to] = b;

			a[from] = to;

			return a;
		}, {})
	;

	if (table_plus)
	{
		Object.assign(table2, table_plus);
	}

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

	let path_out = path.join(
		build_path,
		'zh/convert/',
	);

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
