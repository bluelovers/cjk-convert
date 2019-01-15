/**
 * Created by user on 2018/6/10/010.
 */

import zhTable, { IOptions as IOptionsZhTable } from './index';
import { IOptions as IOptionsCjkConv } from '../convert';
import CjkConv from '../..';
import { default as zhConvert, tw2cn, cn2tw } from '../../zh/convert/index';
import { default as jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp } from '../../jp/index';

import UString from 'uni-string';

export type IOptions = {
	optionsZhTable?: IOptionsZhTable,
	skip?,

	lang?: 'zh' | 'cn' | 'jp' | 'auto' | string,
}

/**
 *
 * @example
 * ```
 * charTableList('司马')
 * // => [ [ '司' ], [ '馬', '马' ] ]
 * ```
 */
export function charTableList(text: string, options: IOptions = {}): string[][]
{
	let a = UString.split(text, '');

	options = Object.assign({}, options);
	let optionsZhTable: IOptionsZhTable = Object.assign({
		safe: true,
		skip: options.skip,
	}, options.optionsZhTable);

	let fn = zhTable[options.lang || 'auto'];

	return a
		.reduce(function (a, c)
		{
			// @ts-ignore
			a.push(fn(c, optionsZhTable));

			return a;
		}, [])
		;
}

/**
 *
 * @example
 * textList('司马')
 * // => [ '司馬', '司马' ]
 */
export function textList(text: string, options: IOptions = {}): string[]
{
	let aa = [];

	let arr = charTableList(text, options);

	if (arr.length <= 1)
	{
		if (Array.isArray(arr[0]))
		{
			// @ts-ignore
			arr = arr[0];
		}

		// @ts-ignore
		return arr;
	}

	arr
		.forEach(function (v, index, arr)
		{
			f(v, '', index, arr);
		})
	;

	function f(v: string[], str = '', index, arr, depth = 0)
	{
		return v.reduce(function (a, c)
		{
			let s = str + c;
			let i = index + 1;

			if (i < arr.length)
			{
				let r = f(arr[i], s, i, arr, depth + 1);
			}
			else if ((depth + 1) == arr.length)
			{
				//console.log(777, s, [str, c], index, depth);

				aa.push(s);
			}

			return a
		}, [])
	}

	aa.sort();

	return aa;
}

/**
 * @example
 * arrCjk(['司马', '上官', '欧阳', '夏侯'])
 * // => [ '司马', '上官', '欧阳', '夏侯', '司馬', '歐陽', '欧陽' ]
 */
export function arrCjk(arr: string[], options: IOptionsCjkConv = {}): string[]
{
	return arr
	// @ts-ignore
		.concat(arr.map(w(cjk2zht)))
		// @ts-ignore
		.concat(arr.map(w(cn2tw)))
		// @ts-ignore
		.concat(arr.map(w(cjk2zhs)))
		// @ts-ignore
		.concat(arr.map(w(cjk2jp)))
		.filter(function (value, index, array)
		{
			return array.indexOf(value) == index;
		})
		;

	function w(fn, ...argv)
	{
		return function (s)
		{
			return fn(s, options);
		}
	}
}

export default exports as typeof import('./list');
