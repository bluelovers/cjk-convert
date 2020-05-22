/**
 * Created by user on 2017/12/24/024.
 *
 * this module only do the char is exists in jp, zht, zhs
 * so don't use this module when u wanna fully zht <=> zhs
 *
 * 目前只支援 簡繁日漢字 並非全 cjk 漢字支援
 */

import { split } from '../util';
import ZHJP_TABLE, { TABLE_SAFE as ZHJP_TABLE_SAFE } from './table';
import { _re_cjk_conv } from 'regexp-helper/lib/cjk-conv';

export { ZHJP_TABLE, ZHJP_TABLE_SAFE };

export const KEY_JP = 'jp';
export const KEY_ZHT = 'zht';
export const KEY_ZHS = 'zhs';

export type IKEY_FROM_TO = typeof KEY_JP | typeof KEY_ZHT | typeof KEY_ZHS | 'jp' | 'zht' | 'zhs';

let inited = false;

export let TABLE: ITABLE_MAIN;

export let TABLE_SAFE: ITABLE_MAIN;

export interface ITABLE_MAIN
{
	[KEY_JP]: ITABLE,
	[KEY_ZHT]: ITABLE,
	[KEY_ZHS]: ITABLE,
}

export interface ITABLE
{
	[key: string]: ITABLESUB
}

export interface ITABLESUB
{
	[KEY_JP]: string,
	[KEY_ZHT]: string,
	[KEY_ZHS]: string,
}

export interface IOptions
{
	/**
	 * 忽略的字 or 任何支援 indexOf 的 Object
	 */
	skip?,
	/**
	 * safe mode
	 */
	safe?: boolean,
}

export const defaultOptions: IOptions = {
	safe: true,
};

// /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]+/u
const REGEXP_TEST = new RegExp(_re_cjk_conv('u').source + '+', 'u');

namespace _
{
	init();

	export let jp2zht: IFrom2To;
	export let jp2zhs: IFrom2To;
	export let zht2jp: IFrom2To;
	export let zht2zhs: IFrom2To;
	export let zhs2jp: IFrom2To;
	export let zhs2zht: IFrom2To;

	let langs = Object.keys(TABLE);

	// @ts-ignore
	langs.forEach(function (from: IKEY_FROM_TO)
	{
		// @ts-ignore
		langs.forEach(function (to: IKEY_FROM_TO)
		{
			if (from == to) return;

			_[`${from}2${to}`] = function (str, options?: IOptions): string
			{
				if (!REGEXP_TEST.test(str.toString()))
				{
					return str;
				}

				options = Object.assign({}, defaultOptions, options);

				return split(str)
					.map(function (char: string)
					{
						if (options.skip && options.skip.indexOf(char) != -1)
						{
							return char;
						}

						let c: string;
						if (c = _getdata(char, from, to, options.safe))
						{
							return c;
						}

						return char;
					})
					.join('')
					;
			} as IFrom2To;
		});
	});
}

/**
 * only 只將 日文漢字 => 轉為繁漢字
 * @type {IFrom2To}
 */
export const jp2zht = _.jp2zht as IFrom2To;
/**
 * only 只將 日文漢字 => 轉為簡漢字
 * @type {IFrom2To}
 */
export const jp2zhs = _.jp2zhs as IFrom2To;

/**
 * only 簡漢字 => 轉為日漢字
 * @type {IFrom2To}
 */
export const zhs2jp = _.zhs2jp;

/**
 * only 只將 繁漢字 => 轉為日文漢字
 * @type {IFrom2To}
 */
export const zht2jp = _.zht2jp;

/**
 * only 只將簡繁日 當中共通的 繁漢字 => 轉為簡漢字
 * 請勿作為簡繁轉換用
 * @type {IFrom2To}
 */
export const zht2zhs = _.zht2zhs;

/**
 * only 只將簡繁日 當中共通的 簡漢字 => 轉為繁漢字
 * 請勿作為簡繁轉換用
 * @type {IFrom2To}
 */
export const zhs2zht = _.zhs2zht;

