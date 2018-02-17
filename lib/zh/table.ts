/**
 * Created by user on 2018/2/17/017.
 */

import { tw2cn, cn2tw } from './convert/index';

let _table_tw = {
	'罗': '羅',
	'恶': '惡',
};

export const table_jp = {
	'の': [
		'之',
		'的',
	],
	'劍': [
		'劍',
		'剑',
		'剣',
	],
	'剣': [
		'劍',
		'剑',
		'剣',
	],
	'画': [
		'划',
		'画',
		'劃',
		'畫',
	],
	'砲': [
		'砲',
		'炮',
	],
	'炮': [
		'砲',
		'炮',
	],
};

let _table_cn = Object.keys(_table_tw)
	.reduce(function (a, b)
	{
		a[_table_tw[b]] = b;

		return a;
	}, {})
;

export function _get(arr: string[], value: string | string[], ...values: Array<string | string[]>)
{
	let ret = []
		.concat(value)
		.concat(...values)
		.filter(function (v)
		{
			return v;
		})
	;

	ret.sort();

	return ret;
}

export function jp(char): string[]
{
	return table_jp[char].slice();
}

export function tw(char): string[]
{
	let a: string[] = [];

	/*
	if (_table_tw[char])
	{
		a.push(_table_tw[char])
	}
	a.push(cn2tw(char));
	*/

	a = _get(a, _table_tw[char], cn2tw(char));

	//console.log('cn2tw', char, a);

	return a;
}

export function cn(char): string[]
{
	let a: string[] = [];

	/*
	if (_table_cn[char])
	{
		a.push(_table_cn[char])
	}

	a.push(tw2cn(char));
	*/
	a = _get(a, _table_cn[char], tw2cn(char));

	//console.log('tw2cn', char, a);

	return a;
}

import * as self from './table';
export default self;
