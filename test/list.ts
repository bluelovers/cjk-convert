/**
 * Created by user on 2018/6/21/021.
 */

import { array_unique } from 'array-hyper-unique';
import { _word_zh_core } from 'regexp-cjk/lib/conv';
import { jp2zhs, jp2zht, zh2jp } from '../lib/jp/core';
import { charTableList, textList, slugify } from '../lib/zh/table/list';
import { cn2tw, tw2cn } from '../lib/zh/convert';
import libTable from '../lib/zh/table';
import { cn2tw_min, tw2cn_min } from '../lib/zh/convert/min';
import { zhRegExp } from 'regexp-cjk';
import UString = require('uni-string');

let word = `制製`;

word = array_unique(word.split('')).join('');

console.log(`zhRegExp\n`, new zhRegExp(word));
console.log(`zhRegExp Unicode\n`, new zhRegExp(word, 'u'));

console.log(`zhRegExp greedyTable\n`, new zhRegExp(word, 'u', {
	greedyTable: true,
}));

console.log('charTableList\n', charTableList(word));
console.log('textList\n', textList(word));

console.log('libTable.auto\n', _table_each(word, libTable.auto));
console.log('libTable.tw\n', _table_each(word, libTable.tw));
console.log('libTable.cn\n', _table_each(word, libTable.cn));
console.log('libTable.jp\n', _table_each(word, libTable.jp));

console.log('libTable.auto greedyTable\n', _table_each(word, (s) => {
	return libTable.auto(s, {
		greedyTable: true,
	})
}));

console.log('cn2tw', cn2tw(word));
console.log('tw2cn', tw2cn(word));

console.log('cn2tw_min', cn2tw_min(word));
console.log('tw2cn_min', tw2cn_min(word));

console.log('jp2zht', jp2zht(word));
console.log('jp2zhs', jp2zhs(word));
console.log('zh2jp', zh2jp(word));

console.log('slugify', slugify(word));
console.log('slugify true', slugify(word, true));

function _table_each(word: string, fn: (char: string) => string[])
{
	return array_unique(UString.split(word, '')
		.reduce(function (a, b)
		{
			a.push(...fn(b));

			return a;
		}, [] as string[]))
}