/**
 * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
 *
 * @alias cjk2jp
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export function zh2jp(str, options?: IOptions): string
{
	if (!REGEXP_TEST.test(str.toString()))
	{
		return str;
	}

	options = Object.assign({}, defaultOptions, options);

	return split(str)
		.map(function (char: string)
		{
			if (options.skip && options.skip.indexOf(char) != -1)
			{
				return char;
			}

			let c: string;
			if (c = _getdata(char, KEY_ZHT, KEY_JP, options.safe))
			{
				return c;
			}
			else if (c = _getdata(char, KEY_ZHS, KEY_JP, options.safe))
			{
				return c;
			}

			return char;
		})
		.join('')
		;
}

/**
 * only 只將簡繁日 當中共通的 簡繁漢字 => 轉為日文漢字
 *
 * @alias zh2jp
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export const cjk2jp = zh2jp;

/**
 * only 只將簡繁日 當中共通的 漢字 => 轉為繁體漢字
 * 請勿作為簡繁轉換用
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export function cjk2zht(str, options?: IOptions): string
{
	if (!REGEXP_TEST.test(str.toString()))
	{
		return str;
	}

	options = Object.assign({}, defaultOptions, options);

	return split(str)
		.map(function (char: string)
		{
			if (options.skip && options.skip.indexOf(char) != -1)
			{
				return char;
			}

			let c: string;
			if (c = _getdata(char, KEY_JP, KEY_ZHT, options.safe))
			{
				return c;
			}
			else if (c = _getdata(char, KEY_ZHS, KEY_ZHT, options.safe))
			{
				return c;
			}

			return char;
		})
		.join('')
		;
}

/**
 * only 只將簡繁日 當中共通的 漢字 => 轉為簡體漢字
 * 請勿作為簡繁轉換用
 *
 * @param str
 * @param {IOptions} options
 * @returns {string}
 */
export function cjk2zhs(str, options?: IOptions): string
{
	if (!REGEXP_TEST.test(str.toString()))
	{
		return str;
	}

	options = Object.assign({}, defaultOptions, options);

	return split(str)
		.map(function (char: string)
		{
			if (options.skip && options.skip.indexOf(char) != -1)
			{
				return char;
			}

			let c: string;
			if (c = _getdata(char, KEY_JP, KEY_ZHS, options.safe))
			{
				return c;
			}
			else if (c = _getdata(char, KEY_ZHT, KEY_ZHS, options.safe))
			{
				return c;
			}

			return char;
		})
		.join('')
		;
}

//import * as fs from 'fs-extra';
//fs.outputJSON('./teachKanjiComparison.cache.json', TABLE, {
//	spaces: "\t",
//});
//fs.outputJSON('./teachKanjiComparison.cache2.json', TABLE_SAFE, {
//	spaces: "\t",
//});
//
//console.log(zhs2jp(1));
//
//let t = '魔物解説　ランク等話　蚀蝕蝕王で触王 冒険者ギルド解説 蚀|蝕战|戦马|馬亚|亞國預中日漢字對照表'
//
//console.log(zh2jp(t));
//console.log(zht2jp(t));
//console.log(zhs2jp(t));
//
//console.log(zht2zhs(t));
//console.log(zhs2zht(t));

export function init(overwrite?: boolean)
{
	if (inited && !overwrite)
	{
		return TABLE;
	}

	TABLE = _(ZHJP_TABLE);
	TABLE_SAFE = _(ZHJP_TABLE_SAFE);

	function _(src): ITABLE_MAIN
	{
		let to = {};
		to[KEY_JP] = {} as ITABLE;
		to[KEY_ZHT] = {} as ITABLE;
		to[KEY_ZHS] = {} as ITABLE;

		src.forEach(function (vrow: string[])
		{
			let [jp, zht, zhs] = vrow;

			let k = KEY_JP;
			for (let c of jp)
			{
				if (!c || to[k][c])
				{
					continue;
				}

				to[k][c] = to[k][c] || {} as ITABLESUB;

				to[k][c][k] = c;
				to[k][c][KEY_ZHT] = zht[0];
				to[k][c][KEY_ZHS] = zhs[0];
			}

			k = KEY_ZHT;
			for (let c of zht)
			{
				if (!c || to[k][c])
				{
					continue;
				}

				to[k][c] = to[k][c] || {} as ITABLESUB;

				to[k][c][KEY_JP] = jp[0];
				to[k][c][k] = c;
				to[k][c][KEY_ZHS] = zhs[0];
			}

			k = KEY_ZHS;
			for (let c of zhs)
			{
				if (!c || to[k][c])
				{
					continue;
				}

				to[k][c] = to[k][c] || {} as ITABLESUB;

				to[k][c][KEY_JP] = jp[0];
				to[k][c][KEY_ZHT] = zht[0];
				to[k][c][k] = c;
			}
		});

		// @ts-ignore
		return to;
	}

	inited = true;

	return TABLE;
}

export function _getdata(char: string, from: IKEY_FROM_TO, to: IKEY_FROM_TO, safe?: boolean): string
{
	if (safe)
	{
		return (TABLE_SAFE[from][char]) ? TABLE_SAFE[from][char][to] : null;
	}

	return (TABLE[from][char]) ? TABLE[from][char][to] : null;
}

export interface IFrom2To extends Function
{
	(str, options?: IOptions): string;
}

export default exports as typeof import('./core');
