/**
 * Created by user on 2018/2/17/017.
 */

import { jp2zht, jp2zhs } from '../../jp';
import libTable from './table';
import { array_unique } from '../../util';

export interface IOptions
{
	skip?
}

export function _get(a, value, ...values)
{
	a = libTable._get(a, value, ...values);

	a = array_unique(a);
	a.sort();

	return a;
}

function _wrapFn(fn: string)
{
	return function (char: string, options: IOptions = {}): string[]
	{
		if (!char)
		{
			return null;
		}

		if (options.skip && options.skip.indexOf(char) != -1)
		{
			return [char];
		}

		let a = libTable[fn](char);

		a = array_unique(a);
		a.sort();

		return a;
	}
}

/**
 * 取出此漢字所對應的繁漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
export const tw = _wrapFn('tw');

/**
 * 取出此漢字所對應的簡漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
export const cn = _wrapFn('cn');

/**
 * 取出此漢字所對應的日漢字
 * @type {(char: string, options?: IOptions) => string[]}
 */
export const jp = _wrapFn('jp');

/**
 * 自動取出此漢字所對應的簡繁日漢字
 *
 * @param {string} char
 * @param {IOptions} options
 * @returns {string[]}
 */
export function auto(char: string, options: IOptions = {}): string[]
{
	if (!char)
	{
		return null;
	}

	if (options.skip && options.skip.indexOf(char) != -1)
	{
		return [char];
	}

	let jt = jp2zht(char);
	let js = jp2zhs(char);

	let a = _get([],
		char,
		libTable.tw(char),
		libTable.cn(char),
		(!options.skip || options.skip.indexOf(jt) == -1) && libTable.cn(jt),
		(!options.skip || options.skip.indexOf(js) == -1) && libTable.tw(js),
		libTable.jp(char),
		);

	/*
	if (!skip || skip.indexOf(jt) == -1)
	{
		a = a.concat(...cn(jt));
	}
	if (!skip || skip.indexOf(js) == -1)
	{
		a = a.concat(...tw(js));
	}

	if (zhtw_convert.table_jp[char])
	{
		a = a.concat(jp(char));
	}

	a = array_unique(a);
	a.sort();
	*/

	return a;
}

import * as zhTable from './index';
export default zhTable;
