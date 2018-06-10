/**
 * Created by user on 2017/12/24/024.
 *
 * @see https://www.jcinfo.net/tw/tools/kanji
 * @see http://dict.variants.moe.edu.tw/variants/rbt/japan_chinese_character_tiles.rbt?pageId=2981908
 * @see https://en.wikipedia.org/wiki/List_of_j%C5%8Dy%C5%8D_kanji
 * @see https://hanzi.unihan.com.cn/CJKCompare
 * @see http://www5b.biglobe.ne.jp/%7Eharigaya/variants.html
 */

import { array_unique } from '../util';

/**
 * 資料來源 https://www.jpmarumaru.com/tw/teachKanjiComparison.asp
 * @see https://www.jpmarumaru.com/tw/teachKanjiComparison.asp
 */
// @ts-ignore
import teachKanjiComparison = require('./teachKanjiComparison.json');

type IPLUS_TABLE = [string, string, string][];

const PLUS_TABLE: IPLUS_TABLE = array_unique<IPLUS_TABLE>([
	['蝕', '蝕', '蚀'],
	["絲", "絲", "丝"],
	["異", "異", "异"],
	["謎", "謎", "谜"],
	["氷", "冰", "冰"],

	// http://www.kanjipedia.jp/kanji/0003297700
	["詛", "詛", "诅"],
	//['戻', '戾', null],

	// https://kotobank.jp/word/%E8%B2%AA%E5%A9%AA-564803
	["貪", "貪", "贪"],

	["館", "館", "馆"],

	["画", "劃", "划"],

	["誰", "誰", "谁"],

	["鶏", "雞", "鸡"],

	["宮", "宮", "宫"],

	["殻", "殻", "壳"],

	["館", "館", "馆"],

	["槍", "槍", "枪"],

	//["兎", "兔", "兔"],
	//["兔", "兔", "兔"],

	['静', '靜', '静'],

	['髪', '髮', null],

	['棄', '棄', '弃'],
	['強', '強', '强'],

	['罵', '罵', '骂'],

]);

const PLUS_TABLE_SAFE: IPLUS_TABLE = array_unique([

	["歴", "歷", "历"],
	["絶", "絕", "绝"],
	["別", "別", "别"],
	["魯", "魯", "鲁"],

] as IPLUS_TABLE);

export let TABLE = [] as string[][];

PLUS_TABLE.forEach(function ([jp, zht, zhs])
{
	addNew(TABLE, jp, zht, zhs);
});

// @ts-ignore
TABLE = array_unique(TABLE.concat(teachKanjiComparison));

export let TABLE_SAFE = [] as string[][];

{
	let skip = [
		'系',
		'欠',
		'凶',
		'后',
		'只',
		'隻',
		'无',
		'叶',
	];

	TABLE = TABLE.filter(function (v)
	{
		let [jp, zht, zhs] = v;

		if ((jp[0] == zht[0] && jp[0] == zhs[0]) || (skip.includes(jp[0]) || skip.includes(zht[0]) || skip.includes(zhs[0])))
		{
			return false;
		}

		return true;
	});

	TABLE_SAFE = [];

	PLUS_TABLE_SAFE.forEach(function ([jp, zht, zhs])
	{
		addNew(TABLE, jp, zht, zhs);
		addNew(TABLE_SAFE, jp, zht, zhs);
	});

	let cache = [];

	for (let i in TABLE)
	{
		if (cache.includes(i))
		{
			continue;
		}

		let [jp, zht, zhs] = TABLE[i];

		let _do = true;
		let j;

		for (j in TABLE)
		{
			if (j == i)
			{
				continue;
			}

			let [jp2, zht2, zhs2] = TABLE[j];

			if (zht.includes(zht2[0]))
			{
				_do = false;
				break;
			}

			if (zhs.includes(zhs2[0]))
			{
				_do = false;
				break;
			}
		}

		if (!_do)
		{
			cache.push(i);
			cache.push(j);

			//console.log(jp, zht, zhs);
		}
		else
		{
			TABLE_SAFE.push(TABLE[i]);
		}
	}
}

export function addNew(table: string[][], jp, zht, zhs): string[][]
{
	jp = Array.isArray(jp) ? jp : [jp];
	zht = Array.isArray(zht) ? zht : [zht];
	zhs = Array.isArray(zhs) ? zhs : [zhs];

	table.push([
		jp,
		zht,
		zhs,
	]);

	return table;
}

export default TABLE;
//export default exports;

if (0)
{
	// @ts-ignore
	import * as fs from 'fs';
	console.log(TABLE_SAFE);
	//fs.writeFileSync('./temp.json', JSON.stringify(TABLE_SAFE, null, "\t"));
}
