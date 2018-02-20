/**
 * Created by user on 2018/2/17/017.
 */

import { tw2cn, cn2tw } from '../convert/index';
import { array_unique } from '../../util';

export let _table_tw = {
	'罗': '羅',
	'恶': '惡',
};

export let table_jp = {
	'の': [
		'之',
		'的',
	],
	'画': [
		'划',
		'画',
		'劃',
		'畫',
	],
};

export let table_plus = {
	'劍': [
		'劍',
		'剑',
		'剣',
		'劎',
		'劒',
		'剱',
		'劔',
	],
	'砲': [
		'砲',
		'炮',
	],
	'偽': [
		'偽',
		'僞',
	],
	'內': [
		'內',
		'内',
	],
	'鬥': [
		'鬭',
		'鬥',
		'鬭',
		'闘',
		//'斗',
	],
};

Object.keys(table_plus)
	.forEach(function (key)
	{
		table_plus[key] = array_unique(table_plus[key]);

		table_plus[key].forEach(function (s)
		{
			table_plus[s] = table_plus[key];
		})
	})
;

Object.assign(table_jp, table_plus);

//console.log(table_jp);

export interface ISimpleTable
{
	[key: string]: string,
}

export let _table_cn: ISimpleTable = _update({}, _table_tw);

export function _update(target: ISimpleTable, source: ISimpleTable): ISimpleTable
{
	target = Object.keys(source)
		.reduce(function (a, b)
		{
			a[source[b]] = b;

			return a;
		}, {})
	;

	return target;
}

export function _get(arr: string[], value: string | string[], ...values: Array<string | string[]>): string[]
{
	let ret: string[] = []
		.concat(value)
		.concat(...values)
		.filter(function (v)
		{
			return v;
		})
	;

	//ret.length && ret.sort();

	return ret;
}

export function jp(char: string): string[]
{
	let a: string[] = [];
	a = _get(a, table_jp[char]);

	return a;
	//return table_jp[char].slice();
}

export function tw(char: string): string[]
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

export function cn(char: string): string[]
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
