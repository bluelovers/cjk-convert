/**
 * Created by user on 2018/6/10/010.
 */

import zhTable, { IOptions as IOptionsZhTable } from './index';
import { IOptions as IOptionsCjkConv } from '../convert';
import CjkConv from '../..';
import { default as zhConvert, tw2cn, cn2tw } from '../../zh/convert/index';
import { default as jpConvert, zh2jp, jp2zht, jp2zhs, cjk2zht, cjk2zhs, cjk2jp } from '../../jp/index';

import UString from 'uni-string';
import { array_unique } from 'array-hyper-unique';

export type IOptions = {
	optionsZhTable?: IOptionsZhTable,
	skip?,

	lang?: 'cn' | 'jp' | 'auto' | string,
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

/**
 * 用來標準化字串 作為排序用
 */
export function slugify(input: string, options?: IOptions, unsafe2?: boolean): string
/**
 * 用來標準化字串 作為排序用
 */
export function slugify(input: string, unsafe2?: boolean): string
export function slugify(input: string, options: IOptions | boolean = {}, unsafe2?: boolean): string
{
	if (typeof options === 'boolean')
	{
		[unsafe2, options] = [options, {}];
	}

	options = (options || {}) as IOptions;

	options = {
		...options,
		optionsZhTable: {
			safe: false,
			greedyTable: true,
			...options.optionsZhTable,
		}
	};

	let arr: string[][];

	if (unsafe2)
	{
		let k = input
			.replace(/[噁悪惡]/g, '恶')
			.replace(/[繋繫係]/g, '系')
			.replace(/[糊鬍]/g, '胡')
			.replace(/[儅噹當]/g, '当')
			.replace(/[復複覆]/g, '复')
			.replace(/[囌蘇甦]/g, '苏')
			.replace(/[採彩睬踩埰綵䌽]/g, '采')
			.replace(/[囉啰羅㑩儸]/g, '罗')
			.replace(/[浏瀏劉]/g, '刘')
			.replace(/[劵卷巻捲]/g, '券')
			.replace(/[划劃畫]/g, '画')
			.replace(/[鬥闘鬭鬪]/g, '斗')
			.replace(/[乾亁乹幹]/g, '干')
			.replace(/[図图]/g, '圖')
			.replace(/[暦曆歴歷]/g, '历')
			.replace(/[麪麵麺]/g, '面')
			.replace(/[讃讚賛贊赞]/g, '赞')
			.replace(/[發髪髮]/g, '发')
			.replace(/[侭儘盡]/g, '尽')
			.replace(/[優忧憂]/g, '忧')
			.replace(/[俱倶]/g, '具')
			.replace(/[之的得]/g, 'の')
			.replace(/[與与]/g, 'と')
			.replace(/[她他牠祂]/g, '它')
			.replace(/[支隻枝]/g, '只')
			.replace(/[炮砲炰]/g, '泡')
			.replace(/[仲]/g, '中')
			.replace(/[原]/g, '元')
			.replace(/[迴]/g, '回')
			.replace(/[乾亁乹幹]/g, '干')
			.replace(/[避闢]/g, '辟')
			.replace(/[滷鹵卤鲁]/g, '魯')
			.replace(/[檯臺颱儓]/g, '台')
			.replace(/[宻祕秘]/g, '密')
			.replace(/[謎谜]/g, '迷')
			.replace(/[砂沙]/g, '沙')
			.replace(/[編篇编]/g, '篇')
		;

		arr = charTableList(k, options);
	}
	else
	{
		arr = charTableList(input, options)
	}

	return arr
		.reduce(function (s, a)
		{
			s.push(a[0]);
			return s
		}, [])
		.join('')
}

export default exports as typeof import('./list');
